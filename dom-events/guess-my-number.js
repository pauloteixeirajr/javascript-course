'use strict';

document.querySelector('.check').addEventListener('click', function () {
  const guess = +document.querySelector('.guess').value;
  const message = document.querySelector('.message');

  if (!guess) {
    message.textContent = 'No number!';
    return;
  }
});
