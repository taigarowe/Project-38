var PLAY=1;
var END=0;
var gameState=PLAY;
var player , player_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var ground,groundImage, invisibleGround;
var score=0;





function preload(){
  player_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png") 
 
bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  groundImage=loadImage("jungle.jpg")
  ground2_Image=loadImage("jungle.jpg")
  
}

function setup() {
  createCanvas(400, 600);
  ground=createSprite(10,200,20,20)
  ground.addImage(groundImage);
  ground.x = ground.width /2;
  
  camera.position.x=200;
  camera.position.y=200
  
  player=createSprite(80,350,20,20);
   player.addAnimation("moving", player_running);
   player.scale=0.16;
   player.setCollider("rectangle",0,0);
   player.debug = false
  
  invisibleGround = createSprite(300,400,600,10);
  invisibleGround.visible = false;
  
obstacleGroup=createGroup(); 
foodGroup=createGroup();  

 
 
  
  
  
 
}

function draw() {
  background("white");
 
  if(gameState===PLAY){
   ground.velocityX =-4
  
if (ground.x <0){
      ground.x = ground.width/2;
    }
 
  
    
   if(keyDown("space")&& player.y >= 100) {
         player.velocityY = -12;
    
        
    }
    player.velocityY =  player.velocityY + 0.7  
   
 if(foodGroup.isTouching( player)){
  foodGroup.destroyEach();
   score=score+2;
   
   switch(score) {
   case 10: player.scale=0.18 
        break;
   case 20: player.scale=0.20
        break;
  case 30: player.scale=0.22 
      break;
   case 40: player.scale=0.24  
        break;
   }
  
 }
  
  
 if(obstacleGroup.isTouching( player))  {
  player.scale=0.10 ;
   score=0; 
   
   
}  
 player.collide(invisibleGround)
   Obstacle();
   Banana();
  
  stroke=("black");
  textSize(20);
  fill("blue"); 
  }
  

 

  
  drawSprites();
  text("score:="+score,310,50)
 
  
}

function Banana(){
  if(frameCount%80===0){
  banana = createSprite(610,200,20,20);
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.velocityX=-5
  banana.Y=Math.round(random(120,200));
  banana.lifetime=-1
  foodGroup.add(banana)}
}
function Obstacle(){
  if(frameCount%300===0){
  obstacle=createSprite(601,360,20,20);
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.2
  obstacle.velocityX=-8
  obstacle.lifetime=-1
  obstacleGroup.add(obstacle);

  }
}