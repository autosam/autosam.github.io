let lastTime = Date.now();
let deltaTime = 0;

setPetAppearance(getRandomPetAppearance());

let partPositions = {
    breath: 0,
    head: 0,
    eyes: 0,
    mouth: 0,
    body: 0,
    x: 0,
    y: 0,
    target_x: 0,
    target_y: 0,
    walking: 0,
    walk: 0,
    is_walking: false,
    scale: 1,
    y_add_constant: 50,
    walk_direction: 0,
}

function updatePet(){
    let time = Date.now();
    deltaTime = time - lastTime;
    lastTime = time;
    if(deltaTime > 1000) deltaTime = 0;

    if(partPositions.walk_direction > 0){
        footRight.style['z-index'] = 1;
        footLeft.style['z-index'] = 2;
    } else {
        footRight.style['z-index'] = 2;
        footLeft.style['z-index'] = 1;        
    }

    updatePartPositions();
    
    head.style.transform = `translate(0, ${partPositions.head  + partPositions.walk * 1}px) rotate(${partPositions.walk * 2}deg)`;
    eyes.style.transform = `translate(0, ${partPositions.eyes  + partPositions.walk * 0.8}px) rotate(${partPositions.walk * 1}deg)`;
    mouth.style.transform = `translate(0, ${partPositions.mouth  + partPositions.walk * 0.8}px) rotate(${partPositions.walk * 1.5}deg)`;
    body.style.transform = `scale(${1 + partPositions.body / -40}) translate(0, ${partPositions.body + partPositions.walk * -1}px)`;
    footRight.style.transform = `scale(${1 + partPositions.body / -50}) translate(${partPositions.walk * 5}px, ${partPositions.body * 2 + partPositions.walk * 5}px) rotate(${partPositions.walk * -10 * partPositions.walk_direction}deg)`;
    footLeft.style.transform = `scale(${1 + partPositions.body / -50}) translate(${partPositions.walk * 5}px, ${partPositions.body * 2 + partPositions.walk * -5}px) rotate(${partPositions.walk * 10 * partPositions.walk_direction}deg)`;
    whole.style.transform = `translate(${partPositions.x}px, ${partPositions.y_add_constant + partPositions.y}px) scale(${1 + partPositions.y * 0.004})`;
    shadow.style.transform = `scale(${0.8 + partPositions.body / -30})`;

    let currentPositionX = partPositions.x,
        currentPositionY = partPositions.y;

    partPositions.x = move(partPositions.x, partPositions.target_x, PET_MOVING_SPEED * deltaTime);
    partPositions.y = move(partPositions.y, partPositions.target_y, PET_MOVING_SPEED * deltaTime);

    let diffX = currentPositionX - partPositions.x,
        diffY = currentPositionY - partPositions.y;
    
    let absMovement = Math.abs(diffX) + Math.abs(diffY);
    if(absMovement > PET_MOVING_SPEED)
        updateWalkPosition(absMovement, diffX, diffY);
    else{
        partPositions.walk = Lerp(partPositions.walk, 0, 0.01 * deltaTime);
        partPositions.walk_direction = Lerp(partPositions.walk_direction, 0, 0.01 * deltaTime);
        partPositions.walking = Lerp(partPositions.walking, 0, 0.01 * deltaTime);
    }
    // document.querySelector('#debug-text').innerHTML = partPositions.walking;
}

function updatePartPositions(){
    partPositions.breath += PET_BREATHING_SPEED * deltaTime;
    if(partPositions.breath > Math.PI * 2) partPositions.breath = 0;
    let breathFloat = Math.sin(partPositions.breath);

    partPositions.head = breathFloat * 3;
    partPositions.eyes = breathFloat * 2;
    partPositions.mouth = breathFloat * 2.5;
    partPositions.body = breathFloat * 1;
}

function updateWalkPosition(diff, diffX, diffY){
    partPositions.walking += diff * 0.03 * deltaTime;
    if(partPositions.walking > Math.PI * 2) partPositions.walking = 0;
    let walkFloat = Math.sin(partPositions.walking);
    partPositions.walk = walkFloat * 1;
    // partPositions.walk_direction = diffX * 10;
    let walkDirection = diffX > 0 ? 1 : -1;
    partPositions.walk_direction = Lerp(partPositions.walk_direction, -walkDirection, 0.007 * deltaTime);
}

function wanderPet(){
    if(random(0, 10000) > 10) return;
    setPetTarget(random(-100, 100), random(-5, 40));
}

function setPetTarget(x, y, instant, lockMs){ // todo implement locking
    partPositions.target_x = x;
    partPositions.target_y = y;
    if(instant){
        partPositions.x = x;
        partPositions.y = y;
    }
}

function blinkPet(){
    if(random(0, 100) > 10) return;
    eyes.src = `resources/${PET_APPEARANCE_SET.eyes[1]}`;
    setTimeout(() => {
        eyes.src = `resources/${PET_APPEARANCE_SET.eyes[0]}`;
    }, random(50, 150));
}

setInterval(updatePet, 0);
setInterval(wanderPet);
setInterval(blinkPet, 500);