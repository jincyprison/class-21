var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObj1=createSprite(100,100,50,50);
  gameObj1.shapeColor = "green";
  gameObj2=createSprite(200,100,50,50);
  gameObj2.shapeColor = "green";
  gameObj3=createSprite(300,100,50,50);
  gameObj3.shapeColor = "green";
  gameObj4=createSprite(400,100,50,50);
  gameObj4.shapeColor = "green";

  movingRect.velocityY=-5;
  fixedRect.velocityY=+5;
  gameObj1.velocityY=-2;
  gameObj2.velocityY=+2;
}

function draw() {
  background(0,0,0);  
 movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if( isTouching(movingRect,gameObj1)){
  gameObj1.shapeColor = "blue";
      movingRect.shapeColor = "blue";
  }
  else{
    gameObj1.shapeColor = "green";
    movingRect.shapeColor = "green";
}
bounceOff(movingRect,gameObj1);

  drawSprites();
}
