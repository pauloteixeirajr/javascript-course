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
