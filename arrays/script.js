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

// The findIndex method
// Similar to find, but it returns the element index and not the element itself
console.clear();
const firstWithdrawalIndex = movements.findIndex(mov => mov < 0);
console.log(firstWithdrawalIndex); // 2

// The some method
// Similar to includes method, but it allows you check for a condition instead of equality
// Checks if any elements in the array match the criteria in the callback function
console.clear();
const anyDeposits = movements.some(mov => mov > 100);
console.log(anyDeposits); // true

// The every method
// Only returns true if ALL elements in the array satisfy the condition we pass in
console.log(movements.every(mov => mov > 0)); // false
console.log([430, 1000, 700, 50, 90].every(mov => mov > 0)); // true
