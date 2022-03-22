var background, brick, sand;

var backgroundImg, brickImg, sandImg;

function preload(){
 backgroundImg = loadImage("assets/background.png");
 brickImg = loadImage("assets/Brick1.png");
 sandImg = loadImage("assets/sand.png");
}

function setup() {
  createCanvas(10000,10000);

  //adding the background image
  background = createSprite(500,200);
  background.addImage(backgroundImg);
  background.scale = 3;

  //making the first layer
  brick = createSprite(75,50);
  brick.addImage(brickImg);
  brick.scale = 2;

  brick = createSprite(175,50);
  brick.addImage(brickImg);
  brick.scale = 2;

  brick = createSprite(275,50);
  brick.addImage(brickImg);
  brick.scale = 2;

  brick = createSprite(375,50);
  brick.addImage(brickImg);
  brick.scale = 2;

  brick = createSprite(475,50);
  brick.addImage(brickImg);
  brick.scale = 2;

  brick = createSprite(575,50);
  brick.addImage(brickImg);
  brick.scale = 2;

  brick = createSprite(675,50);
  brick.addImage(brickImg);
  brick.scale = 2;

  brick = createSprite(775,50);
  brick.addImage(brickImg);
  brick.scale = 2;

  brick = createSprite(875,50);
  brick.addImage(brickImg);
  brick.scale = 2;

  brick = createSprite(975,50);
  brick.addImage(brickImg);
  brick.scale = 2;

  brick = createSprite(1075,50);
  brick.addImage(brickImg);
  brick.scale = 2;

  brick = createSprite(1175,50);
  brick.addImage(brickImg);
  brick.scale = 2;
  
  brick = createSprite(1275,50);
  brick.addImage(brickImg);
  brick.scale = 2;

  //making the 2nd layer 
  sand = createSprite(75,150);
  sand.addImage(sandImg);
  sand.scale = 2;

  sand = createSprite(175,150);
  sand.addImage(sandImg);
  sand.scale = 2;

  sand = createSprite(275,150);
  sand.addImage(sandImg);
  sand.scale = 2;

  sand = createSprite(375,150);
  sand.addImage(sandImg);
  sand.scale = 2;

  sand = createSprite(475,150);
  sand.addImage(sandImg);
  sand.scale = 2;

  sand = createSprite(575,150);
  sand.addImage(sandImg);
  sand.scale = 2;

  sand = createSprite(675,150);
  sand.addImage(sandImg);
  sand.scale = 2;

  sand = createSprite(775,150);
  sand.addImage(sandImg);
  sand.scale = 2;

  sand = createSprite(875,150);
  sand.addImage(sandImg);
  sand.scale = 2;

  sand = createSprite(975,150);
  sand.addImage(sandImg);
  sand.scale = 2;

  sand = createSprite(1075,150);
  sand.addImage(sandImg);
  sand.scale = 2;

  sand = createSprite(1175,150);
  sand.addImage(sandImg);
  sand.scale = 2;

  sand = createSprite(1275,150);
  sand.addImage(sandImg);
  sand.scale = 2;

  //making the 3rd layer
  brick = createSprite(75,250);
  brick.addImage(brickImg);
  brick.scale = 2;

  brick = createSprite(175,250);
  brick.addImage(brickImg);
  brick.scale = 2;

  brick = createSprite(275,250);
  brick.addImage(brickImg);
  brick.scale = 2;

  brick = createSprite(375,250);
  brick.addImage(brickImg);
  brick.scale = 2;

  brick = createSprite(475,250);
  brick.addImage(brickImg);
  brick.scale = 2;

  brick = createSprite(575,250);
  brick.addImage(brickImg);
  brick.scale = 2;

  brick = createSprite(675,250);
  brick.addImage(brickImg);
  brick.scale = 2;

  brick = createSprite(775,250);
  brick.addImage(brickImg);
  brick.scale = 2;

  brick = createSprite(875,250);
  brick.addImage(brickImg);
  brick.scale = 2;

  brick = createSprite(975,250);
  brick.addImage(brickImg);
  brick.scale = 2;

  brick = createSprite(1075,250);
  brick.addImage(brickImg);
  brick.scale = 2;

  brick = createSprite(1175,250);
  brick.addImage(brickImg);
  brick.scale = 2;
  
  brick = createSprite(1275,250);
  brick.addImage(brickImg);
  brick.scale = 2;

  //making the 4th layer
  sand = createSprite(75,350);
  sand.addImage(sandImg);
  sand.scale = 2;

  sand = createSprite(175,350);
  sand.addImage(sandImg);
  sand.scale = 2;

  sand = createSprite(275,350);
  sand.addImage(sandImg);
  sand.scale = 2;

  sand = createSprite(375,350);
  sand.addImage(sandImg);
  sand.scale = 2;

  sand = createSprite(475,350);
  sand.addImage(sandImg);
  sand.scale = 2;

  sand = createSprite(575,350);
  sand.addImage(sandImg);
  sand.scale = 2;

  sand = createSprite(675,350);
  sand.addImage(sandImg);
  sand.scale = 2;

  sand = createSprite(775,350);
  sand.addImage(sandImg);
  sand.scale = 2;

  sand = createSprite(875,350);
  sand.addImage(sandImg);
  sand.scale = 2;

  sand = createSprite(975,350);
  sand.addImage(sandImg);
  sand.scale = 2;

  sand = createSprite(1075,350);
  sand.addImage(sandImg);
  sand.scale = 2;

  sand = createSprite(1175,350);
  sand.addImage(sandImg);
  sand.scale = 2;

  sand = createSprite(1275,350);
  sand.addImage(sandImg);
  sand.scale = 2;
}

function draw() {
  
  drawSprites();
}