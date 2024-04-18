var myImageObject,myImageObject1,myImageObject2,myImageObject3,myImageObject4,myImageObject5,myImageObject6,
myImageObject7,myImageObject8,myImageObject9,myImageObject10 ;

var myImageArray = []; 
var i = 0;
var imageX = 100;
var myCircle;

var circles = [];
function setup() {
    createCanvas(800, 900);

    for(var i  = 0; i < 5; i++)
    {
        myCircle = new MyCircle(random(10, width), random(20, height), random(5, 150));
        circles[i] = myCircle;
    }
   
    for(var n = 0; n < 10; n++)
    {
        myImageArray[n] = new myImage("image/Idle(" + (n+1) + ").png", imageX, 100, 640, 472);
    }


    setInterval(updateImage, 50);

}

// this runs continuously
function draw() 
{
    background(120);

    for(var i = 0; i < circles.length;)
    {
        circles[i].drawCircle();
    }


    myImageArray[i].draw();

    if(keyIsPressed)
    {
        if(key == "a")
        {
            imageX -= 1
           
        }
        if(key == "d")
        {
            imageX+= 1;
        }
        for(var k = 0; k < myImageArray.length; k++)
        {
            myImageArray[k].updateX(imageX);
        }

    }
}

function updateImage()
 {
    i++;
    if(i > myImageArray.length-1)
    {
        i = 0;
    }
 }
 function checkCollision(x,y,w,h, x2,y2,w2,h2)
{
   
	if (
		x - w/2 < x2 + w2/2 &&
		x + w2/2 > x2 -w/2 &&
		y - h2/2 < y2 + h/2 &&
		y + h2/2 > y2 - h/2
	
	){
     return true;
	} else {
     return false;
    }
}