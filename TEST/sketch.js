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
  gui.add(head, 'shape', 0, 1);
  gui.add(head, 'borderRadius', 0, 20);

}

function draw() {
  clear();
  if (Math.round(head.shape)) {
    translate(0, -yRadiusHead / 2);
    ellipse(80, 80, head.xRadiusHead, head.yRadiusHead);
  } else {
    rectMode(CENTER);
    translate(0, -yRadiusHead / 2);
    rect(80, 80, head.xRadiusHead, head.yRadiusHead, head.borderRadius);
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
  this.shape = 1;
  this.borderRadius = 0;
};