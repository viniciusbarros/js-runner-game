FRAMERATE = 30;
BG_VOLUME = 0.2;

function preload() {
  bgImage = loadImage('/img/bg/forest.png');
  charImage = loadImage('/img/char/sprite.png');
  bgMusic = loadSound('music/bg.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(FRAMERATE);
  bg = new Background(bgImage);
  char = new Character(charImage);

  bgMusic.setVolume(BG_VOLUME);
  bgMusic.loop();
}

function draw() {
  bg.draw();
  char.draw();
}