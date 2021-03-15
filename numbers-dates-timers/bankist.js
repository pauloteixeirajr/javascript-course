'use strict';
// PROJECT: "Bankist" App
// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, idx) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const row = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">
        ${idx + 1} ${type}
      </div>
      <div class="movements__value">${mov.toFixed(2)}€</div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', row);
  });
};

const calcDisplayBalance = function (account) {
  account.balance = account.movements.reduce((acc, cur) => acc + cur, 0);

  labelBalance.textContent = `${account.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (account) {
  const { movements, interestRate } = account;
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, cur) => acc + cur, 0);

  const out = movements
    .filter(mov => mov < 0)
    .reduce((acc, cur) => acc + cur, 0);

  const interest = movements
    .filter(mov => mov > 0)
    .map(dep => (dep * interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, cur) => acc + cur, 0);

  labelSumIn.textContent = `${incomes.toFixed(2)}€`;
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accounts) {
  accounts.forEach(account => {
    account.username = account.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

// Event Handlers
let currentAccount;
btnLogin.addEventListener('click', function (event) {
  // Prevent form from submitting
  event.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }!`;

    containerApp.style.opacity = 100;

    // Clear inputs fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (event) {
  event.preventDefault();
  const amount = +inputTransferAmount.value;
  const reciever = accounts.find(acc => acc.username === inputTransferTo.value);

  if (
    amount > 0 &&
    reciever &&
    currentAccount.balance >= amount &&
    reciever?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    reciever.movements.push(amount);
    updateUI(currentAccount);
  }
  inputTransferAmount.value = inputTransferTo.value = '';
});

btnLoan.addEventListener('click', function (event) {
  event.preventDefault();
  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }

  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (event) {
  event.preventDefault();
  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === +inputClosePin.value
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
    inputCloseUsername.value = inputClosePin.value = '';
  }
});

let sorted = false;
btnSort.addEventListener('click', function (event) {
  event.preventDefault();
  sorted = !sorted;
  displayMovements(currentAccount.movements, sorted);
});

labelBalance.addEventListener('click', function () {
  // Changes the colour of even rows
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    if (i % 2 === 0) row.style.backgroundColor = '#ddd';
  });
});
