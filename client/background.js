
let stars = [];
const numStars = 800;
const maxStarSize = 5;
let r = 8;
let g = 0;
let b = 117;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background("#000066");
}

function setup() {
  createCanvas(2000, 3000);
  noStroke();

  for (let i = 0; i < numStars; i++) {
    stars.push(new Star());
  }
}

function draw() {
  background("#000066");

  for (const star of stars) {
    star.display();
  }
}

class Star {
  constructor() {
    this.position = createVector(random(width), random(height));
    this.size = random(1, maxStarSize);
    this.brightness = random(100, 255);
  }

  display() {
    fill(this.brightness);
    ellipse(this.position.x, this.position.y, this.size);

    // Introduce twinkling effect
    if (random() > 0.8) {
      this.brightness = random(100, 255);
    }
  }
}
