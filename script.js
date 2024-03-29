//global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before playing sequence
const time = 10000; //base timer is 10 seconds
const easyBtn = document.getElementById("easy");
const hardBtn = document.getElementById("hard");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
//sound that plays while the game is not being actively played
const barricades = new Audio("./assets/Barricades.wav");
barricades.loop = true;
barricades.volume = 0.2;

//Global Variables
var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 1;
var guessCounter = 0;
var remainingLife = 3;
var clueHoldTime = 1000; //how long to hold each clue's light/sound in ms
var timer;
var timerDelay;
var intervalID;
var squareCount;

hardBtn.addEventListener("click", () => {
  var numberOfSquares = 6;
  squareCount = numberOfSquares;
  queueButtons(numberOfSquares);
  document.getElementById("diffButtons").classList.add("hidden");
});
easyBtn.addEventListener("click", () => {
  var numberOfSquares = 4;
  squareCount = numberOfSquares;
  queueButtons(numberOfSquares);
  document.getElementById("gameButtonArea").classList.add("four");
  document.getElementById("gameButtonArea").classList.remove("six");
  document.getElementById("diffButtons").classList.add("hidden");
});
window.onload = function () {
  barricades.play();
};

function startGame() {
  //initialize game variables
  barricades.pause();
  progress = 0;
  guessCounter = 0;
  gamePlaying = true;
  remainingLife = 3;
  clueHoldTime = 1000;
  timer = 0;
  timerDelay = 0;
  updateSounds();
  document.getElementById("diffButtons").classList.remove("hidden");
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  document.getElementById("lifeCounter").classList.remove("hidden");
}

//starts game based on difficulty
function queueButtons(btnNumber) {
  if (btnNumber == 4) {
    for (var i = 5; i <= 6; i++) {
      document.getElementById(`button${i}`).classList.add("hidden");
    }
  }
  for (var i = 0; i < 8; i++) {
    //pattern gets randomized at the start of game
    pattern.push(randomNumber(btnNumber));
  }
  playClueSequence();
}

function startTimer() {
  timer = time + progress * 1000; //add an extra second after each round (17 seconds on final round)
  timerDelay =
    nextClueWaitTime + clueHoldTime * (progress + 1) + cluePauseTime * progress;
  intervalID = setInterval(startDelay, 100);
}

function startDelay() {
  timerDelay -= 100;
  if (timerDelay <= 0) {
    clearInterval(intervalID);
    intervalID = setInterval(decreaseTimer, 1000); //timer will always be in intervals of 1000ms
  }
}

function decreaseTimer() {
  printTimer(timer / 1000);
  document.getElementById("display").classList.remove("hidden");
  timer = timer - 1000;
  if (timer === -2000) {
    stopTimer();
    loseGame();
  }
}

function stopTimer() {
  clearInterval(intervalID);
  document.getElementById("display").classList.add("hidden");
}

function printTimer(txt) {
  if (txt === 1) {
    document.getElementById("display").innerHTML = txt + " Second Remaining";
  } else {
    document.getElementById("display").innerHTML = txt + " Seconds Remaining";
  }
}

function stopGame() {
  barricades.play();
  if (squareCount == 4) {
    document.getElementById("gameButtonArea").classList.remove("four");
    document.getElementById("gameButtonArea").classList.add("six");
  }
  if (!document.getElementById("diffButtons").classList.contains("hidden")) {
    document.getElementById("diffButtons").classList.add("hidden");
  }
  stopTimer();
  pattern = [];
  for (var i = 5; i <= 6; i++) {
    document.getElementById(`button${i}`).classList.remove("hidden");
  }
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("lifeCounter").classList.add("hidden");
  document.getElementById("life3").classList.remove("hidden");
  document.getElementById("life2").classList.remove("hidden");
  document.getElementById("life1").classList.remove("hidden");
}

function randomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
}

function loseLife() {
  document.getElementById("life" + remainingLife).classList.add("hidden");
  remainingLife -= 1;
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
  document.getElementById("button" + btn + "img").classList.remove("hidden");
}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
  document.getElementById("button" + btn + "img").classList.add("hidden");
}

function playSingleClue(btn) {
  guessCounter = 0;
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    //for each clue that is revealed so far
    setTimeout(playSingleClue, delay, pattern[i]); //set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
  startTimer();
  clueHoldTime -= 100; //playback speed increases by 100ms each turn
}

function loseGame() {
  stopGame();
  alert("Game over, You lost. (Rounds Completed: " + progress + ")");
}

function winGame() {
  stopGame();
  alert("Contratulations, You won!");
}

function guess(btn) {
  if (!gamePlaying) {
    return;
  } else if (btn != pattern[guessCounter]) {
    loseLife();
    if (remainingLife === 0) {
      loseGame();
    }
  } else if (guessCounter <= progress) {
    //keep guessing until the sequence the whole sequence is guessed correctly
    guessCounter += 1;
    if (guessCounter > progress && progress < 8) {
      progress += 1; //will play one more clue in the next sequence
      guessCounter = 0; //restart the guess counter for guessing next sequence
      stopTimer();
      if (progress < 8) {
        //continues to play the next sequence untill all 8 are played
        playClueSequence();
      } else {
        winGame();
      }
    }
  }
}
// Sound Synthesis Functions
const freqMap = {
  1: 300,
  2: 700.2,
  3: 499,
  4: 683,
  5: 900,
  6: 287,
};

//Change sounds every game
function updateSounds() {
  for (var i = 1; i <= 6; i++) {
    freqMap[i] = Math.random() * (1000 - 200 + 1) + 200;
  }
}

function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
