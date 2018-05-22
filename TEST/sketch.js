var head, body, neck;
var xRadiusHead, yRadiusHead; 
var xRadiusNeck, yRadiusNeck;
var xRadiusBody, yRadiusBody;
var randomHead;
var randomBody;
var NeckSpace;

function setup() {

  NeckSpace = random(0, 20);

  createCanvas(1000, 1000);
  head = new headText();
  var GUI = new dat.GUI();
  body = new bodyText();
  neck = new neckText();
  // var GUIColor = GUI.addFolder('color');
  // GUIColor.add(head, 'H', 0, 100);
  // GUIColor.add(head, 'S', 0, 100);
  // GUIColor.add(head, 'B', 0, 100);
  var GUIhead = GUI.addFolder('head');
  GUIhead.add(head, 'shape');
  GUIhead.add(head, 'borderRadius', 0, 20);
  GUIhead.add(head, 'hoeken', 5, 40);
  var GUIbody = GUI.addFolder('body');
  GUIbody.add(body, 'xRadiusBody', 60, 150);
  GUIbody.add(body, 'yRadiusBody', 60, 150);
  GUIbody.add(body, 'shape');
  GUIbody.add(body, 'borderRadius', 0, 20);
  GUIbody.add(body, 'hoeken', 5, 40);
  var GUIneck = GUI.addFolder('neck');
  GUIneck.add(neck, 'xRadiusNeck', 10, 20);
  GUIneck.add(neck, 'yRadiusNeck', 20, 50);
  GUIneck.add(neck, 'shape');

}

function draw() {
  translate(100, 20);
  clear();

  if (Math.round(neck.shape) == 0) {
    rectMode(CENTER);
    rect(80, 80 + head.radiusHead.y / 2, neck.xRadiusNeck, neck.yRadiusNeck);
  }


  if (Math.round(head.shape) == 0) {
    ellipseMode(CENTER);
    ellipse(80, 80, head.radiusHead.x, head.radiusHead.y);
  } else if (Math.round(head.shape) == 1) {
    rectMode(CENTER);
    rect(80, 80, head.radiusHead.x, head.radiusHead.y, head.borderRadius);
  } else {
    rectMode(CENTER);
    polygon(80, 80, head.radiusHead.x / 2, head.radiusHead.y / 2, head.hoeken);
  }

  translate(0, body.yRadiusBody / 2 + head.radiusHead.y / 2 + NeckSpace);


  if (Math.round(body.shape) == 0) {
    ellipseMode(CENTER);
    ellipse(80, 80, body.xRadiusBody, body.yRadiusBody);
  } else if (Math.round(body.shape) == 1) {
    rectMode(CENTER);
    rect(80, 80, body.xRadiusBody, body.yRadiusBody, body.borderRadius);
  } else {
    rectMode(CENTER);
    polygon(80, 70, body.xRadiusBody / 2, body.yRadiusBody / 2, body.hoeken);
  }

}

function headText() {
  this.radiusHead = checkXYRadius(random(30, 70), random(30, 70));
  this.shape = Math.round(random(0, 2));
  this.borderRadius = Math.round(random(0, 20));
  this.hoeken = Math.round(random(3, 20));
};

function randomShape(x, y, radiusX, radiusY, npoints) { //https://p5js.org/examples/form-regular-polygon.html
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < randomAantal; a++) {
    var sx = x + cos(randomX[a]) * radiusX;
    var sy = y + sin(randomY[a]) * radiusY;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function bodyText() {
  this.xRadiusBody = random(60, 150);
  this.yRadiusBody = random(60, 150);
  this.shape = Math.round(random(0, 2));
  this.borderRadius = random(0, 20);
  this.hoeken = random(5, 40)

  console.log(this.shape);
};

function neckText() {
  this.xRadiusNeck = random(10, 20);
  this.yRadiusNeck = 50;
  this.shape = 0;
};


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
  console.log(xRad, yRad);
  return output = createVector(xRad, yRad);
}