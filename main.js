class Entity {
    constructor(imageData){
        this.node = document.createElement('div');
        this.node.className = "entity";

        this.pixelSize = 8;

        this.x = 0;
        this.y = 0;

        this.imageData = this.prepareImageData(imageData);

        this.pixels = this.generatePixels();


        this.pixelInterval = setInterval(() => {
            this.pixels.forEach(p => p.update());
        }, 16)

        this.bodyInterval = setInterval(() => {
            this.x = document.body.clientWidth / 2;
            this.y = document.body.clientHeight / 2;
        }, 500);
    }

    prepareImageData(data){
        let width, height;
        let res = [];
        const lines = data.split('\n');
        lines.forEach((line, i) => {
            res[i] = line.split('').filter(e => e);
        })
        console.log(res);
        return res;
    }

    getPixelState(x, y){
        if(!this.imageData[x]) return false;
        return this.imageData[x][y] === '1';
    }

    generatePixels(){
        const pixels = [];
        for(let x = 0; x < 11; x++)
            for(let y = 0; y < 42; y++){
                const p = new Pixel(x, y, this);
                pixels.push(p);
                this.node.appendChild(p.node);
            }

        return pixels;  
    }

    // updatePixel(pixel){
    //     const x = pixel._x, y = pixel._y;

    //     pixel.style.left = `${Math.random() * this.pixelSize + x * this.pixelSize}px`;
    //     pixel.style.top = `${Math.random() * this.pixelSize + y * this.pixelSize}px`;

    //     pixel.style.background = this.getPixelState(y, x) && (Math.random() > 0.1) ? 'white' : 'transparent';
    // }


}

class Pixel {
    constructor(x, y, parent){
        this.parent = parent;
        this.localX = x;
        this.localY = y;
        this.pixelSize = this.parent.pixelSize;

        this.animationFloat = 0;
        this.animationFloatAddSpeed = Math.random() * 0.1;
        this.animationFloatStrength = Math.random() * 0.5;

        this.node = this.#createPixel(x, y);
    }
    setPosition(x, y){

        const targetX = x + this.parent.x;
        const targetY = y + this.parent.y;

        this.node.style.left = `${targetX}px`;
        this.node.style.top = `${targetY}px`;
    }
    update(){
        const state = this.parent.getPixelState(this.localY, this.localX);

        this.animationFloat = (this.animationFloat + this.animationFloatAddSpeed);
        if(this.animationFloat > Math.PI * 2) this.animationFloat = 0;

        this.setPosition(
            Math.sin(this.animationFloat) * this.animationFloatStrength * this.pixelSize + this.localX * this.pixelSize,
            Math.cos(this.animationFloat) * this.animationFloatStrength * this.pixelSize + this.localY * this.pixelSize
        )

        // this.node.style.background = state && (Math.random() > 0.1) ? 'white' : 'transparent';
    }
    #createPixel(x, y){
        const pixel = document.createElement('div');
            pixel.className = 'entity__pixel';
            pixel.style.width = `${this.pixelSize}px`;
            pixel.style.height = `${this.pixelSize}px`;
            pixel.style.background = this.parent.getPixelState(y, x) ? 'white' : 'transparent';

            pixel.style.left = `${x * this.pixelSize}px`;
            pixel.style.top = `${y * this.pixelSize}px`;

            pixel._x = x; pixel._y = y;

        return pixel;
    }
}


const imageData = `0000100000
0001111000
0001111000
0011111000
0011111000
0011111000
0111111100
0111111100
0111111110
0111111110
0111111110
0111111110
0111111111
0111111111
1111111111
1111111111
1111111111
1111111011
1111111011
1101111011
1101111011
1101111010
1101111010
1101111010
1101111010
1001111010
0001111010
0001111010
0001111010
0001111010
0001111000
0001111000
0000111000
0000111000
0000011000
0000011000
0000010000
0000010000
0000010000
0000010000`;

const e = new Entity(imageData);
console.log(e)
document.body.appendChild(e.node);