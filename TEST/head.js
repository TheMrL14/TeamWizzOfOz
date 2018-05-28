class head {

  function setup() {
    head = new head();
  }

  function draw() {
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
    }
  }

  function head() {
    this.radiusHead = checkXYRadius(random(30, 70), random(30, 70));
    this.shape = Math.round(random(0, 2));
    this.borderRadius = Math.round(random(1, 20));
    this.hoeken = Math.round(random(6, 10));
    this.eyes = Math.round(random(0, 1));
    this.mouth = Math.round(random(0, 2));
    if (this.shape == 1) {
      this.accessories = 0;
    }
    this.color = body.color;
    this.sat = 80;
    this.brightness = 90;
  };
}