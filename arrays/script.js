'use strict';
// Simple array methods
let arr = ['a', 'b', 'c', 'd', 'e'];

// Slice method
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-1));
// Shallow copy
console.log(arr.slice());

// Splice method (similar to slice, but it mutates the original array)
// The second parameter is the deleteCount
// Starting at position X delete Y elements
console.log(arr.splice(1, 2));
console.log(arr);

// Reverse method (it mutates the original array)
arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.reverse());
console.log(arr.reverse());

// Concat method
const arr2 = ['f', 'g', 'h', 'j'];
const letters = arr.concat(arr2);
console.log(letters);
// You can also use modern syntax
console.log([...arr, ...arr2]);

// Join method
console.log(letters.join(' - '));

// Looping arrays: forEach
console.clear();

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// movement is the current item in the array
// index is the current index being iterated
// array is the whole array being iterated
movements.forEach(function (movement, index, array) {
  let activity = '';
  if (movement > 0) activity = 'deposited';
  else activity = 'withdrew';

  console.log(`Mov ${index + 1}: You ${activity} ${Math.abs(movement)}`);
});

// forEach with Maps and Sets
console.clear();
// Maps
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Sets
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

currenciesUnique.forEach(function (value, key, set) {
  // Key is equal the value
  // set doens't have keys or indexes
  console.log(`${key}: ${value}`);
});

// The map Method
// It generates a brand new array with the logic applied in the callback function
console.clear();
const eurToUsd = 1.1;
const movementsUsd = movements.map(function (mov) {
  return mov * eurToUsd;
});
const movementsUsdArr = movements.map(mov => mov * eurToUsd);
console.log(movementsUsd, movementsUsdArr);

// The filter method
// It generates a brand new array with the logic applied in the callback function
console.clear();
const deposits = movements.filter(function (mov) {
  // Needs to return a boolean value (or a value that will be coerced to Boolean)
  return mov > 0;
});
console.log(deposits);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

// The reduce method
// Reduces the values in an array to one single value
console.clear();
// accumulator -> holds the values computed (snowball)
const balance = movements.reduce(function (acc, cur, i, arr) {
  // Iteration 0: 0
  // Iteration 1: 200
  // Iteration 2: 650
  // Iteration 3: 250
  // Iteration 4: 3250
  // Iteration 5: 2600
  // Iteration 6: 2470
  // Iteration 7: 2540
  // Total 3840
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0 /** initial value */);
console.log(balance);

// The magic of chaining methods
// You can only chain methods that return an array
console.clear();

// Pipeline
const chainedMov = movements
  .filter(mov => mov > 0)
  // .map(mov => mov * eurToUsd)
  .map((mov, i, arr) => {
    // arr != movements, since filter returns a new array
    console.log(arr, arr.length);
    return mov * eurToUsd;
  })
  .reduce((acc, cur) => acc + cur, 0);

console.log(chainedMov);

// The find method
// Retrieves one element from an array based on a condition
console.clear();
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal); // -400

// PROJECT: "Bankist" App
// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, idx) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const row = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">
        ${idx + 1} ${type}
      </div>
      <div class="movements__value">${mov}€</div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', row);
  });
};

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, cur) => acc + cur, 0);

  labelBalance.textContent = `${balance}€`;
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

  labelSumIn.textContent = `${incomes}€`;
  labelSumOut.textContent = `${Math.abs(out)}€`;
  labelSumInterest.textContent = `${interest}€`;
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

    // Display movements
    displayMovements(currentAccount.movements);

    // Display balance
    calcDisplayBalance(currentAccount.movements);

    // Display summary
    calcDisplaySummary(currentAccount);
  }
});
