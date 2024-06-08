"use strict";

//selecting elements
const firstSide = document.querySelector(".first-side");
const division = document.querySelector(".division");
const button = document.querySelector(".btn");
const big = document.querySelector(".big-text");
const body = document.querySelector("body");
const check = document.querySelector(".check");
const guide = document.querySelector(".guide");
const reload = document.getElementById("reload");
const mainHead = document.querySelector(".main-heading");
const playerScore = document.querySelector(".playerScore");
const score = document.querySelector(".score");
const scoreBox = document.querySelector(".score-box");
const highscoreValue = document.querySelector(".highscoreValue");
const division2 = document.querySelector(".division-2");

//declaring variables
let secretNumber = Math.trunc(Math.random() * 50 + 1);
console.log(secretNumber);
let highscore = 0;
let playing = true;
let initialScore = 20;
playerScore.textContent = initialScore;

//creating functions
const displayControl = function () {
  body.classList.remove("error");
  big.classList.remove("white");
  guide.classList.remove("white");
};

const tryAgain = function () {
  big.textContent = "Enter a Valid Number!";
  body.classList.add("error");
  mainHead.classList.add("vibrate");
  big.classList.add("red");
  guide.classList.add("red");
  initialScore--;
  playerScore.textContent = initialScore;
};

const playerLost = function () {
  big.textContent = "You lost the game!";
  guide.classList.add("hidden");
  big.classList.add("red");
  guide.classList.add("red");
  playing = false;
};

const init = function () {
  playing = true;
  initialScore = 20;
  playerScore.textContent = initialScore;
  secretNumber = Math.trunc(Math.random() * 50 + 1);
  big.textContent = "Guess My Number!";
  body.classList.remove("error");
  guide.classList.remove("hidden");
  big.classList.remove("white");
  guide.classList.remove("white");
  big.classList.remove("red");
  guide.classList.remove("red");
  mainHead.classList.remove("vibrate");
  firstSide.classList.remove("player-wins");
  firstSide.classList.remove("player--loser");
  big.classList.remove("text-color-change");
  document.querySelector(".score").value = "";
};

//When the button is clicked
check.addEventListener("click", function () {
  const score = Number(document.querySelector(".score").value);
  console.log(score);
  if (playing)
    if (!score) {
      //if there's no input
      tryAgain();
      if (initialScore <= 0) {
        playerLost();
        firstSide.classList.add("player--loser");
        big.classList.add("text-color-change");
      }
    }

    //if guess is greater than the number
    else if (score > secretNumber) {
      if (score <= 50) {
        big.textContent = "Guess is too high!";
        displayControl();
        initialScore--;
        playerScore.textContent = initialScore;
        if (initialScore <= 0) {
          playerLost();
          firstSide.classList.add("player--loser");
        }
      } else {
        tryAgain();
      }
    }

    //if guess is less than the number
    else if (score < secretNumber) {
      if (score >= 1) {
        big.textContent = "Guess is too low!";
        displayControl();
        initialScore--;
        playerScore.textContent = initialScore;
        if (initialScore <= 0) {
          playerLost();
          firstSide.classList.add("player--loser");
        }
      } else {
        tryAgain();
      }
    }

    //if guess is correct
    else if (score === secretNumber) {
      big.textContent = "Correct Number!";
      guide.classList.add("hidden");
      body.classList.remove("error");
      firstSide.classList.add("player-wins");
      initialScore;
      highscore;
      if (initialScore > highscore) {
        highscore = initialScore;
        highscoreValue.textContent = highscore;
        console.log(initialScore);
        console.log(highscore);
      }
      playing = false;
    }
});

reload.addEventListener("click", init);

if (module.hot) {
  module.hot.accept();
}
