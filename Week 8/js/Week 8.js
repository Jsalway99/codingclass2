var xImage = 100, yImage = 50;
var myFont;
var myTime = 10;
var i = 0;
var flipX = false;
var idleArray = [];
var walkArray = [];
var idleStrings = [];
var walkStrings = [];

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
    soundFormats("mp3")
    mySound = loadSound("sounds/eating sound effect");//good food
    mysound2 = loadSound("sounds/assets_gagging");//bad food
    backgroundSound = loadSound("sounds/02 Royal Days");
}

function setup() {
    createCanvas(800, 900);

for(let k = 0; k < idleStrings.length; k++){
    idleArray.push(new imageClass(idleStrings[k], 50 ,100, 640, 472));
}
for (let k = 0; k < walkStrings.length; k++) {  
    walkArray.push(new imageClass(walkStrings[k], 50, 100, 640, 472));
}

objectToEat = new imageClass("assets/ninja/Kunai.png", 500, 200, 100, 100);
myFont = loadFont("Fonts/EB_Garamond/EBGaramond-Italic-VariableFont_wght.ttf");

setInterval(changeTime, 100);
setInterval(countDown, 1000);
}

function draw(){
    background(120);

    if (objectToEat != null) {
        objectToEat.draw();
    }

    if(keyIsPressed) {
        if(key == "w") {
        yImage -= 1;
        }
        if(key == "s") {
        yImage += 1;
        } 
        if(key == "a") {
        xImage-= 1;
        flipX = true;
        }
        if (key == "d") {
        xImage += 1
        flipX = false;
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
