var idlePaths = [];
var ninjaImage;
var myAnimation;
var myWalkAnimation;
var walkPaths = [];
var attackPaths = [];
var immovableObjects = [];
var collectibles = [];
var health = 100;
var score = 0;
var particles = [];

function preload() {
    idlePaths = loadanimation("./image/Idle/Idle.txt");
    walkPaths = loadStrings("./image/walk/walk.txt");
    attackPaths = loadStrings("./image/Attack/Attack.txt");
}
class Particles{
    constructor (x,y) {
        this.pos = createVector (x,y);
        this.vel = p5.Vector.random2D().multi(random(2,5));
        this.lifespan = 255;
    }
    update(){
        this.pos.add(this.vel);
        this.lifespan -= 5;
    }
    display(){
        fill(255, this.lifespan);
        noStroke();
        ellipse(this.pos.x, this.pos.y,10);
    }
}
function setup() {
  createCanvas(800, 600);
  ninjaImage = (width / 2, height / 2, 30, 30);
  ninjaImage.img = "image\ninja\Idle(1).png";
  ninja.shapeColor = color(255, 0, 0);

  //immovable objects
  for (let i = 0; i < 3; i++) {
    let x = random(width);
    let y = random(height);
    let immovable = createSprite(x, y, 50, 50);
    immovable.shapeColor = color(100);
    immovableObjects.push(immovable);
  }

  //collectible items
  for (let i = 0; i < 5; i++) {
    let x = random(width);
    let y = random(height);
    let collectible = createSprite(x, y, 20, 20);
    collectible.shapeColor = color(0, 255, 0);
    collectibles.push(collectible);
  }
}

function draw() {
  background(220);

  // Player movement
  if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
    ninja.position.x -= 5;
  }
  if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
    ninja.position.x += 5;
  }
  if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
    ninja.position.y -= 5;
  }
  if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
    ninja.position.y += 5;
  }

  // Prevent ninja from walking through immovable objects
  for (let immovable of immovableObjects) {
    ninja.collide(immovable);
  }

  // Collectibles: increase score if ninja collects them
  for (let collectible of collectibles) {
    if (ninja.overlap(collectible)) {
      collectible.remove();
      score++;
    }
  }

  // Health: decrease if ninja collides with "bad" item
  if (health > 0) {
    for (let immovable of immovableObjects) {
      if (ninja.overlap(immovable)) {
        health -= 1;
      }
    }
    //Particle system
    for (let i = particles.length - 1; i >=0; i--){
        particles[i].update();
        particles[i].display();
        if(particles[i].lifespan <= 0){
          particles.splice(i, 1);
        }
        //remove obstacle when at zero health
        for (let immovable of immovableObjects){
            if (player.overlap(immovable) && health <= 0){
                immovable.remove();
            }
        }
    }
  }

  // Display health and score
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

  // Draw sprites
  drawSprites();
}
function keyPressed(){
    if (key=== ""){
        for (let immovable of immovableObjects){
            if (ninja.overlap(immovable)){
                for (let i = 0; i < 10; i++){
                    particles.push(new particles(player.position.x, player.position.y));
                }
                health -= 5;
            }
        }
    }
}