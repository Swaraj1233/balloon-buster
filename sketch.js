

var bow , arrow,  background, redB, pinkB, greenB ,blueB ,arrowGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage
var arrowGroup,redB,blueB,pinkB,greenB;

 function preload() {
    backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}



function setup() {
  createCanvas(600, 600);
  
  //creating background
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0  
 
  
  arrowGroup=createGroup();
  redB=createGroup();
  blueB=createGroup();
  pinkB=createGroup();
  greenB=createGroup();
}

  

function draw() {

  // moving ground
    background.velocityX = -3 

    if (background.x < 0){
      background.x = background.width/2; 
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //creating continous enemies
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }

if(arrowGroup.isTouching(redB)){
     arrowGroup.destroyEach();
     redB.destroyEach();
     score=score+5;
     }
  
   if(arrowGroup.isTouching(pinkB)){
     arrowGroup.destroyEach();
     pinkB.destroyEach();
     score=score+3;
     }
  
  if(arrowGroup.isTouching(blueB)){
     arrowGroup.destroyEach();
     blueB.destroyEach();
     score=score+2;
     }
  
  if(arrowGroup.isTouching(greenB)){  
     arrowGroup.destroyEach();
     greenB.destroyEach();
     score=score+1;
     }

  
  
  
  
  drawSprites();
    text("Score: "+ score, 500,50);
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 4;
  red.lifetime = 150;
  red.scale = 0.1;
  red.setCollider("rectangle",0,0,red.width ,red.height);
  red.debug = true
  //return red
  redB.add(red);
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 4;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blue.setCollider("rectangle",0,0,blue.width ,blue.height);
  blue.debug = true
  //return blue
  blueB.add(blue);
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 4;
  green.lifetime = 150;
  green.scale = 0.1;
  green.setCollider("rectangle",0,0,green.width ,green.height);
  green.debug = true
  //return green
  greenB.add(green);
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 4;
  pink.lifetime = 150;
  pink.scale = 1
  pink.setCollider("rectangle",0,0,pink.width ,pink.height);
  pink.debug = true
 // return pink
  pinkB.add(pink);
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrow.setCollider("rectangle",0,0,arrow.width/1.6 ,arrow.height/8);
  //arrow.debug = true
  //return arrow
  arrowGroup.add(arrow);
   
}
