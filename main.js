FRAMERATE = 40;
SOUND_VOLUME = 0.2;
DEBUG = false;
COLLISION_PRECISION_X = 0.7;
COLLISION_PRECISION_Y = 0.7;

let gameOver = false;

function preload() {
  bgImage = loadImage('/img/bg/forest.png');
  charImage = loadImage('/img/char/sprite.png');
  enemyImage = loadImage('/img/enemy/sprite.png');
  bgMusic = loadSound('sound/bg.mp3');
  jumpSoundFx = loadSound('sound/jump.mp3');
  gameOverImage = loadImage('/img/assets/game-over.png');
}

/**
 * Listens to any key pressed
 */
function keyPressed(){
  if(!gameOver){
    if(key == 'ArrowUp'){
      mainChar.jump();
      jumpSoundFx.play();
    }
  }
}

/**
 * Runs once, initial setup
 */
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(FRAMERATE);
  bg = new Background(bgImage);
  mainChar = new Character(charImage);
  enemy = new Enemy(enemyImage);

  bgMusic.setVolume(SOUND_VOLUME);
  bgMusic.loop();
}

/**
 * Loop to draw images
 */
function draw() {
  bg.draw();
  mainChar.draw();
  enemy.draw();

  if( mainChar.isColliding(enemy)){
    showGameOver();
  }
}

function showGameOver(){
  bgMusic.setVolume(0.1);
  image(gameOverImage,
    width/2 - 206,
    height/2 - 39,
    412,
    78
);
  noLoop();

}