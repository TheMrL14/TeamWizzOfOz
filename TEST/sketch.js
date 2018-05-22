var head;
var xRadiusHead, yRadiusHead
var xRadiusBody, yRadiusBody
var randomHead;
var randomBody;

function setup() {


  createCanvas(1000, 1000);
  head = new headText();
  var gui = new dat.GUI();
  gui.add(head, 'xRadiusHead', 20, 100);
  gui.add(head, 'yRadiusHead', 20, 100);
  gui.add(head, 'shape');
  gui.add(head, 'borderRadius', 0, 20);
  gui.add(head, 'hoeken', 0, 40);

}

function draw() {
  clear();
  rect(80, 140, 20, 120);
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
  rectMode(CENTER);



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
  this.xRadiusHead = Math.random() * 80 + 1;
  this.yRadiusHead = Math.random() * 80 + 1;
  this.shape = Math.round(Math.random() * 3);
  this.borderRadius = Math.round(Math.random() * 20 + 1);
  this.hoeken = Math.round(Math.random() * 40 + 1);

  console.log(this.xRadiusHead);
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