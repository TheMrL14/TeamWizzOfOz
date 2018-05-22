var head, body;
var xRadiusHead, yRadiusHead
var xRadiusBody, yRadiusBody
var randomHead;
var randomBody;
var Neck;

function setup() {

  Neck = random(0, 20);

  createCanvas(1000, 1000);
  head = new headText();
  var guiHead = new dat.GUI();
  body = new bodyText();
  var guiBody = new dat.GUI();
  guiHead.add(head, 'xRadiusHead', 30, 100);
  guiHead.add(head, 'yRadiusHead', 30, 100);
  guiHead.add(head, 'shape');
  guiHead.add(head, 'borderRadius', 0, 20);
  guiHead.add(head, 'hoeken', 5, 40);

  guiBody.add(body, 'xRadiusBody', 60, 150);
  guiBody.add(body, 'yRadiusBody', 60, 150);
  guiBody.add(body, 'shape');
  guiBody.add(body, 'borderRadius', 0, 20);
  guiBody.add(body, 'hoeken', 5, 40);

}

function draw() {
    translate(100, 20);
  clear();
  if (Math.round(head.shape) == 0) {
    translate(0, -yRadiusHead / 2);
    ellipse(80, 80, head.xRadiusHead, head.yRadiusHead);
  } else if (Math.round(head.shape) == 1) {
    rectMode(CENTER);
    translate(0, -yRadiusHead / 2);
    rect(80, 80, head.xRadiusHead, head.yRadiusHead, head.borderRadius);
  } else {
    rectMode(CENTER);
    translate(0, -yRadiusHead / 2);
    polygon(80, 80, head.xRadiusHead / 2, head.yRadiusHead / 2, head.hoeken);
  }

  translate(0, body.yRadiusBody / 2 + head.yRadiusHead / 2 + Neck);


  if (Math.round(body.shape) == 0) {
    translate(0, -yRadiusBody / 2);
    ellipse(80, 80, body.xRadiusBody, body.yRadiusBody);
  } else if (Math.round(body.shape) == 1) {
    rectMode(CENTER);
    translate(0, -yRadiusBody / 2);
    rect(80, 80, body.xRadiusBody, body.yRadiusBody, body.borderRadius);
  } else {
    rectMode(CENTER);
    translate(0, -yRadiusBody / 2);
    polygon(80, 80, body.xRadiusBody / 2, body.yRadiusBody / 2, body.hoeken);
  }


}

function headText() {
  this.xRadiusHead = random(40, 80);
  this.yRadiusHead = random(40, 80);
  this.shape = Math.round(random(0, 2));
  this.borderRadius = random(0, 20);
  this.hoeken = random(5, 40)
};
function bodyText() {
  this.xRadiusBody = random(60, 150);
  this.yRadiusBody = random(60, 150);
  this.shape = Math.round(random(0, 2));
  this.borderRadius = random(0, 20);
  this.hoeken = random(5, 40)

  console.log(this.shape);
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