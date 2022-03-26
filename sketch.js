var canvas,background;
var together;
var cat,catImg1,catImg2,catImg3;
vamouse,mouseImg1,mouseImg2;

function preload() {
    background=loadImage("images/garden.png");
    catImg1=loadAnimation("images/cat1.png");
    catImg2=loadAnimation("images/cat2.png,images/cat3.png");
    catImg3=loadAnimation("images/cat4.png");

    mouseImg1=loadAnimation("images/mouse1.png");
    mouseImg2=loadAnimation("images/mouse2.png,images/mouse3.png");
    mouseImg3=loadAnimation("images/mouse4.png");


}

function setup(){
    createCanvas(1000,800);
    
    mouse=createSprite(200,600);
    mouse.addAnimation("mouseStanding",mouseImg1);
    mouse.scale=0.15;

    cat=createSprite(900,600);
    cat.addAnimation("catSleeping",catImg1);
    cat.scale=0.25;
    
    makeCatWalk();

}

function draw() {

    background(background);
    
    if(cat.x-mouse.x < (cat.width-mouse.width)/2){
        cat.velocityX=0;
        cat.addAnimation("catlastimage",catImg3);
        cat.x=300;
        cat.scale=0.2;
        cat.changeAnimation("catlastimage");
        mouse.addAnimation("mouselastimage",mouseImg3);
        mouse.scale=0.15;
        mouse.changeAnimation("mouselastimage");
    }

    drawSprites();
}
function makeCatWalk(){
    mouse.addAnimation("mouseteasing",mouseImg2);
    mouse.changeAnimation("mouseteasing");
    mouse.frameDelay=25;

    catVelocityX=-5;
    cat.addAnimation("catrunning",catImg2);
    cat.changeAnimation("catrunning");
}

function keyPressed(){

  //For moving and changing animation write code here


}
