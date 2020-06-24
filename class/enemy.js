class Enemy extends CharAnimation {

    constructor(image) {
        let realWidth = 104;
        let realHeight = 104;
        let displayWidth = 52;
        let displayHeight = 52;
        let spriteMatrixColumns = 4;
        let spriteMatrixLines = 7;
        

        super(image, realWidth, realHeight, displayWidth, displayHeight, spriteMatrixColumns, spriteMatrixLines);
        this.createSpriteMatrix();
        this.initialPosX = width - this.displayWidth
        this.posX = this.initialPosX;
        this.speed = 8;
    }

    draw(){
        this.move()
        super.draw();

    }
    move() {
        this.posX = this.posX - this.speed;
        if(this.posX < -this.displayWidth){
            this.posX = this.initialPosX;
        }
    }
}