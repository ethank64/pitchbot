// Global Variables
let mic;
let vol;
let note;

function setup() {
  // Canvas Props
  const cnv = createCanvas(400, 400);
  cnv.position(displayWidth / 2 - width / 2, 50);
  cnv.style("border", "2px solid rgb(255, 255, 255)");
  
  mic = new p5.AudioIn(failed);
  mic.start(found, failed);
}

function draw() {
  background(51);
  
  vol = mic.getLevel();
  note = freqToMidi(mic);
  
  push();
  noStroke();
  fill(255, 167, 0);
  translate(width / 2, height / 2);
  ellipse(0, 0, width, vol * 200);
  pop();
  
  console.log(`Note: ${note}`);
  console.log(`Volume: ${vol}`);
}

function found() {
  console.log("Microphone found!");
}

function failed() {
  console.log("Failed to find microphone.");
}
