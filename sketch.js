function setup() {
  createCanvas(1000, 800); 
  background("rgb(24,255,89)");
}

function draw() {
  
  fill("purple");
  stroke("lightblue")
  if(mouseIsPressed)
  rect(mouseX,mouseY,30,50);
}
