var xRadius, yRadius
var randomShape;

function setup() {
  createCanvas(640, 480);
  randomShape = Math.round(random(1));
  xRadius = random(30, 60);
  yRadius = random(30, 50);
  radiusCorners = random(0, 100);

}

function draw() {
  if (randomShape) {

    ellipse(80, 80, xRadius, yRadius);
  } else {
    rectMode(CENTER);
    rect(80, 80, xRadius, yRadius, radiusCorners);
  }

}