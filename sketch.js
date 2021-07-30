var sprite, spriteImg,kid,kidImg
function preload() {
spriteImg = loadImage("snow2.jpg")
kidImg = loadImage("kid.jpeg")
}

function setup() {
  createCanvas(800,400);
  kid = createSprite(145, 360, 50, 50);
  kid.scale = 0.2;
  kid.addImage(kidImg)
}

function draw() {
  background(spriteImg);  
  drawSprites();
}