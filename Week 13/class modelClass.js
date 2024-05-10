class modelClass {
    constructor(shape, texture) {
      this.shape = shape;
      this.texture = texture;
      this.position = createVector(random(-width / 2, width / 2), random(-height / 2, height / 2));
    }
  
    display() {
      push();
      translate(this.position.x, this.position.y);
      rotateY(frameCount * this.rotationSpeed);
      texture(this.texture);
      shape(this.shape);
      pop();
    }
    moveRandomly() {
        this.position.x = random(-width / 2, width / 2);
        this.position.y = random(-height / 2, height / 2);
      }
    }