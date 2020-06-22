class Background {

    image;
    speed = 2;


    constructor(image) {
        this.image = image;
        this.x1 = 0;
        this.x2 = width;
    }

    draw(){
        image(this.image, this.x1, 0, width, height);
        image(this.image, this.x2, 0, width, height);
        this.moveBg();
    }

    moveBg(){
        this.x1 = this.x1 - this.speed;
        this.x2 = this.x2 - this.speed;

        if(this.x1 < -width){
            this.x1 = width;
        }
        if(this.x2 < -width){
            this.x2 = width;
        }
    }
}