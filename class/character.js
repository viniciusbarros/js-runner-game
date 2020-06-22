class Character {
    image;
    realWidth = 220;
    realHeight = 270;
    displayWidth = 110;
    displayHeight = 135;
    spriteMatrix = [];
    currentFrame = 0;

    constructor(image, speed) {
        this.image = image;
        this.speed = speed;
        for (let y = 0; y < 4; y++) {
            for (let x = 0; x < 4; x++) {
                this.spriteMatrix.push([this.realWidth * x, this.realHeight * y]);
            }
        }
        console.log(this.spriteMatrix);
    }

    draw() {
        image(this.image, 0,
            height - this.displayHeight,
            this.displayWidth,
            this.displayHeight,
            this.spriteMatrix[this.currentFrame][0],
            this.spriteMatrix[this.currentFrame][1],
            this.realWidth,
            this.realHeight
        );
        this.animateSprite();
    }

    animateSprite() {
        this.currentFrame++;
        if(this.currentFrame == this.spriteMatrix.length -1){
            this.currentFrame = 0;
        }
    }
}