var canvas;
var bubbles1,bubbles2,bubbles3;
var shooter,laser;

function preload(){
 
  ball = loadImage("download.jpg");
  shot = loadImage("shooter.jpg");
  bullet = loadImage("bullet.png");
  ground = loadImage("images.jpg");
}

function setup(){
  createCanvas(400,400);
  for (var i = 20; i < 390; i=i+30) {
    bubbles1 = createSprite(i, 50, 10, 10);
    bubbles1.addImage(ball);
    bubbles1.scale=0.2;
    
  }

  
  for (var i = 60; i < 350; i=i+30) {
     bubbles2 = createSprite(i, 100, 10, 10);
     bubbles2.addImage(ball);
     bubbles2.scale=0.2;
  }
  
  
  for (var i = 110; i < 300; i=i+30) {
    bubbles3 = createSprite(i, 150, 10, 10);
    bubbles3.addImage(ball);
    bubbles3.scale=0.2;
  }
  
  shooter = createSprite(200,350,100,100);
  shooter.addImage(shot);
  shooter.scale=0.08;
  keyPressed();
}
function keyPressed(){
  
   if (keyIsDown(RIGHT_ARROW)){
     shooter.velocityX=2;
   }

  if (keyWentUp(RIGHT_ARROW)){
    shooter.velocityX=0;
  }

  if (keyIsDown(DOWN_ARROW)){
    shooter.velocityX=0;
  }

   if (keyIsDown(LEFT_ARROW)){
    shooter.velocityX=-2;
  }

  if (keyWentUp(LEFT_ARROW)){
    shooter.velocityX=0;
  }

  if(keyCode===32){
    laser = createSprite(shooter.x,300,10,20);
    laser.addImage(bullet);
    laser.scale=0.01;
    laser.velocityY=-25;
   }

   if(keyCode===83){
     shooter.x=200;
     shooter.velocityX=0;
   }

}

function draw(){
  background(ground);
 
  textSize(16);
   text("click S to reset the shooter",120,20);
   destroy();
   drawSprites();
}
function destroy(){
  if(bubbles1.isTouching(laser)){
    bubbles1.destroy();
  }
}
