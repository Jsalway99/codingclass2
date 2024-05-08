function setup() {
    createCanvas(1000,900, WEBGL);
    noStroke();
  }
  
  
  function draw() {
    background(400,213,200);
    
    fill(100,200);
    textSize(200);
    textAlign(LEFT, CENTER);
    text("My 3D Art", 100, 250); // Title
    text("Jonathon", 100, 250); //
  
    // Add a cube
    push();
    fill(255, 65, 100); 
    translate(-100, 0, 25); 
    rotateX(frameCount * 0.01); 
    rotateY(frameCount * 0.02); 
    box(50); 
    pop();
  
    // Add a sphere
    push();
    fill(0, 0, 255); 
    translate(100, 40, 15); 
    rotateX(frameCount * 0.02); 
    rotateY(frameCount * 0.01); 
    rotateZ(frameCount * 0.05);
    sphere(30); 
    pop();
  
    // Add a cylinder
    push();
    fill(0, 255, 10); 
    translate(15, -200, 20); // Position
    rotateZ(frameCount * 0.01); // Rotate around Z-axis
    cylinder(25, 100); // Create a cylinder
    pop();
    //torus
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    torus(30, 15);
    // Add a cylinder
    push();
    fill(50, 150, 12);
    translate(15, 200, 10);
    rotateZ(frameCount * 0.01);
    cylinder(80, 150);
    pop(); 
  
 
  }