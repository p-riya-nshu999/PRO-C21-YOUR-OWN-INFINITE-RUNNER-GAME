var PLAY = 1;
var END = 0;
var gameState = PLAY;

var  mario;
var invisibleGround;
var bg;
var score;
var glitch;


function preload(){
  mario = loadAnimation("mario.gif");

  
  bg = loadAnimation("bg.gif");



  

  

}

function setup() {
  createCanvas(600, 200);

  
  mario = createSprite(50,160,20,50);
  mario.addAnimation("mario",mario.gif);
  
  

  mario.scale = 0.5;
  
  bg = createSprite(200,180,400,20);
  bg.addAnimation("bg",bg.gif);
  bg.x = bg.width /2;
  
  glitch = createSprite(300,100);
  glitch.addImage("glitch.gif");
  

  
 
  glitch.scale = 0.5;
  
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;


  
  mario.setCollider("rectangle",0,0,mario.width,mario.height);
  mario.debug = true
  
  score = 0;
  
}

function draw() {
  
  background(180);
  //displaying score
  mario("Score: "+ score, 500,50);
  
  
  if(gameState === PLAY){

    glitch.visible = false;
    
    bg.velocityX = -(4 + 3* score/100)
    //scoring
    score = score + Math.round(getFrameRate()/60);
    
    
    
    if (bg.x < 0){
      bg.x = bg.width/2;
    }
    
    //jump when the space key is pressed
    if(keyDown("space")&& mario.y >= 100) {
        mario.velocityY = -12;
        
    }
    
    //add gravity
    mario.velocityY = mario.velocityY + 0.8
  

  
    
  
      
  
  }
   else if (gameState === END) {
      glitch.visible = true;
      
     
    

    
     
     
      bg.velocityX = 0;
      mario.velocityY = 0
      
     
     
   }
  
 
  
  mario.collide(invisibleGround);
  
  

  drawSprites();
}




