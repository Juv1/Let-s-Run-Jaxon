var path, pathSprite;
var jake, jakeSprite;
var boundary1, boundary2;


function preload(){
  //pre-load images
  path = loadImage('path.png');
  jake = loadAnimation('Jake1.png','Jake2.png','jake3.png','jake4.PNG','jake5.png');

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  pathSprite = createSprite(200,200,50,50);
  pathSprite.addImage('path',path);

  jakeSprite = createSprite(200,300,50,120);
  jakeSprite.addAnimation('jake',jake);
  jakeSprite.scale = 0.75;
  
  boundary1 = createSprite(60,200,20,400);
  boundary1.visible = false;

  boundary2 = createSprite(340,200,20,400);
  boundary2.visible = false;

  
}

function draw() {
  background(0);
  
  pathSprite.velocityY = -2
  
  if(pathSprite.y<0){
    pathSprite.y = pathSprite.width/2;
  }

  
  jakeSprite.x = mouseX;
  
  jakeSprite.collide(boundary1);   
  jakeSprite.collide(boundary2); 
  
  drawSprites();
  
}
