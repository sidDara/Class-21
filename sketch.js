var fixedRect, movingRect;
var rect1, rect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect1 = createSprite(350, 400, 50, 80);
  rect2 = createSprite(600, 50, 50, 80);
  rect2.velocityY = 4
  rect1.shapeColor = ("blue");
  rect2.shapeColor = ("blue");
}
function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  if (isTouching(rect1, movingRect)){
    movingRect.shapeColor = "red";
    rect1.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    rect1.shapeColor = "blue";
  }
  bounceOff(rect2, fixedRect);
  drawSprites();
}
function isTouching(object1, object2){
  if (object2.x - object1.x < object1.width/2 + object2.width/2
    && object1.x - object2.x < object1.width/2 + object2.width/2
    && object2.y - object1.y < object1.height/2 + object2.height/2
    && object1.y - object2.y < object1.height/2 + object2.height/2) {
  return true ;
}
  else {
   return false; 
  }
}

function bounceOff(object1, object2){
  if (object2.x - object1.x < object1.width/2 + object2.width/2
    && object1.x - object2.x < object1.width/2 + object2.width/2) {
  object2.velocityX = object2.velocityX * (-1);
  object1.velocityX = object1.velocityX * (-1);
}
  if (object2.y - object1.y < object1.height/2 + object2.height/2
    && object1.y - object2.y < object1.height/2 + object2.height/2){
    object2.velocityY = object2.velocityY * (-1);
    object1.velocityY = object1.velocityY * (-1);
}
}
