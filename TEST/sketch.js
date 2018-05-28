var eyeY;
var startPoint, startPointBody;
var DisX, DisY;
var rotation = [0, 180];
var r;

function setup() {
  r = rotation[int(random(0, rotation.length))];
  frameRate(25);
  startPoint = createVector(80, 80);
  shapes = {
    CIRCLE: 0,
    RECT: 1,
    POLYGON: 2,
    FLY: 3,
    TRIANGLE: 3
  }

  necks = {
    RECT: 0,
    BARS: 1
  }
  armShapes = {
    RECT: 0,
    BARS: 1
  }

  legshape = {
    CIRCLE: 0,
    RECT: 1,
    FLY: 2,
    BARS: 3
  }

  eyes = {
    ONEEYE: 0,
    TWOEYES: 1
  }
  mouthShape = {
    ARC: 0,
    RECT: 1,
    BORDER: 2
  }

  hats = {
    NOTHING: 0,
    ANTENNA: 1
  }

  ears = {
    NOTHING: 0,
    ANTENNA: 1,
    CAP: 2
  }

  feet = {
    NOTHING: 0,
    ARC: 1
  }

  handShapes = {
    CIRCLE: 0,
    HOOK: 1
  }
  createCanvas(2000, 2000);
  createParts();

  datGUI();
}

function draw() {
  push();
  startPointBody = createVector(80, 80 + sin(frameCount * 0.1) * 2);
  pop();
  if (legs.legshape == 2) {
    startPoint = createVector(80, 80 + sin(frameCount * 0.1) * 10);
    startPointBody = createVector(80, 80 + sin(frameCount * 0.1) * 10);
  }

  translate(150, 270);

  scale(1.5);
  clear();
  push();
  noStroke();
  c = color(100, 100, 100, 50);
  fill(c);
  rectMode(CORNER);
  rect(startPoint.x - 200, -263, 200, 550);
  pop();
  drawHead();
  drawLegs();
  drawArms();
  drawBody();


  push();
  noStroke();
  c = color(100, 100, 100, 50);
  fill(c);
  rectMode(CORNER);
  rect(startPoint.x, -263, 287, 550);
  pop();


}
//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

function head() {
  this.radiusHead = checkXYRadius(random(30, 70), random(30, 70));
  this.triangleWidth = random(30, 60);
  this.triangleHeight = random(30, 40);
  this.shape = Math.round(random(0, 3));
  this.borderRadius = Math.round(random(1, 20));
  this.hoeken = Math.round(random(6, 10));
  this.eyes = Math.round(random(0, 1));
  this.mouth = Math.round(random(0, 2));
  this.color = body.color;
  this.sat = 80;
  this.brightness = 90;
};

function eyeL() {
  this.iris = Math.round(random(0, 1));
  this.borderRadius = eyeR.borderRadius;
  if (head.radiusHead.y > head.radiusHead.x) {
    this.eyeRadius = random(15, head.radiusHead.x / 2 - (((head.radiusHead.x / 2) / 100) * 80));
  } else {
    this.eyeRadius = random(15, head.radiusHead.y - ((head.radiusHead.y / 100) * 80));
  }
  this.irisRadius = random(3, this.eyeRadius - ((this.eyeRadius / 100) * 50));
  this.yPos = random(-1, 0);
  this.xPos = random(-15, -5);


  this.irisX = 0;
  this.irisY = 0;

  this.irisXDes = 0;
  this.irisYDes = 0;
}

function eyeR() {
  this.iris = Math.round(random(0, 1));
  this.borderRadius = random(0, 7);
  if (head.radiusHead.y > head.radiusHead.x) {
    this.eyeRadius = random(15, head.radiusHead.x / 2 - (((head.radiusHead.x / 2) / 100) * 80));
  } else {
    this.eyeRadius = random(15, head.radiusHead.y - ((head.radiusHead.y / 100) * 80));
  }
  this.irisRadius = random(3, this.eyeRadius - ((this.eyeRadius / 100) * 50));
  this.yPos = random(-1, 0);
  this.xPos = random(5, 15);

  this.irisX = 0;
  this.irisY = 0;

  this.irisXDes = 0;
  this.irisYDes = 0;
}

function oneEye() {
  this.iris = Math.round(random(0, 1));

  if (head.radiusHead.y > head.radiusHead.x) {
    this.eyeRadius = random(18, head.radiusHead.x / 2 - (((head.radiusHead.x / 2) / 100) * 50));
  } else {
    this.eyeRadius = random(18, head.radiusHead.y - ((head.radiusHead.y / 100) * 50));
  }
  this.irisRadius = random(3, this.eyeRadius - ((this.eyeRadius / 100) * 50));
  this.yPos = random(-1, 0);
  this.xPos = random(-2, 2);


  this.irisX = 0;
  this.irisY = 0;

  this.irisXDes = 0;
  this.irisYDes = 0;
}

function mouth() {

  this.height = random(2, (head.radiusHead.y / 2) - ((head.radiusHead.y / 2) / 100) * 60);
  this.width = random(this.height + 5, head.radiusHead.x / 2 - 5);
  this.startPointX = random(-2, 2);
  this.endPointX = random((5, head.radiusHead.x / 2) - 10);
  this.startPointY = random(5, 8);
  this.endPointY = this.startPointY;
}

function hat() {
  if (head.shape !== 2 && head.shape !== 3) {
    this.hatOn = Math.round(random(0, 1));
  } else {
    this.hatOn = 0;
  }
  this.height = random(10, 30);
  this.borderRadius = random(0, 20);
}

function ear() {

  if (head.shape !== 2 && head.shape !== 3) {
    this.earsOn = Math.round(random(0, 2));
  } else {
    this.hatOn = 0;
  }
  this.capWidth = random(10, 15);
  this.capHeight = random(15, 20);
  this.width = random(5, 20);
  this.borderRadius = random(0, 20);
}

function neck() {
  if (body.xRadiusBody > head.radiusHead.x) {
    this.xRadiusNeck = random(5, head.radiusHead.x - ((head.radiusHead.x / 100) * 50));

  } else {
    this.xRadiusNeck = random(5, body.xRadiusBody - ((body.xRadiusBody / 100) * 50));
  }

  this.yRadiusNeck = 60;
  this.shape = Math.round(random(0, 1));
  this.NeckSpace = random(1, 20);
  this.color = legs.color;
  this.sat = 80;
  this.brightness = 90;
};

function body() {
  this.xRadiusBody = random(60, 150);
  this.yRadiusBody = random(60, 150);
  this.shape = Math.round(random(0, 2));
  this.borderRadius = random(0, 20);
  this.hoeken = random(6, 10);
  this.color = random(0, 100);
  this.sat = 80;
  this.brightness = 90;
};

function legs() {
  this.xRadiuslegs = random(10, 20);
  this.yRadiuslegs = random(100, 150);
  this.legshape = Math.round(random(0, 3));
  this.rocketSpace = random(10, 25);
  this.shadowSpace = random(75, 100);
  this.legspace = random(15, ((body.xRadiusBody / 100) * 20));
  this.color = random(0, 100);
  this.sat = 80;
  this.brightness = 90;
  this.strokeWeight = random(3, 6);
  this.shadowHeight = 15;
};

function knee() {
  this.xRadiusKnee = legs.xRadiuslegs + 7;
  this.yRadiusKnee = random(20, 30);
  this.shape = Math.round(random(0, 1));
  this.borderRadius = random(0, 10);
  this.color = random(0, 100);
  this.sat = 80;
  this.brightness = 90;
};

function armL() {
  this.xRadiusArmL = random(9, 15);
  this.yRadiusArmL = random(90, 100);
  this.shape = Math.round(random(0, 1));
  this.strokeWeight = random(4, 7);
  this.position = random(radians(-240), radians(-280));
  this.color = legs.color;
  this.sat = 80;
  this.brightness = 90;
};

function armR() {
  this.xRadiusArmR = armL.xRadiusArmL;
  this.yRadiusArmR = armL.yRadiusArmL;
  this.shape = armL.shape;
  this.position = random(radians(245), radians(280));
  this.color = legs.color;
  this.sat = 80;
  this.brightness = 90;
};

function forearmL() {
  this.xRadiusforearmL = armL.xRadiusArmL - random(0, 2);
  this.yRadiusforearmL = armL.yRadiusArmL / 2;
  this.shape = armL.shape;
  this.borderRadius = random(0, 6);
  this.position = random(radians(-210), radians(-310));
  this.color = legs.color;
  this.sat = 80;
  this.brightness = 90;
};

function forearmR() {
  this.xRadiusforearmR = armR.xRadiusArmR - random(0, 2);
  this.yRadiusforearmR = armR.yRadiusArmR / 2;
  this.shape = armL.shape;
  this.borderRadius = forearmL.borderRadius;
  this.position = random(radians(210), radians(310));
  this.color = legs.color;
  this.sat = 80;
  this.brightness = 90;
};

function elbow() {
  this.xRadiusElbow = armL.xRadiusArmL + 7;
  this.yRadiusElbow = armL.xRadiusArmL + 7;
  this.shape = 0;
  this.borderRadius = knee.borderRadius;
  this.color = knee.color;
  this.sat = 80;
  this.brightness = 90;
};

function foot() {
  this.xRadiusFoot = knee.xRadiusKnee + 10;
  this.yRadiusFoot = knee.xRadiusKnee + 10;
  this.shape = 1;
  this.color = random(0, 100);
  this.sat = 80;
  this.brightness = 90;
}

function hands() {
  this.xRadiusHands = forearmL.xRadiusforearmL + 10;
  this.yRadiusHands = forearmL.xRadiusforearmL + 10;
  this.shape = Math.round(random(0, 1));
  this.borderRadius = 20;
  this.position = random(radians(210), radians(310));
  this.color = knee.color;
  this.sat = 80;
  this.brightness = 90;
};
//-----------------------------------------------------------------------------------------------------------------------------------DRAWFUNCTIONS
//-----------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------
function drawHead() {
  switch (neck.shape) {

    case necks.RECT:
      push();

      translate(0, -body.yRadiusBody / 2 - head.radiusHead.y / 2 - neck.NeckSpace);
      rectMode(CENTER);
      colorMode(HSB, 100);
      fill(neck.color, neck.sat, neck.brightness);
      noStroke();
      rect(startPoint.x, startPoint.y + head.radiusHead.y / 2, neck.xRadiusNeck, neck.yRadiusNeck);
      pop();
      break;
    case necks.BARS:
      push();
      translate(0, -body.yRadiusBody / 2 - head.radiusHead.y / 2 - neck.NeckSpace);
      rectMode(CENTER);
      colorMode(HSB, 100);
      stroke(neck.color, neck.sat, neck.brightness);
      strokeWeight(legs.strokeWeight);
      noFill();
      rect(startPoint.x, startPoint.y + head.radiusHead.y / 2, neck.xRadiusNeck, neck.yRadiusNeck);
      pop();
      break;
  }

  switch (hat.hatOn) {
    case hats.NOTHING:
      break;
    case hats.ANTENNA:
      push();
      colorMode(HSB, 100);
      translate(0, -body.yRadiusBody / 2 - head.radiusHead.y / 2 - neck.NeckSpace);
      ellipseMode(CENTER);
      stroke(27, 40, 51);
      line(startPoint.x, (startPoint.y - head.radiusHead.y / 2), startPoint.x, (startPoint.y - head.radiusHead.y / 2) - hat.height);
      colorMode(HSB, 100);
      fill(legs.color, legs.sat, legs.brightness);
      noStroke();
      rectMode(CENTER);
      rect(startPoint.x, startPoint.y - head.radiusHead.y / 2, 16, 10, hat.borderRadius)
      colorMode(HSB, 100);
      fill(knee.color, knee.sat, knee.brightness);
      noStroke();
      ellipse(startPoint.x, (startPoint.y - head.radiusHead.y / 2) - hat.height, 6, 6)
      pop();
      break;
  }

  switch (ear.earsOn) {
    case ears.NOTHING:
      break;
    case ears.ANTENNA:
      push();
      noStroke();
      ellipseMode(CENTER);
      colorMode(HSB, 100);
      translate(0, -body.yRadiusBody / 2 - head.radiusHead.y / 2 - neck.NeckSpace);
      stroke(27, 40, 51);
      line((startPoint.x - head.radiusHead.x / 2), startPoint.y, (startPoint.x - head.radiusHead.x / 2) - ear.width, startPoint.y);
      colorMode(HSB, 100);
      fill(legs.color, legs.sat, legs.brightness);
      noStroke();
      rectMode(CENTER);
      rect((startPoint.x - head.radiusHead.x / 2), startPoint.y, 10, 16, hat.borderRadius);
      fill(knee.color, knee.sat, knee.brightness);
      noStroke();
      ellipse((startPoint.x - head.radiusHead.x / 2) - ear.width, startPoint.y, 3, 3);
      stroke(27, 40, 51);
      line((startPoint.x + head.radiusHead.x / 2), startPoint.y, (startPoint.x + head.radiusHead.x / 2) + ear.width, startPoint.y);
      fill(legs.color, legs.sat, legs.brightness)
      noStroke();
      rect((startPoint.x + head.radiusHead.x / 2), startPoint.y, 10, 16, hat.borderRadius);
      fill(knee.color, knee.sat, knee.brightness);
      noStroke();
      ellipse((startPoint.x + head.radiusHead.x / 2) + ear.width, startPoint.y, 3, 3);
      pop();
      break;
    case ears.CAP:
      push();
      rectMode(CENTER);
      noStroke();
      translate(0, -body.yRadiusBody / 2 - head.radiusHead.y / 2 - neck.NeckSpace);
      colorMode(HSB, 100);
      fill(legs.color, legs.sat, legs.brightness);
      noStroke();
      rect((startPoint.x - head.radiusHead.x / 2), startPoint.y, ear.capWidth, ear.capHeight, hat.borderRadius);
      rect((startPoint.x + head.radiusHead.x / 2), startPoint.y, ear.capWidth, ear.capHeight, hat.borderRadius);
      pop();
      break;
  }

  switch (head.shape) {
    case shapes.CIRCLE:
      push();
      translate(0, -body.yRadiusBody / 2 - head.radiusHead.y / 2 - neck.NeckSpace);
      ellipseMode(CENTER);
      colorMode(HSB, 100);
      fill(head.color, head.sat, head.brightness);
      noStroke();
      ellipse(startPoint.x, startPoint.y, head.radiusHead.x, head.radiusHead.y);
      pop();
      break;
    case shapes.RECT:
      push();
      translate(0, -body.yRadiusBody / 2 - head.radiusHead.y / 2 - neck.NeckSpace);
      rectMode(CENTER);
      colorMode(HSB, 100);
      fill(head.color, head.sat, head.brightness);
      noStroke();
      rect(startPoint.x, startPoint.y, head.radiusHead.x, head.radiusHead.y, head.borderRadius);
      pop();
      break;
    case shapes.POLYGON:
      push();
      translate(0, -body.yRadiusBody / 2 - head.radiusHead.y / 2 - neck.NeckSpace);
      colorMode(HSB, 100);
      fill(head.color, head.sat, head.brightness);
      noStroke();
      polygon(startPoint.x, startPoint.y, head.radiusHead.x / 2, head.radiusHead.y / 2, head.hoeken);
      pop();
      break;
    case shapes.TRIANGLE:
      push();
      rectMode(CORNER);
      translate(0, -body.yRadiusBody / 2 - head.radiusHead.y / 2 - neck.NeckSpace);
      colorMode(HSB, 100);
      fill(head.color, head.sat, head.brightness);
      noStroke();
      translate(startPoint.x, startPoint.y);
      rotate(radians(r));
      triangle(0, -head.triangleHeight, head.triangleWidth, head.triangleHeight, -head.triangleWidth, head.triangleHeight);
      pop();
      break;
  }

  switch (head.mouth) {
    case mouthShape.ARC:
      push();
      translate(0, -body.yRadiusBody / 2 - head.radiusHead.y / 2 - neck.NeckSpace);
      noStroke();
      arc(startPoint.x - mouth.startPointX, eyeY + mouth.startPointY, mouth.width, mouth.height, 0, PI);
      line(startPoint.x - mouth.startPointX - mouth.width / 2, eyeY + mouth.startPointY, startPoint.x - mouth.startPointX + mouth.width / 2, eyeY + mouth.startPointY)
      pop();
      break;
    case mouthShape.RECT:
      push();
      rectMode(CENTER);
      noStroke();
      translate(0, -body.yRadiusBody / 2 - head.radiusHead.y / 2 - neck.NeckSpace);
      rect(startPoint.x - mouth.startPointX, eyeY + mouth.startPointY, mouth.width, mouth.height, 0);
      pop();
      break;
    case mouthShape.BORDER:
      push();
      rectMode(CENTER);
      noStroke();
      translate(0, -body.yRadiusBody / 2 - head.radiusHead.y / 2 - neck.NeckSpace);
      rect(startPoint.x - mouth.startPointX, eyeY + mouth.startPointY, mouth.width, mouth.height, 20);
      pop();
      break;
  }

  switch (head.eyes) {
    case eyes.TWOEYES:

      push();
      noStroke();
      timerAchtigDing = map(frameCount % 50, 0, 24, 0.1, 1);

      if (frameCount % 50 == 0) {
        eyeL.irisXDes = random(-eyeL.eyeRadius / 2, eyeL.eyeRadius / 2);
        eyeL.irisYDes = random(-eyeL.eyeRadius / 2, eyeL.eyeRadius / 2);

      }
      //======================================
      DisX = eyeL.irisXDes - eyeL.irisX;
      DisY = eyeL.irisYDes - eyeL.irisY;

      //======================================
      eyeL.irisX = DisX * timerAchtigDing;
      eyeL.irisY = DisY * timerAchtigDing;
      eyeR.irisX = DisX * timerAchtigDing;
      eyeR.irisY = DisY * timerAchtigDing;
      //======================================DRAWEYES
      push();
      rectMode(CENTER);
      noStroke();
      translate(0, -body.yRadiusBody / 2 - head.radiusHead.y / 2 - neck.NeckSpace);
      rect(startPoint.x + eyeL.xPos, startPoint.y + eyeL.yPos, eyeL.eyeRadius, eyeL.eyeRadius, eyeR.borderRadius);
      rect(startPoint.x + eyeR.xPos, startPoint.y + eyeR.yPos, eyeR.eyeRadius, eyeR.eyeRadius, eyeR.borderRadius);
      fill(27, 40, 51);
      ellipse(startPoint.x + eyeL.xPos + eyeL.irisX, startPoint.y + eyeL.yPos + eyeL.irisY, eyeL.irisRadius, eyeL.irisRadius);
      ellipse(startPoint.x + eyeR.xPos + eyeR.irisX, startPoint.y + eyeR.yPos + eyeR.irisY, eyeR.irisRadius, eyeR.irisRadius);
      fill(255);
      eyeY = startPoint.y + eyeL.yPos + eyeL.eyeRadius / 2;
      eyeY = startPoint.y + eyeR.yPos + eyeR.eyeRadius / 2;
      pop();
      break;
    case eyes.ONEEYE:

      push();
      timerAchtigDing = map(frameCount % 50, 0, 24, 0.1, 1);

      if (frameCount % 50 == 00) {
        oneEye.irisXDes = random(-oneEye.eyeRadius / 2, oneEye.eyeRadius / 2);
        oneEye.irisYDes = random(-oneEye.eyeRadius / 2, oneEye.eyeRadius / 2);

        DisX = norm(DisX, oneEye.irisX, oneEye.irisRadius);
        DisY = norm(DisY, oneEye.irisY, oneEye.irisRadius);
      }
      pop();
      DisX = oneEye.irisXDes - oneEye.irisX;
      DisY = oneEye.irisYDes - oneEye.irisY;

      push()
      oneEye.irisX = DisX * timerAchtigDing;
      oneEye.irisY = DisY * timerAchtigDing;
      pop();
      push();
      rectMode(CENTER);
      noStroke();
      translate(0, -body.yRadiusBody / 2 - head.radiusHead.y / 2 - neck.NeckSpace);
      rect(startPoint.x + oneEye.xPos, startPoint.y + oneEye.yPos, oneEye.eyeRadius, oneEye.eyeRadius, eyeR.borderRadius);
      fill(27, 40, 51);
      ellipse(startPoint.x + oneEye.xPos + oneEye.irisX, startPoint.y + oneEye.yPos + oneEye.irisY, oneEye.irisRadius, oneEye.irisRadius);
      fill(255);
      eyeY = startPoint.y + oneEye.yPos + oneEye.eyeRadius / 2;
      pop();
      break;
  }
}

function drawLegs() {
  switch (legs.legshape) {
    case legshape.RECT:
      push();
      c = color(0, 0, 0, 45);
      fill(c);
      noStroke();
      arc(startPoint.x + body.xRadiusBody / 2 - body.xRadiusBody / 2, startPoint.y + body.yRadiusBody / 2 + legs.yRadiuslegs - legs.shadowHeight, 100, 15, HALF_PI, PI + HALF_PI);
      c = color(0, 0, 0, 50);
      fill(c);
      noStroke();
      arc(startPoint.x + body.xRadiusBody / 2 - body.xRadiusBody / 2, startPoint.y + body.yRadiusBody / 2 + legs.yRadiuslegs - legs.shadowHeight, 100, 15, PI + HALF_PI, HALF_PI);
      rectMode(CORNER);
      colorMode(HSB, 100);
      fill(legs.color, legs.sat, legs.brightness);
      noStroke();
      rect(startPoint.x - legs.xRadiuslegs / 2 - legs.legspace, startPoint.y + body.yRadiusBody / 2 - startPoint.y / 4, legs.xRadiuslegs, legs.yRadiuslegs);
      rect(startPoint.x - legs.xRadiuslegs / 2 + legs.legspace, startPoint.y + body.yRadiusBody / 2 - startPoint.y / 4, legs.xRadiuslegs, legs.yRadiuslegs);
      rectMode(CENTER);
      colorMode(HSB, 100);
      fill(knee.color, knee.sat, knee.brightness);
      noStroke();
      rect(startPoint.x - legs.legspace, startPoint.y + body.yRadiusBody / 2 + legs.yRadiuslegs / 2 - startPoint.y / 4, knee.xRadiusKnee, knee.yRadiusKnee, knee.borderRadius);
      rect(startPoint.x + legs.legspace, startPoint.y + body.yRadiusBody / 2 + legs.yRadiuslegs / 2 - startPoint.y / 4, knee.xRadiusKnee, knee.yRadiusKnee, knee.borderRadius);
      pop();
      break;
    case legshape.CIRCLE:
      push();
      c = color(0, 0, 0, 45);
      fill(c);
      noStroke();
      arc(startPoint.x + body.xRadiusBody / 2 - body.xRadiusBody / 2, startPoint.y + body.yRadiusBody / 2 + legs.yRadiuslegs - legs.shadowHeight, 100, 15, HALF_PI, PI + HALF_PI);
      c = color(0, 0, 0, 50);
      fill(c);
      noStroke();
      arc(startPoint.x + body.xRadiusBody / 2 - body.xRadiusBody / 2, startPoint.y + body.yRadiusBody / 2 + legs.yRadiuslegs - legs.shadowHeight, 100, 15, PI + HALF_PI, HALF_PI);
      rectMode(CORNER);
      colorMode(HSB, 100);
      fill(legs.color, legs.sat, legs.brightness);
      noStroke();
      rect(startPoint.x - legs.xRadiuslegs / 2 - legs.legspace, startPoint.y + body.yRadiusBody / 2 - startPoint.y / 4, legs.xRadiuslegs, legs.yRadiuslegs);
      rect(startPoint.x - legs.xRadiuslegs / 2 + legs.legspace, startPoint.y + body.yRadiusBody / 2 - startPoint.y / 4, legs.xRadiuslegs, legs.yRadiuslegs);
      ellipseMode(CENTER);
      colorMode(HSB, 100);
      fill(knee.color, knee.sat, knee.brightness);
      noStroke();
      ellipse(startPoint.x - legs.legspace, startPoint.y + body.yRadiusBody / 2 + legs.yRadiuslegs / 2 - startPoint.y / 4, knee.xRadiusKnee, knee.yRadiusKnee);
      ellipse(startPoint.x + legs.legspace, startPoint.y + body.yRadiusBody / 2 + legs.yRadiuslegs / 2 - startPoint.y / 4, knee.xRadiusKnee, knee.yRadiusKnee);
      pop();
      break;
    case legshape.FLY:
      foot.shape = 0;
      push();
      beginShape();
      fill(252, 79, 82);
      stroke(220, 79, 82);
      strokeWeight(5);
      curveVertex(startPoint.x + body.xRadiusBody / 2 - body.xRadiusBody / 2, startPoint.y + body.yRadiusBody / 2 + 60 + sin(frameCount / 2) * 2);
      curveVertex(startPoint.x + body.xRadiusBody / 2 - body.xRadiusBody / 2, startPoint.y + body.yRadiusBody / 2 + 60 + sin(frameCount / 2) * 2);
      curveVertex(startPoint.x + body.xRadiusBody / 2 - body.xRadiusBody / 2 + 15, startPoint.y + body.yRadiusBody / 2 + legs.rocketSpace);
      curveVertex(startPoint.x + body.xRadiusBody / 2 - body.xRadiusBody / 2 - 15, startPoint.y + body.yRadiusBody / 2 + legs.rocketSpace);
      endShape(CLOSE);
      rectMode(CENTER);
      fill(240);
      noStroke();
      rect(startPoint.x + body.xRadiusBody / 2 - body.xRadiusBody / 2, startPoint.y + body.yRadiusBody / 2, 35, 20, 5);
      ellipseMode(CENTER);
      c = color(0, 0, 0, 45);
      fill(c);
      noStroke();
      arc(80 + body.xRadiusBody / 2 - body.xRadiusBody / 2, 80 + body.yRadiusBody / 2 + legs.yRadiuslegs - 20, 30 - sin(frameCount * 0.1) * 13, 7 - sin(frameCount * 0.1) * 6, HALF_PI, PI + HALF_PI);
      c = color(0, 0, 0, 50);
      fill(c);
      noStroke();
      arc(startPoint.x + body.xRadiusBody / 2 - body.xRadiusBody / 2, 80 + body.yRadiusBody / 2 + legs.yRadiuslegs - 20, 30 - sin(frameCount * 0.1) * 13, 7 - sin(frameCount * 0.1) * 6, PI + HALF_PI, HALF_PI);
      pop();
      break;
    case legshape.BARS:
      push();
      c = color(0, 0, 0, 45);
      fill(c);
      noStroke();
      arc(startPoint.x, startPoint.y + body.yRadiusBody / 2 + legs.yRadiuslegs - legs.shadowHeight, 100, 15, HALF_PI, PI + HALF_PI);
      arc(startPoint.x, startPoint.y + body.yRadiusBody / 2 + legs.yRadiuslegs - legs.shadowHeight, 100, 15, PI + HALF_PI, HALF_PI);
      rectMode(CORNER);
      colorMode(HSB, 100);
      stroke(forearmL.color, forearmL.sat, forearmL.brightness);
      strokeWeight(legs.strokeWeight);
      noFill();
      rect(startPoint.x - legs.xRadiuslegs / 2 - legs.legspace, startPoint.y + body.yRadiusBody / 2 - startPoint.y / 4, legs.xRadiuslegs, legs.yRadiuslegs);
      rect(startPoint.x - legs.xRadiuslegs / 2 + legs.legspace, startPoint.y + body.yRadiusBody / 2 - startPoint.y / 4, legs.xRadiuslegs, legs.yRadiuslegs);
      rectMode(CENTER);
      colorMode(HSB, 100);
      fill(knee.color, knee.sat, knee.brightness);
      noStroke();
      rect(startPoint.x - legs.legspace, startPoint.y + body.yRadiusBody / 2 + legs.yRadiuslegs / 2 - startPoint.y / 4, knee.xRadiusKnee + 5, knee.yRadiusKnee + 5, knee.borderRadius);
      rect(startPoint.x + legs.legspace, startPoint.y + body.yRadiusBody / 2 + legs.yRadiuslegs / 2 - startPoint.y / 4, knee.xRadiusKnee + 5, knee.yRadiusKnee + 5, knee.borderRadius);
      pop();
      break;
  }

  switch (foot.shape) {
    case feet.NOTHING:
      break;
    case feet.ARC:
      push();
      translate(startPoint.x, startPoint.y + body.yRadiusBody / 2 + legs.yRadiuslegs - 20);
      ellipseMode(CENTER);
      colorMode(HSB, 100);
      noStroke();
      fill(knee.color, knee.sat, knee.brightness);

      arc(-legs.legspace, 5, foot.xRadiusFoot, foot.yRadiusFoot, PI, 0);
      arc(legs.legspace, 5, foot.xRadiusFoot, foot.yRadiusFoot, PI, 0);

      pop();
      break;

  }
}

function drawArms() {
  var armsBreathingRotation = sin(frameCount * 0.1) / 20;
  switch (forearmL.shape) {
    case armShapes.RECT:
      push();
      rectMode(CORNER);
      translate(startPoint.x + 5 - armL.yRadiusArmL, startPoint.y + 6 + armL.yRadiusArmL * cos(armL.position) - forearmL.xRadiusforearmL / 2);
      rotate(forearmL.position + armsBreathingRotation / 2);
      colorMode(HSB, 100);
      fill(forearmL.color, forearmL.sat, forearmL.brightness);
      noStroke();
      rect(0, 0, forearmL.xRadiusforearmL, forearmL.yRadiusforearmL, forearmL.borderRadius);
      pop();
      break;

    case armShapes.BARS:
      push();
      rectMode(CORNER);
      translate(startPoint.x + 5 - armL.yRadiusArmL, startPoint.y + 6 + armL.yRadiusArmL * cos(armL.position) - forearmL.xRadiusforearmL / 2);
      rotate(forearmL.position + armsBreathingRotation / 2);
      colorMode(HSB, 100);
      stroke(forearmL.color, forearmL.sat, forearmL.brightness);
      strokeWeight(armL.strokeWeight);
      noFill();
      rect(0, 0, forearmL.xRadiusforearmL, forearmL.yRadiusforearmL, forearmL.borderRadius);
      pop();
      break;
      break;
  }

  switch (forearmR.shape) {
    case armShapes.RECT:
      push();
      rectMode(CORNER);
      translate(startPoint.x - 5 + armR.yRadiusArmR, startPoint.y - 6 + armR.yRadiusArmR * cos(armR.position) + forearmR.xRadiusforearmR / 2);
      rotate(forearmR.position - armsBreathingRotation / 2);
      colorMode(HSB, 100);
      fill(forearmR.color, forearmR.sat, forearmR.brightness);
      noStroke();
      rect(0, 0, forearmR.xRadiusforearmR, forearmR.yRadiusforearmR, forearmR.borderRadius);
      pop();
      break;
    case armShapes.BARS:
      push();
      rectMode(CORNER);
      translate(startPoint.x - 5 + armR.yRadiusArmR, startPoint.y - 6 + armR.yRadiusArmR * cos(armR.position) + forearmR.xRadiusforearmR / 2);
      rotate(forearmR.position - armsBreathingRotation / 2);
      colorMode(HSB, 100);
      stroke(forearmL.color, forearmL.sat, forearmL.brightness);
      strokeWeight(armL.strokeWeight);
      noFill();
      rect(0, 0, forearmR.xRadiusforearmR, forearmR.yRadiusforearmR, forearmL.borderRadius);
      pop();
      break;
  }

  switch (armL.shape) {
    case armShapes.RECT:
      push();
      rectMode(CORNER);
      translate(startPointBody.x, startPointBody.y);
      rotate(armL.position);
      colorMode(HSB, 100);
      fill(armL.color, armL.sat, armL.brightness);
      noStroke();
      rect(0, 0, armL.xRadiusArmL, armL.yRadiusArmL, 6);
      rotate(-armL.position);
      translate(-startPointBody.x, -startPointBody.y);
      pop();
      break;
    case armShapes.BARS:
      push();
      rectMode(CORNER);
      translate(startPointBody.x, startPointBody.y);
      rotate(armL.position);
      colorMode(HSB, 100);
      stroke(forearmL.color, forearmL.sat, forearmL.brightness);
      strokeWeight(armL.strokeWeight);
      noFill();
      rect(0, 0, armL.xRadiusArmL, armL.yRadiusArmL, 6);
      rotate(-armL.position);
      translate(-startPointBody.x, -60);
      pop();
      break;
  }

  switch (armR.shape) {
    case armShapes.RECT:
      push();
      rectMode(CORNER);
      translate(startPointBody.x, startPointBody.y);
      rotate(armR.position);
      colorMode(HSB, 100);
      fill(armR.color, armR.sat, armR.brightness);
      noStroke();
      rect(0, 0, armR.xRadiusArmR, armR.yRadiusArmR);
      rotate(-armR.position);
      translate(-startPointBody.x, -startPointBody.y);
      pop();
      break;
    case armShapes.BARS:
      push();
      rectMode(CORNER);
      translate(startPointBody.x, startPointBody.y);
      rotate(armR.position);
      colorMode(HSB, 100);
      stroke(forearmL.color, forearmL.sat, forearmL.brightness);
      strokeWeight(armL.strokeWeight);
      noFill();
      rect(0, 0, armR.xRadiusArmR, armR.yRadiusArmR, 6);
      rotate(-armR.position);
      translate(-startPointBody.x, -startPointBody.y);
      pop();
      break;
  }

  switch (elbow.shape) {
    case shapes.CIRCLE:
      push();
      ellipseMode(CENTER);
      colorMode(HSB, 100);
      fill(elbow.color, elbow.sat, elbow.brightness);
      noStroke();
      ellipse(startPoint.x + 5 - armL.yRadiusArmL, startPoint.y + 6 + armL.yRadiusArmL * cos(armL.position - armsBreathingRotation / 2), elbow.xRadiusElbow, elbow.yRadiusElbow);
      ellipse(startPoint.x - 5 + armR.yRadiusArmR, startPoint.y - 6 + armR.yRadiusArmR * cos(armR.position + armsBreathingRotation / 2), elbow.xRadiusElbow, elbow.yRadiusElbow);
      pop();
      break;
      /*
      case shapes.RECT:
        rectMode(CENTER);
        rect(85 - armL.yRadiusArmL, 68 + armL.yRadiusArmL * cos(armL.position), elbow.xRadiusElbow, elbow.yRadiusElbow, elbow.borderRadius);
        rect(75 + armR.yRadiusArmR, 72 + armR.yRadiusArmR * cos(armR.position), elbow.xRadiusElbow, elbow.yRadiusElbow, elbow.borderRadius);
        break;
        */
  }
  switch (hands.shape) {
    case handShapes.CIRCLE:
      push();
      ellipseMode(CENTER);
      colorMode(HSB, 100);
      fill(hands.color, hands.sat, hands.brightness);
      noStroke();

      push();
      translate(startPoint.x - armL.yRadiusArmL, startPoint.y + armL.yRadiusArmL * cos(armL.position));
      //rotate(hands.position);
      rect(-5 - forearmL.yRadiusforearmL * sin(forearmL.position + armsBreathingRotation / 2), -2 + forearmL.yRadiusforearmL * cos(forearmL.position + armsBreathingRotation / 2), hands.xRadiusHands, hands.yRadiusHands, hands.borderRadius);
      pop();

      push();
      translate(startPoint.x + armR.yRadiusArmR, startPoint.y + armR.yRadiusArmR * cos(armR.position));
      //rotate(hands.position);
      rect(-15 - forearmR.yRadiusforearmR * sin(forearmR.position - armsBreathingRotation / 2), -18 + forearmR.yRadiusforearmR * cos(forearmR.position - armsBreathingRotation / 2), hands.xRadiusHands, hands.yRadiusHands, hands.borderRadius);
      pop();
      pop();
      break;
    case handShapes.HOOK:
      push();
      ellipseMode(CENTER);
      colorMode(HSB, 100);
      noFill();
      strokeWeight(7);
      stroke(hands.color, hands.sat, hands.brightness);


      push();
      translate(startPoint.x - armL.yRadiusArmL + 0 - forearmL.yRadiusforearmL * sin(forearmL.position + armsBreathingRotation / 2), startPoint.y + armL.yRadiusArmL * cos(armL.position + armsBreathingRotation / 2) + 0 + forearmL.yRadiusforearmL * cos(forearmL.position));
      rotate(forearmL.position - radians(205) - armsBreathingRotation / 2);
      arc(-2, -9, hands.xRadiusHands + 5, hands.yRadiusHands + 5, 0, PI + QUARTER_PI, OPEN);
      pop();

      push();
      translate(startPoint.x + armR.yRadiusArmR + 0 - forearmR.yRadiusforearmR * sin(forearmR.position - armsBreathingRotation / 2), startPoint.y + armR.yRadiusArmR * cos(armR.position - armsBreathingRotation / 2) + 0 + forearmR.yRadiusforearmR * cos(forearmR.position));
      rotate(forearmR.position - radians(200) + armsBreathingRotation / 2);
      arc(-2, -9, hands.xRadiusHands + 5, hands.yRadiusHands + 5, 0, PI + QUARTER_PI, OPEN);
      pop();
      pop();
      break;
  }
}

function drawBody() {

  switch (body.shape) {
    case shapes.CIRCLE:
      push();
      ellipseMode(CENTER);
      colorMode(HSB, 100);
      fill(body.color, body.sat, body.brightness);
      noStroke();
      ellipse(startPointBody.x, startPointBody.y, body.xRadiusBody, body.yRadiusBody);
      pop();
      break;
    case shapes.RECT:
      push();
      colorMode(HSB, 100);
      fill(body.color, body.sat, body.brightness);
      noStroke();
      rectMode(CENTER);
      rect(startPointBody.x, startPointBody.y, body.xRadiusBody, body.yRadiusBody, body.borderRadius);
      pop();
      break;
    case shapes.POLYGON:
      push();
      colorMode(HSB, 100);
      fill(body.color, body.sat, body.brightness);
      noStroke();
      rectMode(CENTER);
      polygon(startPointBody.x, startPointBody.y, body.xRadiusBody / 2, body.yRadiusBody / 2, body.hoeken);
      pop();
      break;
  }
}
//-----------------------------------------------------------------------------------------------------------------------------------

function polygon(x, y, radiusX, radiusY, npoints) { //https://p5js.org/examples/form-regular-polygon.html
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radiusX;
    var sy = y + sin(a) * radiusY;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function checkXYRadius(xRad, yRad) {
  var output;
  if (xRad < yRad) {
    yRad = random(30, xRad * 2);

  } else if (xRad > yRad) {
    xRad = random(30, yRad * 2);

  }

  return output = createVector(xRad, yRad);
}

function datGUI() {
  var GUI = new dat.GUI();
  var GUIMain = GUI.addFolder('main');
  var GUIhead = GUI.addFolder('head');
  GUIhead.add(head, 'shape');
  GUIhead.add(head, 'borderRadius', 0, 20);
  GUIhead.add(head, 'hoeken', 5, 40);
  GUIhead.add(head, 'color', 0, 100);
  GUIhead.add(head, 'sat', 0, 100);
  GUIhead.add(head, 'brightness', 0, 100);
  var GUIeyeL = GUI.addFolder('eyeL');
  GUIeyeL.add(eyeL, 'iris');
  GUIeyeL.add(eyeL, 'xPos');
  GUIeyeL.add(eyeL, 'yPos');
  var GUIeyeR = GUI.addFolder('eyeR');
  GUIeyeR.add(eyeR, 'iris');
  GUIeyeR.add(eyeR, 'xPos');
  GUIeyeR.add(eyeR, 'yPos');
  var GUIOneEye = GUI.addFolder('oneEye');
  GUIOneEye.add(oneEye, 'eyeRadius', 15, 30);
  var GUIMouth = GUI.addFolder('mouth');
  GUIMouth.add(mouth, 'startPointX', -500, 0);
  GUIMouth.add(mouth, 'endPointX', -500, 0);
  GUIMouth.add(mouth, 'startPointY', -200, 500);
  GUIMouth.add(mouth, 'endPointY', -200, 500);
  var GUIbody = GUI.addFolder('body');
  GUIbody.add(body, 'xRadiusBody', 60, 150);
  GUIbody.add(body, 'yRadiusBody', 60, 150);
  GUIbody.add(body, 'shape');
  GUIbody.add(body, 'borderRadius', 0, 20);
  GUIbody.add(body, 'hoeken', 5, 40);
  GUIbody.add(body, 'color', 0, 100);
  GUIbody.add(body, 'sat', 0, 100);
  GUIbody.add(body, 'brightness', 0, 100);
  var GUIneck = GUI.addFolder('neck');
  GUIneck.add(neck, 'xRadiusNeck', 10, 20);
  GUIneck.add(neck, 'yRadiusNeck', 20, 50);
  GUIneck.add(neck, 'shape');
  GUIneck.add(neck, 'color', 0, 100);
  GUIneck.add(neck, 'sat', 0, 100);
  GUIneck.add(neck, 'brightness', 0, 100);
  var GUIlegs = GUI.addFolder('legs');
  GUIlegs.add(legs, 'xRadiuslegs', 10, 20);
  GUIlegs.add(legs, 'yRadiuslegs', 40, 90);
  GUIlegs.add(legs, 'legshape');
  GUIlegs.add(legs, 'rocketSpace', 10, 30);
  GUIlegs.add(legs, 'shadowSpace', 50, 150);
  GUIlegs.add(legs, 'shadowHeight', 15);
  GUIlegs.add(legs, 'legspace', 10, 30);
  GUIlegs.add(legs, 'color', 0, 100);
  GUIlegs.add(legs, 'sat', 0, 100);
  GUIlegs.add(legs, 'brightness', 0, 100);
  var GUIKnee = GUI.addFolder('knee');
  GUIKnee.add(knee, 'xRadiusKnee', 20, 30);
  GUIKnee.add(knee, 'yRadiusKnee', 20, 30);
  GUIKnee.add(knee, 'borderRadius', 0, 10);
  GUIKnee.add(knee, 'shape');
  GUIKnee.add(knee, 'color', 0, 100);
  GUIKnee.add(knee, 'sat', 0, 100);
  GUIKnee.add(knee, 'brightness', 0, 100);
  var GUIArmL = GUI.addFolder('ArmL');
  GUIArmL.add(armL, 'xRadiusArmL', 9, 15);
  GUIArmL.add(armL, 'yRadiusArmL', 100, 150);
  GUIArmL.add(armL, 'shape');
  GUIArmL.add(armL, 'position', radians(-240), radians(-280));
  var GUIArmR = GUI.addFolder('ArmR');
  GUIArmR.add(armR, 'xRadiusArmR', 9, 15);
  GUIArmR.add(armR, 'yRadiusArmR', 100, 150);
  GUIArmR.add(armR, 'shape');
  GUIArmR.add(armR, 'position', radians(240), radians(280));
  var GUIElbow = GUI.addFolder('elbow');
  GUIElbow.add(elbow, 'xRadiusElbow', 20, 30);
  GUIElbow.add(elbow, 'yRadiusElbow', 20, 30);
  GUIElbow.add(elbow, 'borderRadius', 0, 10);
  GUIElbow.add(elbow, 'shape');
  GUIElbow.add(elbow, 'color', 0, 100);
  GUIElbow.add(elbow, 'sat', 0, 100);
  GUIElbow.add(elbow, 'brightness', 0, 100);
  var GUIForearmL = GUI.addFolder('forearmL');
  GUIForearmL.add(forearmL, 'xRadiusforearmL', 9, 15);
  GUIForearmL.add(forearmL, 'yRadiusforearmL', 100, 150);
  GUIForearmL.add(forearmL, 'shape');
  GUIForearmL.add(forearmL, 'borderRadius', 0, 10);
  GUIForearmL.add(forearmL, 'position', radians(-180), radians(-360));
  var GUIForearmR = GUI.addFolder('forearmR');
  GUIForearmR.add(forearmR, 'xRadiusforearmR', 9, 15);
  GUIForearmR.add(forearmR, 'yRadiusforearmR', 100, 150);
  GUIForearmR.add(forearmR, 'shape');
  GUIForearmR.add(forearmR, 'borderRadius', 0, 10);
  GUIForearmR.add(forearmR, 'position', radians(180), radians(360));
  var GUIFoot = GUI.addFolder('foot');
  GUIFoot.add(foot, 'xRadiusFoot', 20, 30);
  GUIFoot.add(foot, 'yRadiusFoot', 20, 30);
  GUIFoot.add(foot, 'shape');
  GUIFoot.add(foot, 'color', 0, 100);
  GUIFoot.add(foot, 'sat', 0, 100);
  GUIFoot.add(foot, 'brightness', 0, 100);
}

function createParts() {
  body = new body();
  head = new head();
  eyeL = new eyeL();
  eyeR = new eyeR();
  oneEye = new oneEye();
  legs = new legs();
  knee = new knee();
  foot = new foot();
  mouth = new mouth();
  ear = new ear();
  hat = new hat();
  armL = new armL();
  armR = new armR();
  elbow = new elbow();
  forearmL = new forearmL();
  forearmR = new forearmR();
  neck = new neck();
  hands = new hands();
}