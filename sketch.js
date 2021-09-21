var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg

function preload(){
bgImg = loadImage("assets/bg.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
}

function setup(){

//background image
bg = createSprite(1000,1000,1000,1000);
bg.addImage(bgImg);
bg.scale = 4

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;



}

function draw() {
  
  background("black");
        
          //making the hot air balloon jump
          if(keyDown("RIGHT_ARROW")) {
            balloon.x+=5 ;
            
          }
          if(keyDown("LEFT_ARROW")) {
            balloon.x-=5 ;
            
          }

          if(keyDown("UP_ARROW")) {
            balloon.y-=5 ;
            
          }

          if(keyDown("DOWN_ARROW")) {
            balloon.y+=5 ;
            
          }


          //adding gravity
           //balloon.velocityY = balloon.velocityY + 2;
   
        drawSprites();
        
}