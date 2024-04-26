var xImage = 100, yImage = 50;
var myFont;
var myTime = 10;
var i = 0;
var flipX = false;
var idleArray = [];
var walkArray = [];
var idleStrings = [];
var walkStrings = [];
var myAnimation = [];
var myWalkAnimation = [];

var myImage;

var objectToEat;
var objectToDraw;
var score = 0;
var mySound;
var mysound2;
var backgroundSound;
function preload() {
    idleStrings = loadStrings("TextFiles/Idle.txt")
    walkStrings = loadStrings("TextFiles/walk.txt")
    attackPaths = loadStrings("TextFiles/Attack.txt");
    soundFormats("mp3")
    mySound = loadSound("sounds/eating sound effect");//good food
    mysound2 = loadSound("sounds/assets_gagging");//bad food
    backgroundSound = loadSound("sounds/02 Royal Days");
}

function setup() {
    createCanvas(800, 900);
 myAnimation = new animationImage( 200, 200, 150, 150);
 myAnimation.myLoadAnimation('idle', idlePaths);
 myAnimation.myLoadAnimation('walk', walkPaths);

}
myFont = loadFont("Fonts/EB_Garamond/EBGaramond-Italic-VariableFont_wght.ttf");
setInterval(changeTime, 100);
setInterval(countDown, 1000);

function draw(){
    background(120);
    
    if(Kb.pressing('d'))
    {
        if(myAnimation.isColliding(?))
        {
            myAnimation.drawAnimation('idle');
            myAnimation.updatePosition('idle');

        }
        else if(myAnimation.isColliding(?));
        {
            ?.remove();
        }
    }

        for (var ii = 0; ii < idleArray.length; ii++) {
        idleArray[ii].updateX(xImage);
        idleArray[ii].updateFlip(flipX);
        walkArray[ii].updateX(xImage);
        walkArray[ii].updateFlip(flipX);
        idleArray[ii].y = yImage;
        walkArray[ii].y = yImage;

        if (objectToEat != null) {
            if (walkArray[ii].checkCollision(objectToEat.x, objectToEat.y, objectToEat.w, objectToEat.h)) {
                objectToEat = null; 
                mySound.play();
                score++;
            }
        }
    }
    objectToDraw = walkArray;
}
    else {
        objectToDraw = idleArray;     
    }

    objectToDraw[i].draw();

    fill(100, 252, 169);
    textSize(24);
    textFont(myFont);
    text("Score: " + score, 400, 50);

    fill(100, 252, 169);
    textSize(25);
    text(myTime + " seconds", 50, 50);
}

function changeTime() {
    i++;
    if (i > idleArray.length - 1) {
        i = 0;
    }
}

function countDown() {
    myTime--;
    if (myTime < 0) {
        myTime = 10;
        createANewFoodItem();
    }
}

function createANewFoodItem()
{
  
    objectToEat = new imageClass("assets/ninja/Kunai.png", random(50, width-100), random(50,height-100), 100, 100);
}

function mousePressed()
{
    playMySound();
}
function playMySound()
{
    backgroundSound.loop();
}
