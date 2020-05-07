// Global Variables
let mic;

function setup() {
  // Canvas Props
  const cnv = createCanvas(400, 400);
  cnv.position(displayWidth / 2 - width / 2, 50);
  
  mic = new p5.AudioIn(failed);
  mic.start(found, failed);
}

function draw() {
  background(51);
  
  let vol = mic.getLevel();
  let note = freqToMidi(mic);
  
  // Call Functions
  drawBorders();
  
  push();
  noStroke();
  fill(255, 167, 0);
  translate(width / 2, height / 2);
  ellipse(0, 0, width, vol * 200);
  pop();
  
  console.log(`Note: ${note}`);
  console.log(`Volume: ${vol}`);
}

function drawBorders() {
  push();
  stroke(255);
  rect(0, 0, 4, height);
  rect(width - 4, 0, 4, height);
  rect(0, 0, width, 4);
  rect(0, height - 4, width, 4);
  pop();
}

function found() {
  console.log("Microphone found!");
}

function failed() {
  console.log("Failed to find microphone.");
}
