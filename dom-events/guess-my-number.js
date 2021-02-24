'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const message = document.querySelector('.message');
const curScore = document.querySelector('.score');
const curHighScore = document.querySelector('.highscore');
const body = document.querySelector('body');
const number = document.querySelector('.number');
const inputField = document.querySelector('.guess');

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = +inputField.value;

  if (!guess) {
    displayMessage('🚫  No number!');
  } else if (guess === secretNumber) {
    displayMessage('✅  Correct Number!');
    number.textContent = secretNumber;
    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      curHighScore.textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      curScore.textContent = score;
    } else {
      displayMessage('You lost the game. :(');
      curScore.textContent = 0;
    }
  }
});

//////////////////////////////////////////
// Coding Challenge

/**
 * Implement a game reset functionality , so that the player
 * can make a new guess! Here is how:
 *
 * 1. Select the element with the 'again' class and attach a click
 * event handler
 * 2. In the handler function, restore initial values of the score
 * and number variables
 * 3. Restore the initial conditions of the message, number, score and guess
 * input field
 * 4. Also restore the original background color (#222) and number width (15rem)
 */

// Teacher's solution & mine are the same
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  curScore.textContent = score;
  number.textContent = '?';
  inputField.value = null;

  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
});
