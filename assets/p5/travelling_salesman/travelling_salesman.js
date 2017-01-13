var nodes = [];
var totalNodes = 7;
var order = [];
var totalPermutations;
var count = 0;
var recordDistance;
var bestEver;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  for (var i = 0; i < totalNodes; i++) {
    var v = createVector(random(width), random(150, height - 150));
    nodes[i] = v;
    order[i] = i;
  }

  var d = calcDistance(nodes, order);
  recordDistance = d;
  bestEver = order.slice();

  totalPermutations = factorial(totalNodes);
  console.log(totalPermutations);

}

function draw() {
  background(0);
  //frameRate(5);
  fill(255);
  for (var i = 0; i < nodes.length; i++) {
    ellipse(nodes[i].x, nodes[i].y, 8, 8);
  }

  stroke(100, 255, 100);
  strokeWeight(4);
  noFill();
  beginShape();
  for (var i = 0; i < order.length; i++) {
    var n = bestEver[i];
    vertex(nodes[n].x, nodes[n].y);
  }
  endShape();

  stroke(255);
  strokeWeight(1);
  noFill();
  beginShape();
  for (var i = 0; i < order.length; i++) {
    var n = order[i];
    vertex(nodes[n].x, nodes[n].y);
  }
  endShape();

  var d = calcDistance(nodes, order);
  if (d < recordDistance) {
    recordDistance = d;
    bestEver = order.slice();
  }

  textSize(32);
  fill(255);
  var percent = 100 * (count / totalPermutations);
  text(nf(percent, 0, 3) + "% completed", 50, height - 50);
  text("Record Distance: " + nf(recordDistance, 0, 3), 50, height - 90);

  nextOrder();
}

function swap(a, i, j) {
  var temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}

function calcDistance(points, order) {
  var sum = 0;
  for (var i = 0; i < order.length - 1; i++) {
    var cityAIndex = order[i];
    var cityA = points[cityAIndex];
    var cityBIndex = order[i + 1];
    var cityB = points[cityBIndex];
    var d = dist(cityA.x, cityA.y, cityB.x, cityB.y);
    sum += d;
  }
  return sum;
}

function nextOrder() {
  count++;

  var largestI = -1;
  for (var i = 0; i < order.length - 1; i++) {
    if (order[i] < order[i + 1]) {
      largestI = i;
    }
  }
  if (largestI == -1) {
    noLoop();
    console.log('finished');
  }

  var largestJ = -1;
  for (var j = 0; j < order.length; j++) {
    if (order[largestI] < order[j]) {
      largestJ = j;
    }
  }

  swap(order, largestI, largestJ);

  var endArray = order.splice(largestI + 1);
  endArray.reverse();
  order = order.concat(endArray);
}

function factorial(n) {
  if (n == 1) {
    return 1;
  }
   else {
    return n * factorial(n - 1);
  }
}
