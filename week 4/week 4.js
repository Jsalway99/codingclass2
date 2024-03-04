var pick;
var xImage = 100, yImage = 25;
var speedX, speedY;
var myFont;

var myTime = 10;

var pick2;
var xImage2 = 300, yImage2 = 25;
var speedX2, speedY2;


function setup() {
    createCanvas(600, 700);
    pick = loadImage("image/Jasper.jpg");

    pick2 = loadImage("image/Paimon shock.png");

    myFont = loadFont("fonts/EBGaramond-VariableFont_wght.ttf");
    speedX = random(1, 5);
    speedY = random(1, 5);

    speedX2 = random(1, 5);
    speedY2 = random(1, 5);

    setInterval(changeTime, 1000);
}
// this runs continuously
function draw() {
    background(90, 199, 115);
    image(pick, xImage, yImage);

    xImage += speedX;
    yImage += speedY;

    if (xImage >= width - 200 || xImage <= 0) {
        speedX *= -1;
    }

    if (yImage >= height - 200 || yImage <= 0) {
        speedY *= -1;
    }

    image(pick2, xImage2, yImage2);

    xImage2 += speedX2;
    yImage2 += speedY2;

    if (xImage2 >= width - 100 || xImage2 <= 0) {
        speedX2 *= -1;
    }

    if (yImage2 >= height - 100 || yImage2 <= 0) {
        speedY2 *= -1;
    }

    fill(800, 252, 169);
    textSize(24);
    textFont(myFont);
    text("Jonathon Salway", 400, 300);



    fill(36, 250, 100);
    textSize(15);

    text(myTime + "seconds", 50, 50);

    // var hasCollided = checkCollision(xImage, yImage, 100, 100, xImage2, yImage2, 100, 100);

    if (checkCollision(xImage, yImage, 100, 100, xImage2, yImage2, 100, 100)) {
        speedX *= -1;
        speedX2 *= -1;
        speedY *= -1;
        speedY2 *= -1;
    }

}

function checkCollision(x, y, w, h, x2, y2, w2, h2) {

    if (
        x - w / 2 < x2 + w2 / 2 &&
        x + w2 / 2 > x2 - w / 2 &&
        y - h2 / 2 < y2 + h / 2 &&
        y + h2 / 2 > y2 - h / 2

    ) {
        return true;
    } else {
        return false;
    }
}

function changeTime() {
    myTime--;
    if (myTime < 0) {
        // reset
        myTime = 10;
    }
    //myTime -= 1;
    //myTime = myTime - 1;
}
