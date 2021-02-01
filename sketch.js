

var tower, towerImage
var door, doorImage,doorGroup
var climber, climberImage, climberGroup
var ghost, ghostImage
var invisibleBlock, invisibleBlockGroup
var gamestate="PLAY";
var spookySound


function preload(){
  towerImage=loadImage("tower.png");
  doorImage=loadImage("door.png");
  climberImage=loadImage("climber.png")
  ghostImage=loadImage("ghost-standing.png")
  spookySound=loadSound("spooky.wav")
}

function setup(){
  createCanvas(600, 600);
  spookySound.loop();
  
  tower=createSprite(300, 300)
  tower.addImage("tower", towerImage)
  tower.velocityY=1;
  
  ghost=createSprite(200, 200, 50, 50)
  ghost.addImage("ghost", ghostImage)
  ghost.scale=0.4;
  
  invisibleBlockGroup=new Group();
  
  
  
  doorGroup=new Group();
  climberGroup=new Group();
}


function draw(){
  background(0)
  
  if (gamestate==="PLAY"){
      
      
  
  if (tower.y>400){
      tower.y=300;
      }
  
  if (keyDown("space")){
      ghost.velocityY=-5;
      }
  
  ghost.velocityY=ghost.velocityY+0.8
  
  if (keyDown("left_arrow")){
      ghost.x=ghost.x-3 
      }
  
  if (keyDown("right_arrow")){
      ghost.x=ghost.x+ 3 
      }
  
  if (climberGroup.isTouching(ghost)){
      ghost.velocityY=0; 
      }
  
  if (invisibleBlockGroup.isTouching(ghost) || ghost.y>600){
      ghost.destroy();
      }
  
  
  spawndoor();
  drawSprites();
  }
  if (gamestate==="END"){
      text("Game Over", 230, 250)
      }
  
}


function spawndoor(){
  if (frameCount%240===0){
   var   door=createSprite(200, -50)
    door.addImage("door", doorImage)
    
    climber=createSprite(200, 10)
    climber.addImage("climber", climberImage)
    invisibleBlock=createSprite(200, 15)
    invisibleBlock.width=climber.width;
    invisibleBlock.height=2;
    
    door.x=Math.round(random(122,400))
    door.velocityY=1;
    
    ghost.depth=door.depth
    ghost.depth=ghost.depth+1 
    
    climber.x=door.x;
    climber.velocityY=1;
    invisibleBlock.x=door.x
    invisibleBlock.velocityY=1;  
    
    invisibleBlock.lifetime=800;
    door.lifetime=800;
    climber.lifetime=800;
    
    invisibleBlockGroup.add(invisibleBlock)
    climberGroup.add(climber)
    doorGroup.add(door)
      }
  
  
}




