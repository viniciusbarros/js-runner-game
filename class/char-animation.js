class CharAnimation {
    image;
    realWidth;
    realHeight;
    displayWidth;
    displayHeight;
    spriteMatrix = [];
    spriteMatrixColumns = 0;
    spriteMatrixLines = 0;
    currentFrame = 0;
    posX;
    posY;
    gravity = 3;
    jumpSpeed = 0;
    jumpSpeedIncrement = -30;
    jumpYIncrement = 100;

    constructor(image, realWidth, realHeight, displayWidth, displayHeight, spriteMatrixColumns, spriteMatrixLines) {
        this.image = image;
        this.realWidth = realWidth;
        this.realHeight = realHeight;
        this.displayWidth = displayWidth;
        this.displayHeight = displayHeight;
        this.spriteMatrixColumns = spriteMatrixColumns;
        this.spriteMatrixLines = spriteMatrixLines;
        this.posY = height - this.displayHeight - 40;
        this.initialY = this.posY;
        this.posX = 0
    }

    createSpriteMatrix(){
        for (let y = 0; y < this.spriteMatrixLines; y++) {
            for (let x = 0; x < this.spriteMatrixColumns; x++) {
                this.spriteMatrix.push([this.realWidth * x, this.realHeight * y]);
            }
        }
    }

    draw() {
        image(this.image,
            this.posX,
            this.posY,
            this.displayWidth,
            this.displayHeight,
            this.spriteMatrix[this.currentFrame][0],
            this.spriteMatrix[this.currentFrame][1],
            this.realWidth,
            this.realHeight
        );

        if(DEBUG){
            noFill();
            rect(this.posX, this.posY, this.displayWidth * COLLISION_PRECISION_X, this.displayHeight * COLLISION_PRECISION_Y);
        }
        this.animateSprite();
    }

    animateSprite() {
        this.currentFrame++;
        if(this.currentFrame == this.spriteMatrix.length -1){
            this.currentFrame = 0;
        }
    }

    jump(){
        this.jumpSpeed = this.jumpSpeedIncrement;
    }

    applyGravity(){
        this.posY = this.posY + this.jumpSpeed;
        // Accelerates with gravity as it is painted
        this.jumpSpeed += this.gravity;

        if(this.posY > this.initialY){
            this.posY = this.initialY;
        }
    }
}