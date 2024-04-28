var idlePaths = [];
var walkPaths = [];
var AttackPaths = [];
var myAnimation;
var myWalkAnimation;
let PaimonImage;
let PaimonkImage;
var immovableObjects = [];
var collectibles = [];

var health = 100;
var score = 0;

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

     //collectible items
  for (let i = 0; i < 5; i++) {
    let x = random(width);
    let y = random(height);
    let collectible = createSprite(x, y, 20, 20);
    collectible.shapeColor = color(0, 255, 0);
    collectibles.push(collectible);
  }

  for (let i = 0; i < 3; i++) {
    let x = random(width);
    let y = random(height);
    let immovable = createSprite(x, y, 50, 50);
    immovable.shapeColor = color(100);
    immovableObjects.push(immovable);
  }

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

    for (let immovable of immovableObjects) {
        PaimonImage.collide(immovable);
      }

    for (let collectible of collectibles) {
        if (PaimonImage.overlap(collectible)) {
          collectible.remove();
          score++;
        }
      }

    if (health > 0) {
        for (let immovable of immovableObjects) {
          if (PaimonImage.overlap(immovable)) {
            health -= 1;
          }
        }
    }
    fill(0);
    textSize(20);
    text(`Health: ${health}`, 20, 30);
    text(`Score: ${score}`, 20, 60);
  
    // Win or lose conditions
    if (score >= 10) {
      fill(0, 255, 0);
      textSize(40);
      text("You win!", width / 2 - 60, height / 2);
      noLoop();
    } else if (health <= 0) {
      fill(255, 0, 0);
      textSize(40);
      text("You lose!", width / 2 - 70, height / 2);
      noLoop();
    }

}
function mousePressed()
{
    playMySound();
}
function playMySound()
{
    backgroundSound.loop();
}