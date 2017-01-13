var slider;
var angle = 0;
var bl = 0;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  background(50);
  angle = document.getElementById("sliderAngle").value;
  bl = document.getElementById("sliderBranchLength").value;
  stroke(255);
  translate(window.innerWidth/2, height);
  branch(160);
}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 4) {
    // Branch right
    push();
    rotate(angle);
    branch(len*bl);
    pop();

    // Branch left
    push();
    rotate(-angle);
    branch(len*bl);
    pop();
  }
}
