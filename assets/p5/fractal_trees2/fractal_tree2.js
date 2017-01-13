var tree = []
var leaves = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  var a = createVector(width/2, height);
  var b = createVector(width/2, height-200);
  var root = new Branch(a, b);

  tree[0] = root;
}

function mousePressed() {
  for (var i = tree.length - 1; i >= 0; i--) {
    if (!tree[i].finished) {
      tree.push(tree[i].branchA());
      tree.push(tree[i].branchB());
    }
    tree[i].finished = true;
  }

  for (var i = 0; i < tree.length; i++) {
    var leaf = tree[i].end.copy();
    leaves.push(leaf);
  }
}

function draw() {
  background(51);

  for (var i = 0; i < tree.length; i++) {
    tree[i].show();
    tree[i].jitter();
  }

  for (var i = 0; i < leaves.length; i++) {
    fill(255, 0, 100);
    ellipse(leaves[i].x, leaves[i].y, 8, 8)
    leaves[i].x += random(-1, 1);
    leaves[i].y += random(-1, 1);
  }
}
