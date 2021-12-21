var sea,seaImg;
var ship_1
function preload(){
seaImg = loadImage("sea.png")
shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(400,200)
  sea.addImage(seaImg)
  sea.velocityX=-5
sea.scale = 0.3
  ship_1 = createSprite(130,200,30,30)
  ship_1.addAnimation("movingship",shipImg1)
  ship_1.scale = 0.25
}

function draw() {
  background("blue");
  sea.velocityX=-3
  if(sea.x < 0){
    sea.x = sea.width/8;
  }
 drawSprites()

}