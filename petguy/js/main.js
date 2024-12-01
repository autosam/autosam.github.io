let SETTINGS = {
	tickInterval: 500,
}

let CURRENT = {
	location: '',
	state: 'normal',
	hunger: 50,
	fun: 50,
	energy: 90,
	social: 50,
}

const dom = {
	interactionsPanel: document.querySelector('#interactions-panel'),
	locationHeader: document.querySelector('#location-header'),
}

setLocation('home', true);
mainInteractionTree();

function mainInteractionTree(){
	rebuildTrees();

	let tree = {
		INDOOR_OBJECTS: validate(INDOOR_OBJECTS, CURRENT.location == 'home'),
		OUTDOOR_ACTIVITIES_FROM_HOME: validate(OUTDOOR_ACTIVITIES_FROM_HOME, CURRENT.location == 'home'),
		PARK_INTERACTION: validate(tINTERACTION, CURRENT.location == 'park'),
		PARK_ACTIVITIES: validate(PARK_ACTIVITIES, CURRENT.location == 'park'),
		
		tGOHOME,
	}

	createInteractions(tree)
}

function setLocation(location, noTask){
	if(!noTask){
		setCurrentTask({
			title: 'Going to: ' + capitalize(location),
			time: 2000,
			tick: () => {
				// setPetTarget(-document.body.clientWidth, 0);
				petWorldFadeout();
			},
			finish: () => {
				setLocation(location, true);
				// setPetTarget(document.body.clientWidth, 0, true);
				// setPetTarget(0, 0);
				petWorldFadein();
			}
		});
		return;
	}
	CURRENT.location = location;
	dom.locationHeader.textContent = 'Currently at ' + capitalize(location);
	mainInteractionTree();
}

function setState(state){
	STATE = state;
}

function createInteractions(interactionTree){
	dom.interactionsPanel.innerHTML = '';
	for(let key in interactionTree){

		let interaction = interactionTree[key];
		if(interaction === null) continue;

		if(!interaction.domType) {
			interaction.domType = 'button';
		}

		let element = document.createElement(interaction.domType);
			element.textContent = interaction.text;

			if(key == "INTERACTION_BACK"){
				element.className = 'btn btn-back'
			} else if(!interaction.className)
				element.className = 'btn btn-action';
			else 
				element.className = interaction.className;

			if(interaction.options){ // category
				element.innerHTML += ' >';
				element.className = 'btn btn-category';
				element.onclick = () => {
					createInteractions({
						...interaction.options, 
						...{
							INTERACTION_BACK: {
								text: `< ${interaction.text}`,
								action: () => {
									createInteractions(interactionTree);
								}
							}
						},
					});
				}
			} else {
				if(typeof interaction.action === "function")
					element.onclick = interaction.action;
			}
			dom.interactionsPanel.appendChild(element);
	}
}

function validate(ret, arg){
	if(arg || arg === undefined) return ret;
	return null;
}

function capitalize(str){
	let words = str.split(' ');
	return words.map(word => {
		return word[0].toUpperCase() + word.substring(1);
	}).join(' ');
}

function setCurrentTask(taskConfig){
	if(CURRENT.task) return false; // already has task

	if(!taskConfig.time) taskConfig.time = 5000; // 5 seconds default

	// taskConfig.time = -1;

	CURRENT.task = taskConfig;

	taskConfig.time += SETTINGS.tickInterval;
	taskConfig.maxTime = taskConfig.time;

	document.querySelector("#interactions-panel").classList.add('hide');
	document.querySelector("#task-panel").classList.remove('hide');

	updateTask(CURRENT.task);
}

function endCurrentTask(){
	document.querySelector("#interactions-panel").classList.remove('hide');
	document.querySelector("#task-panel").classList.add('hide');
	CURRENT.task = null;
}

function cancelCurrentTask(){
	endCurrentTask();
	petWorldFadein();
}

function updateTask(task){
	task.time -= SETTINGS.tickInterval;
	let secondsRemaining = Math.ceil(task.time / 1000);
	let completionPercent = Math.floor(task.time / task.maxTime * 100);

	document.querySelector("#task-title").textContent = task.title;
	document.querySelector("#task-timer").textContent = secondsRemaining + ' Second(s) remaining...';
	document.querySelector("#task-timer-bar-progress").style.width = completionPercent + '%';

	if(typeof task.tick === 'function'){
		task.tick();
	}

	if(task.time <= 0) {
		if(task.finish) task.finish();
		endCurrentTask();
		updateNeeds();
	}
}

function updateNeeds(){
	pUpdateNeed('hunger', 0.05);
	pUpdateNeed('fun', 0.02);
	pUpdateNeed('energy', 0.04);
	pUpdateNeed('social', 0.01);
}

function pUpdateNeed(need, decreaseRate){
	CURRENT[need] -= decreaseRate;
	CURRENT[need] = clamp(CURRENT[need], 0, 100);
	let element = document.querySelector(`#stat-${need}-bar`),
		percentage = Math.round(CURRENT[need]) + '%';
	element.style.width = percentage; element.title = percentage;
}

function update(){
	updateNeeds();
	if(CURRENT.task) updateTask(CURRENT.task);
}
setInterval(update, SETTINGS.tickInterval);
update();

let input = document.createElement('input'),
	submitBtn = document.createElement('button'),
	output = document.createElement('div');

submitBtn.textContent = 'Submit';
output.textContent = 'output';
submitBtn.onclick = function(){
	(async function(){
		let	header = `[You are not an AI language model, Imagine you are a normal person named "Dave", Location: "${CURRENT.location}", Response Length: short, Not going into detail, surface level response] Answer this a Dave: `;
		let userInput = header + input.value;
		deepai.setApiKey('quickstart-QUdJIGlzIGNvbWluZy4uLi4K');

		(async function() {
		    var response = await deepai.callStandardApi("text-generator", {
		            text: input.value,
		    });
		    output.textContent = response.output.trim();
		    console.log({userInput, ...response});
		})()
	})();
}
// [At Movie theater, Response Length: short, Not going into detail, surface level response] Hello how are you?
// document.body.appendChild(input);
// document.body.appendChild(submitBtn);
// document.body.appendChild(output);