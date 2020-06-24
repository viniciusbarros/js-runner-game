class Character extends CharAnimation {

    constructor(image) {
        let realWidth = 220;
        let realHeight = 270;
        let displayWidth = 110;
        let displayHeight = 135;
        let spriteMatrixColumns = 4;
        let spriteMatrixLines = 4;

        super(image, realWidth, realHeight, displayWidth, displayHeight, spriteMatrixColumns, spriteMatrixLines);
        this.createSpriteMatrix();
    }

    draw(){
        // this.move();
        super.draw();
        this.applyGravity();
    }

    isColliding(obj){
        return collideRectRect(
            this.posX,
            this.posY,
            this.displayWidth * COLLISION_PRECISION_X,
            this.displayHeight * COLLISION_PRECISION_Y,
            obj.posX,
            obj.posY,
            obj.displayWidth * COLLISION_PRECISION_X,
            obj.displayHeight * COLLISION_PRECISION_Y);
    }




}