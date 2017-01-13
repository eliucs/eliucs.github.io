var angle;
var axiom = "F";
var sentence = axiom;
var length = 150;

var rules = [];

rules[0] = {
  a: "F",
  b: "FF+[+F-F-F]-[-F+F+F]"
}

function generate() {
  length *= random(0.4, 0.6);
  var nextSentence = "";

  for (var i = 0; i < sentence.length; i++) {
    var current = sentence.charAt(i);
    var found = false;

    for (var j = 0; j < rules.length; j++) {
      if (current == rules[j].a) {
        found = true;
        nextSentence += rules[j].b;
        break;
      }
    }
    if (!found) {
      nextSentence += current;
    }
  }
  sentence = nextSentence;
  turtle();
}

function turtle() {
  background(51);
  resetMatrix();
  translate(width/2, height);
  stroke(255);

  for (var i = 0; i < sentence.length; i++) {
    var current = sentence.charAt(i);

    if (current == "F") {
      line(0, 0, 0, -length);
      translate(0, -length);
    }
    else if (current == "+") {
      rotate(angle);
    }
    else if (current == "-") {
      rotate(-angle);
    }
    else if (current == "[") {
      push();
    }
    else if (current == "]") {
      pop();
    }
  }
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  angle = radians(25);
  background(50);
  turtle();
  var button = document.getElementById("button");
  button.onclick = generate;
}

function draw() {

}
