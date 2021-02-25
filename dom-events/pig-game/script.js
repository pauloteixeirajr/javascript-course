'use strict';

// Score & Player Variables
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

// Selecting elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
const init = function () {
  scores[0] = 0;
  scores[1] = 0;
  currentScore = 0;
  activePlayer = 0;

  current0El.textContent = currentScore;
  current1El.textContent = currentScore;
  score0El.textContent = 0;
  score1El.textContent = 0;

  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');

  playing = true;
};

const switchActivePlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (!playing) return;
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. Display the dice
  diceEl.src = `dice-${dice}.png`;
  diceEl.classList.remove('hidden');

  // 3. Check for rolled 1
  if (dice !== 1) {
    // Add dice to the current score
    currentScore += dice;
    document.getElementById(
      `current--${activePlayer}`
    ).textContent = currentScore;
  } else {
    // Switch to next player
    switchActivePlayer();
  }
});

btnHold.addEventListener('click', function () {
  if (!playing) return;
  // 1. Add current score to active player's score
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  // 2. Check if player's score is >= 100
  if (scores[activePlayer] >= 100) {
    // Finish the game
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');

    playing = false;
    diceEl.classList.add('hidden');
  } else {
    // Switch to next player
    switchActivePlayer();
  }
});

btnNew.addEventListener('click', function () {
  // Resetting the scores && current player
  init();
});

init();
