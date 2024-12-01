class Entity {
    constructor(imageData){
        this.node = document.createElement('div');
        this.node.className = "entity";

        this.pixelSize = 8;

        this.x = 0;
        this.y = 0;

        this.imageData = this.prepareImageData(imageData);

        this.pixels = this.generatePixels(this.imageData.length, this.imageData[0].length);

        this.x = ((document.body.clientWidth / this.pixelSize) - this.imageData[0].length) / 2;
        this.y = ((document.body.clientHeight / this.pixelSize) - this.imageData.length) / 2;


        this.pixelInterval = setInterval(() => {
            this.pixels.forEach(p => p.update());
        }, 16)

        this.bodyInterval = setInterval(() => {
            if(random(0, 2) != 0) return;
            // this.x = random(0, 150);
            // this.y = random(0, 75);
        }, 1000);
        
        this.lastMousePosition = {x: 0, y: 0};

        document.addEventListener('mousemove', (event) => {
            if (event.pageX == null && event.clientX != null) {
                eventDoc = (event.target && event.target.ownerDocument) || document;
                doc = eventDoc.documentElement;
                body = eventDoc.body;
    
                event.pageX = event.clientX +
                  (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
                  (doc && doc.clientLeft || body && body.clientLeft || 0);
                event.pageY = event.clientY +
                  (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
                  (doc && doc.clientTop  || body && body.clientTop  || 0 );
            }
    

            let x = (event.pageX / this.pixelSize) - this.imageData[0].length/2;
            let y = (event.pageY / this.pixelSize) - this.imageData.length/2;

            const offsetX = this.lastMousePosition.x - x;
            const offsetY = this.lastMousePosition.y - y;

            this.lastMousePosition.x = x;
            this.lastMousePosition.y = y;

            this.pixels.forEach(p => {
                p.parentOffsetX -= offsetX * Math.random() * -0.5
                p.parentOffsetY -= offsetY * Math.random() * -0.5
            });
        })
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
    
    generatePixels(width, height){
        const pixels = [];
        for(let x = 0; x < height; x++)
            for(let y = 0; y < width; y++){
                const p = new Pixel(x, y, this);
                pixels.push(p);
                this.node.appendChild(p.node);
            }

        return pixels;  
    }

    getPixelState(x, y){
        if(!this.imageData[x]) return false;
        return this.imageData[x][y] === '1';
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
        this.x = x;
        this.y = y;

        this.parentOffsetX = 0;
        this.parentOffsetY = 0;

        this.animationFloat = 0;
        this.animationFloatAddSpeed = Math.random() * 0.1;
        this.animationFloatStrength = Math.random();

        this.node = this.#createPixel(x, y);
    }
    setPosition(x, y){
        this.node.style.left = `${x}px`;
        this.node.style.top = `${y}px`;
    }
    update(){
        const state = this.parent.getPixelState(this.localY, this.localX);

        this.animationFloat = (this.animationFloat + this.animationFloatAddSpeed);
        if(this.animationFloat > Math.PI * 2) this.animationFloat = 0;

        this.parentOffsetX = lerp(this.parentOffsetX, this.parent.x, this.animationFloatAddSpeed * 2);
        this.parentOffsetY = lerp(this.parentOffsetY, this.parent.y, this.animationFloatAddSpeed * 2);

        const targetX = this.x + this.parentOffsetX,
        targetY = this.y + this.parentOffsetY;

        this.setPosition(
            Math.sin(this.animationFloat) * this.animationFloatStrength * this.pixelSize + targetX * this.pixelSize,
            Math.cos(this.animationFloat) * this.animationFloatStrength * this.pixelSize + targetY * this.pixelSize
        )

        this.node.style.opacity = `${Math.max(Math.sin(this.animationFloat), random(2, 5) * 0.1)}`

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

const imageDataSimple = `11111111111111111111111111111111
11111111111111111111111111111111
11111111111111111111111111111111
11111111111111111111111111111111
11111111111111111111111111111111
11111111111111111111111111111111
11111111111111111111111111111111
11111111111111111111111111111111
11111111111111111111111111111111
11111111111111111111111111111111
11111111111111111111111111111111
11111111111111111111111111111111
11111111111111111111111111111111
11111111111111111111111111111111
11111111111111111111111111111111
11111111111111111111111111111111
11111111111111111111111111111111
11111111111111111111111111111111
11111111111111111111111111111111
11111111111111111111111111111111
11111111111111111111111111111111
11111111111111111111111111111111
11111111111111111111111111111111
11111111111111111111111111111111
11111111111111111111111111111111
11111111111111111111111111111111
11111111111111111111111111111111
11111111111111111111111111111111
`

const e = new Entity(imageDataSimple);
console.log(e)
document.body.appendChild(e.node);