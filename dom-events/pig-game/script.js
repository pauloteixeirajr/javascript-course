'use strict';

// Score & Player Variables
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Selecting elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. Display the dice
  diceEl.src = `dice-${dice}.png`;
  diceEl.classList.remove('hidden');

  // 3. Check for rolled 1
  const currScore = document.getElementById(`current--${activePlayer}`);
  if (dice !== 1) {
    // Add dice to the current score
    currentScore += dice;
    currScore.textContent = currentScore;
  } else {
    // Switch to next player
    currScore.textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
