var bgImg;
var cat, catImg1, catImg2;
var mouse, mouseImg1, mouseImg2;

function preload() {
    //load the images here
bgImg=loadImage("images/garden.png");
catImg1=loadAnimation("images/cat1.png");
mouseImg1=loadAnimation("images/mouse1.png");
catImg2=loadAnimation("images/cat3.png","images/cat4.png");
mouseImg2=loadAnimation("images/mouse3.png","images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   
    cat=createSprite(500,400);
    cat.addImage("tom",catImg1);
    cat.scale=0.5;

    mouse=createSprite(200,200);
    mouse.addImage("jerry",mouseImg1);
    mouse.scale=0.3;
}

function draw() {

    background("bgImg");
    //Write condition here to evalute if tom and jerry collide
if(cat.x - mouse.x < (cat.width - mouse.width)/2){
   mouse.changeAnimation(mouseImg2);
   cat.changeAnimation(catImg2);

}


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode=== RIGHT_ARROW){
    cat.addAnimation("catRunning",mouseImg2);
    cat.changeAnimation("catRunning");
    cat.frameDelay = 25;

  if(keyCode=== LEFT_ARROW){
       mouse.addAnimation("mouseTeasing",mouseImg2);
       mouse.changeAnimation("mouseTeasing");
       mouse.frameDelay = 25;

  }

}
