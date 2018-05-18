var xRadiusHead, yRadiusHead
var xRadiusBody, yRadiusBody
var randomHead;
var randomBody;

function setup() {
  createCanvas(640, 480);
  randomHead = Math.round(random(1));
  xRadiusHead = random(30, 60);
  yRadiusHead = random(30, 50);
  radiusCorners = random(0, 100);

  xRadiusBody = random(60, 120);
  yRadiusBody = random(60, 100);

}

function draw() {
  if (randomHead) {
    translate(0, -yRadiusHead / 2);
    ellipse(80, 80, xRadiusHead, yRadiusHead);
  } else {
    rectMode(CENTER);
    translate(0, -yRadiusHead / 2);
    rect(80, 80, xRadiusHead, yRadiusHead, radiusCorners);
  }

  if (randomBody) {
    translate(0, +yRadiusBody / 2 + yRadiusHead / 2);
    ellipse(80, 80, xRadiusBody, yRadiusBody);
  } else {
    rectMode(CENTER);
    translate(0, +yRadiusBody / 2 + yRadiusHead / 2);
    rect(80, 80, xRadiusBody, yRadiusBody, radiusCorners);
  }

}