const CANVAS_WIDTH = window.innerWidth > 500 ? 500 : window.innerWidth;
const CANVAS_HEIGHT = CANVAS_WIDTH;
const CLOCKSIZE = CANVAS_WIDTH - 50;
const CLOCK_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const MINUTE_HAND_LENGTH = CLOCKSIZE / 2 - 30;
const HOUR_HAND_LENGTH = CLOCKSIZE / 2 - 50;
const TIME_DIV_JPN_KANJI = document.getElementById('time-jpn-kanji');
const TIME_DIV_JPN_ROMAJI = document.getElementById('time-jpn-romaji');
const TIME_DIV_JPN_HIRAGANA = document.getElementById('time-jpn-hiragana');
const TIME_DIV_ENG = document.getElementById('time-eng');
const TAP_TARGET = document.getElementById('tap-target');
let CANVAS;

let timeHr = 0;
let timeMin = 0;

let taps = 0;

function setup() {
  CANVAS = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  CANVAS.parent('clock-holder');
  TAP_TARGET.addEventListener('click', this.tap);
  reset();
}

function tap() {
  console.log('rrrr');
  taps++;
  if (taps === 1) {
    showJapaneseIime();
  }
  if (taps === 2) {
    showRomajiTime();
  }
  if (taps > 2) {
    reset();
  }
}

function reset() {
  background(255, 0, 0);
  generateTime();
  blankText();
  drawClock();
  taps = 0;
}

function blankText() {
  TIME_DIV_JPN_KANJI.innerText = '';
  TIME_DIV_JPN_HIRAGANA.innerText = '';
  TIME_DIV_JPN_ROMAJI.innerText = 'Tap to show time';
}

function generateTime() {
  timeHr = Math.floor(random(0, 12));
  timeMin = Math.floor(random(0, 59));
  let timeMinPretty = timeMin < 10 ? `0${timeMin}` : timeMin;
  console.log(timeMinPretty);
  let timeHrPretty = timeHr == 0 ? 12 : timeHr;
  TIME_DIV_ENG.innerText = `${timeHrPretty}:${timeMinPretty}`;
}

function showJapaneseIime() {
  const hrKanji = HOURS_JPN_KANJI[timeHr];
  // const minKanji = MINS_JPN_KANJI[timeMin];
  const hr = HOURS_JPN_HIRAGANA[timeHr];
  const min = MINS_JPN_HIRAGANA[timeMin];
  // TIME_DIV_JPN_KANJI.innerHTML = `<ruby>${hrKanji}<rt>${hr}</rt> ${min}</ruby>`;
  TIME_DIV_JPN_HIRAGANA.innerText = `${hr} ${min}`;
}

function showRomajiTime() {
  const mins = MINS_JPN[timeMin];
  const hrs = HOURS_JPN[timeHr];
  TIME_DIV_JPN_ROMAJI.innerText = `${hrs} ${mins}`;
}

function drawClock() {
  // Face
  strokeWeight(1);
  ellipse(width/2, height/2, CLOCKSIZE);
  drawNumbers();
  drawMinuteLines();
  drawMinuteHand(timeMin);
  drawHourHand(timeHr, timeMin);
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
    time-= timeAdd;
  });
}

function drawMinuteHand(minute) {
  strokeWeight(2);
  let offsetX = width / 2;
  let offsetY = height / 2;
  let time = Math.PI - ((Math.PI * 2) / 60) * minute;
  let s = sin(time);
  let c = cos(time);
  line(offsetX, offsetY, s*MINUTE_HAND_LENGTH+offsetX, c*MINUTE_HAND_LENGTH+offsetY);
}

function drawHourHand(hour, minute) {
  strokeWeight(4);
  let offsetX = width / 2;
  let offsetY = height / 2;
  let time = Math.PI - ((Math.PI * 2) / 12) * hour;
  let minOffset = ((Math.PI * 2) / 12) * (minute / 60);
  time -= minOffset;
  let s = sin(time);
  let c = cos(time);
  line(offsetX, offsetY, s*HOUR_HAND_LENGTH+offsetX, c*HOUR_HAND_LENGTH+offsetY);
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
    // if (index % 5 === 0) continue;
    let s = sin(time);
    let c = cos(time);
    line(s*multX+offsetX, c*multY+offsetY, s*(multX-tickLength)+offsetX, c*(multY-tickLength)+offsetY);
    time+= timeAdd;
  }
}
