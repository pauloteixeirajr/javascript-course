'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = +document.querySelector('.guess').value;
  const message = document.querySelector('.message');
  const curScore = document.querySelector('.score');
  const body = document.querySelector('body');
  const number = document.querySelector('.number');

  if (!guess) {
    message.textContent = '🚫  No number!';
  } else if (guess === secretNumber) {
    message.textContent = '✅  Correct Number!';
    number.textContent = secretNumber;
    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';
  } else if (guess > secretNumber) {
    if (score > 1) {
      message.textContent = '📈 Too high!';
      score--;
      curScore.textContent = score;
    } else {
      message.textContent = 'You lost the game. :(';
      curScore.textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      message.textContent = '📉 Too low!';
      score--;
      curScore.textContent = score;
    } else {
      message.textContent = 'You lost the game. :(';
      curScore.textContent = 0;
    }
  }
});
