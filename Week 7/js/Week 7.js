    var xImage = 100, yImage = 50;
    var myFont;
    var myTime = 10;
    var i = 0;
    var flipX = false;
    var idlepath = [];
    var walkpath = [];
    var idleArray = [];
    var walkArray = [];
    var idleStrings = [];
    var walkStrings = [];

    var objectToEat;
    var objectToDraw;
    var score = 0;
    var mySound;
    var mysound2;
    var backgroundSound;

    var myInterval;

    var isColliding = false;

    function preload() {
        idlepath = loadStrings("TextFiles/Idle.txt")
        walkpath = loadStrings("TextFiles/walk.txt")
    }

    function setup() {
        createCanvas(800, 900);

    for(let k = 0; k < idleStrings.length; k++){
        idleArray.push(new imageclass(idleStrings[k], 50 ,100, 640, 472));
    }
    for (let k = 0; k < walkStrings.length; k++) {  
        walkArray.push(new imageclass(walkStrings[k], 50, 100, 640, 472));
    }

    objectToEat = new imageclass("assets/ninja/Kunai.png", 500, 200, 100, 100)
    myFont = loadFont("Fonts/EB_Garamond/EBGaramond-Italic-VariableFont_wght.ttf");

    setInterval(changeTime, 100);
    setInterval(countDown, 1000);
}
function draw(){
        background(120);

        if (objectToEat != null) {
            objectToEat.draw();
        }

        if(keyIsPressed)
        {
            if(key == "w")
             {
            imageX -= 1
            }
            if(key == "s")
            {
            imageX += 1;
            } 
            if(key == "a")
            {
            imageX+= 1;
            flipX = true
            }
            if (key == "d")
            {
            imageY -= 1
            flipX = false
            }

            for (var ii = 0; ii < idleArray.length; ii++) {
            idleArray[ii].updateX(xImage);
            idleArray[ii].updateFlip(flipX);
            walkArray[ii].updateX(xImage);
            walkArray[ii].updateFlip(filpX);
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
    
    