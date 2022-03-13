// global constants
var clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
const startbtn = document.getElementById('startbtn');
const stopbtn = document.getElementById('stopbtn');
const guesschecker = document.getElementById('guesscounter');
//variable that determines number of clues played
var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var numberOfPatterns = 2; 
var wrongGuessCount = 0;

function getPatterns() {
    var squares = [];
    for (var i = 0; i <= numberOfPatterns; i++) {
        squares.push(Math.floor(Math.random() * (6 - 0) + 0)+1);
    }
    return squares;
}

startbtn.addEventListener('click', () => {
    startGame();
})

function startGame() {
    pattern = getPatterns();
    gamePlaying = true;
    // swaps the start and stop buttons because game has begun
    startbtn.classList.add("hidden");
    stopbtn.classList.remove("hidden");
    playClueSequence();
}

function stopGame() {
    gamePlaying = false;
    stopbtn.classList.add("hidden");
    startbtn.classList.remove("hidden");
}

// Sound Synthesis Functions
const freqMap = {
    1: 200,
    2: 270,
    3: 320,
    4: 300,
    5: 400,
    6: 355
};

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

function showImage(btn) {
    document.getElementById("button" + btn).classList.add("pressed");
}

function removeImage(btn) {
    document.getElementById("button" + btn).classList.remove("pressed");
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

function lightButton(btn) {
    document.getElementById("button" + btn).classList.add("lit");
    document.getElementById("button" + btn).classList.add("pressed");
}

function clearButton(btn) {
    document.getElementById("button" + btn).classList.remove("lit");
    document.getElementById("button" + btn).classList.remove("pressed");
}

function playSingleClue(btn) {
    if (gamePlaying) {
        lightButton(btn);
        playTone(btn, clueHoldTime);
        setTimeout(clearButton, clueHoldTime, btn);
    }
}

function playClueSequence() {
    guessCounter = 0;
    let delay = nextClueWaitTime; //set delay to initial wait time
    for (let i = 0; i <= progress; i++) {
        // for each clue that is revealed so far
        // console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
        setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
        clueHoldTime = clueHoldTime - 20;
        delay += clueHoldTime;
        delay += cluePauseTime;
    }
}

function loseGame() {
    stopGame();
    alert("Game Over. You lost.");
    guesschecker.textContent = '0';
}

function winGame() {
    stopGame();
    alert("Game Over. You won!");
}

function guess(btn) {

    // console.log("user guessed: " + btn);
    if (!gamePlaying) {
        return;
    }

    if (pattern[guessCounter] == btn) {
        if (guessCounter == progress) {
            if (progress == pattern.length - 1) {
                numberOfPatterns++;
                startGame();
            } else {
                progress++;
                playClueSequence();
            }
        } else {
            guessCounter++;
        }
    } else {
        if(wrongGuessCount == 2){
            loseGame();
        }
        wrongGuessCount++;
        guesschecker.textContent = `${wrongGuessCount}`
    }
}