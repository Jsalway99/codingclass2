var idlePaths = [];
var walkPaths = [];
var AttackPaths = [];
var myAnimation;
var myWalkAnimation;
let PaimonImage;
let PaimonkImage;

var mySound;
var mysound2;
var backgroundSound;
function preload() {
    idlePaths = loadStrings("images/idle/Idle.txt");
    walkPaths = loadStrings("images/walk/walk.txt");
    AttackPaths = loadStrings("images/Attack/Attack.txt");
    soundFormats("mp3");
    mySound = loadSound("sounds/eating sound effect");//good food
    mysound2 = loadSound("sounds/assets_gagging");//bad food
    backgroundSound = loadSound("sounds/02 Royal Days");
    
}

function setup() {
 createCanvas(800,900);
 myAnimation = new animationImage( 200, 200, 150, 150);
 myAnimation.myLoadAnimation('idle', idlePaths);
 myAnimation.myLoadAnimation('walk', walkPaths);
 myAnimation.myLoadAnimation('attack', AttackPaths);

    PaimonImage = new Sprite(450, 200, 150, 150, 'static');
    PaimonImage.img = "images/Paimon.png";
    PaimonImage.scale = 0.50;
    PaimonImage.diameter = 100;

    PaimonkImage = new Sprite(250, 400 ,100 ,100, 'static');
    PaimonkImage.img = "images/Paimonk.png";
    PaimonkImage.scale = 0.55;
    PaimonkImage.diameter = 50;


}
//myFont = loadFont("Fonts/EB_Garamond/EBGaramond-Italic-VariableFont_wght.ttf");
function draw()
{
    background(120);
    
    if(kb.pressing('d'))
    {
        if(myAnimation.isColliding(PaimonImage))
        {
            myAnimation.drawAnimation('idle');
            myAnimation.updatePosition('idle');

        }
        else if(myAnimation.isColliding(PaimonkImage))
        {
            PaimonkImage.remove();

        }
        myAnimation.updatePosition('forward');
        myAnimation.drawAnimation('walk');
    }
    else if(kb.pressing('a'))
    {
        if(myAnimation.isColliding(PaimonImage))
        {
            myAnimation.drawAnimation('idle');
            myAnimation.updatePosition('idle');
        }
        myAnimation.updatePosition('reverse');
        myAnimation.drawAnimation('walk');
    }
    else if (kb.pressing('w'))
    {
        if(myAnimation.isColliding(PaimonImage))
        {
            myAnimation.drawAnimation('idle');
            myAnimation.updatePosition('idle');
        }
        myAnimation.updatePosition('up');
        myAnimation.drawAnimation('walk');
    }
    else if(kb.pressing('s'))
    {
                if(myAnimation.isColliding(PaimonImage))
                {
                    myAnimation.drawAnimation('idle');
                    myAnimation.updatePosition('idle');
                }
                myAnimation.updatePosition('down');
                myAnimation.drawAnimation('walk');
    }
    else
    {
        myAnimation.drawAnimation('idle');
    }
    PaimonkImage.debug = mousePressed;

}
function createANewFoodItem()
{
  
    objectToEat = new Sprite("assets/ninja/Kunai.png", random(50, width-100), random(50,height-100), 100, 100);
}

function mousePressed()
{
    playMySound();
}
function playMySound()
{
    backgroundSound.loop();
}
