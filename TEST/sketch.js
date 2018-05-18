var head;
var xRadiusHead, yRadiusHead
var xRadiusBody, yRadiusBody
var randomHead;
var randomBody;

function setup() {


  createCanvas(640, 480);
  head = new headText();
  var gui = new dat.GUI();
  gui.add(head, 'xRadiusHead', 20, 60);
  gui.add(head, 'yRadiusHead', 20, 60);
  gui.add(head, 'shape');
  gui.add(head, 'borderRadius', 0, 20);
  gui.add(head, 'hoeken', 0, 20);

}

function draw() {
  clear();
  if (Math.round(head.shape) == 0) {
    translate(0, -yRadiusHead / 2);
    ellipse(80, 80, head.xRadiusHead, head.yRadiusHead);
  } else if (Math.round(head.shape) == 1) {
    rectMode(CENTER);
    translate(0, -yRadiusHead / 2);
    rect(80, 80, head.xRadiusHead, head.yRadiusHead, head.borderRadius);
  } else {
    translate(0, -yRadiusHead / 2);
    polygon(80, 80, head.xRadiusHead, head.yRadiusHead, head.hoeken);
  }



  // if (randomBody) {
  //   translate(0, +yRadiusBody / 2 + yRadiusHead / 2);
  //   ellipse(80, 80, xRadiusBody, yRadiusBody);
  // } else {
  //   rectMode(CENTER);
  //   translate(0, +yRadiusBody / 2 + yRadiusHead / 2);
  //   rect(80, 80, xRadiusBody, yRadiusBody, radiusCorners);
  // }

}

function headText() {
  this.xRadiusHead = 30;
  this.yRadiusHead = 30;
  this.shape = 0;
  this.borderRadius = 0;
  this.hoeken = 4
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