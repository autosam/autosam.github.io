let PET_BREATHING_SPEED = 0.003,
    PET_MOVING_SPEED = 0.02;

PET_APPEARANCE_SET = null;

let head = document.querySelector('#pet-head'),
    eyes = document.querySelector('#pet-eyes'),
    mouth = document.querySelector('#pet-mouth'),
    body = document.querySelector('#pet-body'),
    footRight = document.querySelector('#pet-foot-right'),
    footLeft = document.querySelector('#pet-foot-left'),
    whole = document.querySelector('#pet-whole'),
    shadow = document.querySelector('#pet-shadow'),
    world = document.querySelector('#pet-world');

PET_APPEARANCE_HEAD = [
    'head_01.png',
    'head_02.png',
    'head_03.png',
    'head_04.png',
    'head_05.png',
    'head_06.png',
    'head_07.png',
    'head_08.png'
];

PET_APPEARANCE_BODY = [
    'body_01.png',
    'body_02.png',
    'body_03.png',
    'body_04.png',
    'body_05.png',
];

PET_APPEARANCE_EYES = [
    ['eyes_01.png', 'eyes_01_closed.png'],
    ['eyes_02.png', 'eyes_01_closed.png'],
    ['eyes_03.png', 'eyes_01_closed.png'],
    ['eyes_04.png', 'eyes_01_closed.png'],
    ['eyes_05.png', 'eyes_01_closed.png'],
    ['eyes_06.png', 'eyes_01_closed.png'],
];

PET_APPEARANCE_MOUTH = [
    ['mouth_01_neutral.png', 'mouth_01_happy.png', 'mouth_01_sad.png', 'mouth_01_joyful.png'],
    ['mouth_01_neutral.png', 'mouth_02_happy.png', 'mouth_02_sad.png', 'mouth_02_joyful.png'],
];

getRandomPetAppearance = () => {
    return {
        head: randomFromArray(PET_APPEARANCE_HEAD),
        body: randomFromArray(PET_APPEARANCE_BODY),
        eyes: randomFromArray(PET_APPEARANCE_EYES),
        mouth: randomFromArray(PET_APPEARANCE_MOUTH),
    }
}

setPetAppearance = (set) => {
    head.src = `resources/${set.head}`;
    body.src = `resources/${set.body}`;
    eyes.src = `resources/${set.eyes[0]}`;
    mouth.src = `resources/${set.mouth[0]}`;
    PET_APPEARANCE_SET = set;
}

petWorldFadeout = () => {
    let hue = random(0, 0);
    world.style.filter = `blur(200px) hue-rotate(${hue}deg)`;
}

petWorldFadein = () => {
    let hue = random(0, 0);
    world.style.filter = `blur(0px) hue-rotate(${hue}deg)`;
}

setPetWorldColorPalette = (hue) => {
    if(!hue) hue = random(0, 1000);
    // document.body.style.filter = `hue-rotate(${hue}deg)`; 686
    // document.body.parentElement.style.filter = `sepia(0) hue-rotate(${hue}deg) saturate(${random(1, 2)}) brightness(0.8) contrast(1.2)`
}

petWorldFadeout();
setTimeout(() => petWorldFadein(), 200);
setPetWorldColorPalette();