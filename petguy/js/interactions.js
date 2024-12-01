let tMAIN = {};

function rebuildTrees(){

tINTERACTION = {
	text: 'Interactions',
	options: {
		FRIENDLY: {
			text: 'Friendly',
			options: {
				FRIENDLY_WEATHER_INTERACTION: {
					text: 'Talk about weather'
				},
				FRIENDLY_INTERESTS_INTREACTION: {
					text: 'Talk about interests'
				},
				FRIENDLY_MEMES_INTERACION: {
					text: 'Talk about memes'
				},
				FRIENDLY_POLITICS_INTERACION: {
					text: 'Talk about politics'
				},
				TEST_NULL: null,
			}
		},
		FUNNY: {
			text: 'Funny',
			options: {
				FUNNY_WEATHER_INTERACTION: {
					text: 'Joke about weather'
				},
				FUNNY_INTERESTS_INTREACTION: {
					text: 'Joke about interests'
				},
				FUNNY_MEMES_INTERACION: {
					text: 'Joke about memes'
				},
				FUNNY_POLITICS_INTERACION: {
					text: 'Joke about politics'
				},
				CAT_WHAT: {
					text: "TESTING WHAT",
					options: {
						TEST_INTERACTION: {
							text: 'yup...'
						}
					}
				}
			}
		}
	}
}

OUTDOOR_ACTIVITIES_FROM_HOME = {
	text: 'Outdoor',
	options: {
		GOTO: {
			text: 'Go to ...',
			options:{
				PARK: validate({
					text: 'Go to the park',
					action: () => setLocation('park'),
				}, CURRENT.location != 'park'),
				STORE: validate({
					text: 'Go to the mall',
					action: () => setLocation('mall'),
				}, CURRENT.location != 'mall'),
				BEACH: {
					text: 'Go to the beach',
					action: () => setLocation('beach'),
				},
				GYM: {
					text: 'Go to the gym',
					action: () => setLocation('gym'),
				},
				LIBRARY: {
					text: 'Go to the library',
					action: () => setLocation('library'),
				},
				MUSEUM: {
					text: 'Go to the museum',
					action: () => setLocation('museum'),
				},
				ZOO: {
					text: 'Go to the zoo',
					action: () => setLocation('zoo'),
				},
				AQUA: {
					text: 'Go to the aquarium',
					action: () => setLocation('aquarium'),
				},
				MOVIE: {
					text: 'Go to the movie theater',
					action: () => setLocation('movie theater'),
				},
				CONCERT: {
					text: 'Go to a concert',
					action: () => setLocation('concert'),
				},
				SPORTSGAME: {
					text: 'Go to a sports game',
					action: () => setLocation('sports game'),
				},
				RESTURANT: {
					text: 'Go to a restaurant',
					action: () => setLocation('restaurant'),
				},
				CLUB: {
					text: 'Go to a club',
					action: () => setLocation('club'),
				},
				BAR: {
					text: 'Go to a bar',
					action: () => setLocation('bar'),
				},
				COFFEESHOP: {
					text: 'Go to a coffee shop',
					action: () => setLocation('coffee shop'),
				},
				THEMEPARK: {
					text: 'Go to a theme park',
					action: () => setLocation('theme park'),
				},
			}
		}
	}
}

INDOOR_OBJECTS = {
	text: 'Appliances',
	options: {
		FRIDGE: {
			text: 'Fridge',
			options: {
				snack: taskGenerator.fridgeItem('snack', 30),
				milk: taskGenerator.fridgeItem('milk', 10),
				butter: taskGenerator.fridgeItem('butter', 5),
				cheese: taskGenerator.fridgeItem('cheese', 15),
				eggs: taskGenerator.fridgeItem('eggs', 20),
				ham: taskGenerator.fridgeItem('ham', 25),
				juice: taskGenerator.fridgeItem('orange juice', 10),
				salad: taskGenerator.fridgeItem('salad', 20),
				cake: taskGenerator.fridgeItem('cake', 15),
				jam: taskGenerator.fridgeItem('jam', 10),
				yogurt: taskGenerator.fridgeItem('yogurt', 10),
				bread: taskGenerator.fridgeItem('bread', 15),
				chicken: taskGenerator.fridgeItem('chicken', 30),
				water: taskGenerator.fridgeItem('water', 5),
				fruit: taskGenerator.fridgeItem('fruit', 15),
				soup: taskGenerator.fridgeItem('soup', 25),
				pudding: taskGenerator.fridgeItem('pudding', 10),
				sandwich: taskGenerator.fridgeItem('sandwich', 20),
				pie: taskGenerator.fridgeItem('pie', 15),
				mustard: taskGenerator.fridgeItem('mustard', 5),
				chocolate: taskGenerator.fridgeItem('chocolate', 10),
				lettuce: taskGenerator.fridgeItem('lettuce', 10),
				turkey: taskGenerator.fridgeItem('turkey', 35),
				milkshake: taskGenerator.fridgeItem('milkshake', 15),
				berries: taskGenerator.fridgeItem('berries', 15),
				stew: taskGenerator.fridgeItem('stew', 30),
				ice_cream: taskGenerator.fridgeItem('ice cream', 10),
				wrap: taskGenerator.fridgeItem('wrap', 25),
				cheesecake: taskGenerator.fridgeItem('cheesecake', 15),
			}
		}
	}
}

PARK_ACTIVITIES = {
	text: 'Activities',
	options: {
		scavenger_hunt: taskGenerator.generic('Have a scavenger hunt', {title: 'Having a scavenger hunt', time: 60000, tick: () => {CURRENT.fun += 1; CURRENT.energy -= Math.random()}}),
	}
}

tGOHOME = validate({
	text: 'Go Home',
	domType: 'button',
	className: 'btn btn-back',
	action: () => setLocation('home')
}, CURRENT.location != 'home')

}

// individual task generator function
const taskGenerator = {
	data: {},
	fridgeItem: function(name, hungerValue) {
		if(!this.data['fridge']) this.data['fridge'] = {};
		this.data.fridge[name] = {
			text: `Have ${name}`,
			action: () => {
				setCurrentTask({
					title: `Eating ${name}`,
					time: 5000,
					finish: () => {
						CURRENT.hunger += hungerValue;
					}
				});
			}
		};
		return this.data.fridge[name];
	},
	generic: function(optionName, task){
		return {
			text: optionName,
			action: () => {
				setCurrentTask(task);
			}
		}
	}
}