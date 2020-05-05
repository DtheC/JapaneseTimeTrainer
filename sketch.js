const CANVAS_WIDTH = 300;
const CANVAS_HEIGHT = 300;
const CLOCKSIZE = CANVAS_WIDTH - 50;
const CLOCK_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const MINUTE_HAND_LENGTH = CLOCKSIZE / 2 - 30;
const HOUR_HAND_LENGTH = CLOCKSIZE / 2 - 50;

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  background(255, 0, 0);
  drawClock();
}

function draw() {
}

function drawClock() {
  // Face
  ellipse(width/2, height/2, CLOCKSIZE);
  drawNumbers();
  drawMinuteLines();
  drawMinuteHand();
  drawHourHand();
}

function drawNumbers() {
  textSize(20);
  textAlign(CENTER, CENTER);
  let offsetX = width / 2;
  let offsetY = height / 2;
  let multX = CLOCKSIZE / 2 - 15;
  let multY = CLOCKSIZE / 2 - 15;
  let timeAdd = Math.PI * 2 / CLOCK_NUMBERS.length;
  let time = Math.PI - timeAdd; // Start at right spot
  CLOCK_NUMBERS.forEach(number => {
    text(number, sin(time)*multX+offsetX, cos(time)*multY+offsetY);
    // ellipse(, 20);
    time-= timeAdd;
  });
}

function drawMinuteHand() {
  strokeWeight(2);
  let offsetX = width / 2;
  let offsetY = height / 2;
  let multX = CLOCKSIZE / 2;
  let multY = CLOCKSIZE / 2;
  let tickLength = MINUTE_HAND_LENGTH;
  let timeAdd = Math.PI * 2 / 60; // 60 ticks
  let time = 0;
  const r = Math.floor(random(0, 61));
  for (let index = 0; index < 61; index++) {
    if (r == index) {
      console.log('11111111111111');
      let s = sin(time);
      let c = cos(time);
      line(offsetX, offsetY, s*tickLength+offsetX, c*tickLength+offsetY); // s*(multX-tickLength)+offsetX, c*(multY-tickLength)+offsetY);
      break;
    }
    time-=timeAdd;
  }
}

function drawHourHand() {
  strokeWeight(4);
  let offsetX = width / 2;
  let offsetY = height / 2;
  let timeAdd = Math.PI * 2 / CLOCK_NUMBERS.length; // 60 ticks
  let time = 0;
  const r = Math.floor(random(0, CLOCK_NUMBERS.length));
  for (let index = 0; index < CLOCK_NUMBERS.length; index++) {
    if (r == index) {
      let s = sin(time);
      let c = cos(time);
      line(offsetX, offsetY, s*HOUR_HAND_LENGTH+offsetX, c*HOUR_HAND_LENGTH+offsetY); // s*(multX-tickLength)+offsetX, c*(multY-tickLength)+offsetY);
      break;
    }
    time-=timeAdd;
  }
}

function drawMinuteLines() {
  let offsetX = width / 2;
  let offsetY = height / 2;
  let multX = CLOCKSIZE / 2;
  let multY = CLOCKSIZE / 2;
  let tickLength = 15;
  let timeAdd = Math.PI * 2 / 60; // 60 ticks
  let time = 0;
  for (let index = 0; index < 61; index++) {
    // TODO: Modulo this to not draw those div by 5
    let s = sin(time);
    let c = cos(time);
    line(s*multX+offsetX, c*multY+offsetY, s*(multX-tickLength)+offsetX, c*(multY-tickLength)+offsetY);
    time+= timeAdd;
  }
}