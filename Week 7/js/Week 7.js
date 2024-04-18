var myCircle = [];
var myCircle = [];
//var 
var currentObjects;
var counter = 0;
var myInterval;

var isColliding = false;
var objectToEat, objectToDraw;
var backgroundSound;

var scribble = new Scribble();

var i = 0;
var xImage = 100, yImage = 25;
var speedX, speedY;
var myfont;
var myTime = 10;
var flipX = false;
var myObjects;
var idleStrings = []
var walkStrings = []
var idleArray = []
var walkArray = []
let x, y;
let xSpeed, ySpeed;

var objectToEat;
var objectToDraw;
var mySound;
var scribbleEllipse=[]

function preload(){
    idleStrings = loadStrings("../textfiles/idle.txt")
    idleStrings = loadStrings("../textfiles/walk.txt")
   // soundFormats('mp3,'ogg')
    //mySound = loadSound()
   // mySound2 = loadSound()
    //backgroundSound=loadSound()
}

function setup() {
    createCanvas(800, 900);
    x = width / 2;
    y = height / 2;
    xSpeed = 2;
    ySpeed = 1;
   
    for(let k = 0; k < idleStrings.lenght; k++){
        idleArray.push(new myImage(idleStrings[k], 100, 640, 472));
    }
    for (let k = 0; k < walkStrings.lenght; k++) {  
        walkArray.push(new myImage(walkStrings[k], 100, 640, 472));
    }
    objectToEat = ellipse
    MyFort = loadFont("font\Anta,Playfair_Display\Playfair_display");
    currentObjects = mycircle;
    setInterval(changeTime, 100);
    setInterval(countDown, 1000);
}

    function draw() 
        background(120,12);
        fill(200,200,10)
        ellipse(x, y, 50, 45)
        Ellipse1(x, y, 80, 50)

        setInterval(spawnEllipse1,2000)
        displayHUD()

        x += xSpeed;
        y += ySpeed;

        if(x < 0 || x > width) {
        xSpeed *= -1;
        }
        if (y < 0 || y > height) {
        ySpeed *= -1;
         }
        if (objectToEat != null) {
         objectToEat.draw();
        }
 
    
        if(keyIsPressed)
        {
            if(key == "w")
             {
            imageX -= 1
            isColliding =myWalkArray.isEllipseColliding(Ellipse1)
            }
            if(key == "s")
            {
            imageX += 1;
            } 
            if(key == "d")
            {
            imageX+= 1;
            flipX = true
            }
            if (key == "a")
            {
            imageY -= 1
            flipX = false
            }
            for (var ii = 0; ii < idleArray.length; ii++)
            idleArray[ii].updateX(xImage);
            idleArray[ii].updateFlip(flipX);
            walkArray[ii].updateX(xImage);
            walkArray[ii].updateFlip(filpX);

            if (objectToEat != null) {
                if (walkArray[ii].checkCollision(objectToEat.x, objectToEat.y, objectToEat.w, objectToEat.h)){
                    objectToEat = null;
                    load
                }
            }
            else
            {
                if(myInterval == null)
                {
                    myInterval = setInterval(incrementIndex, 70);
                }
                currentObjects = Objects;
                currentAnimation = Animation
            }
                function displayHUD();
                fill(100, 252, 169);
                textSize(24);
                textFont(myFont);
                text("score:" + score, 600, 50)

                text("Countdown:" + countDown, 300, 50)

                text("Yum " + myTime + " secs", 50, 50)

                {
                    objectToDraw = walkArray;
                    scribble.scribbleEllipse( x, y, w, h,);
                    scribble.numEllipseSteps = yourVaules;
                    randomSeed ( yourSeed );
                }
                function mousePressed(){
                    backgroundSound.loop();
                }

                function incrementIndex(){
                    counter += 1;
                }
                if (counter >= currentObjects.length)
                {
                    counter = 0;
                }
                function countDown(){
                    myTime--;
                    if (myTime < 0)
                    {
                        myTime = 60;
                        createANewFoodItem(ellipse);
                    }
                }
}

