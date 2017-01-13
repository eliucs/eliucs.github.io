var drops = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  for (var i = 0; i < 500; i++) {
    drops[i] = new Drop();
  }
}

function draw() {
  background(240, 255, 255);
  for (var i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();
  }
}
