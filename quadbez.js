let p0, p1;

function setup() {
  createCanvas(700, 700);
  p0 = new bounceball(0, 350);
  p1 = new bounceball(350, 0);
  p2 = new bounceball(700, 350);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(1);
  // line(p0.x, p0.y, p1.x, p1.y);

  p1.update();
  

  let delta = 0.02;
  colorMode(HSB);

  noFill();
  
  for (let t = 0; t <= 1.00001; t += delta) {
    let x1 = lerp(p0.x, p1.x, t);
    let y1 = lerp(p0.y, p1.y, t);
    let x2 = lerp(p1.x, p2.x, t);
    let y2 = lerp(p1.y, p2.y, t);
    stroke(t * 360, 25, 25);
    //line(x1, y1, x2, y2);
    let x = lerp(x1, x2, t);
    let y = lerp(y1, y2, t);
    vertex(x,y);
  }
  endShape();
}
