'use strict';

// Lectures
// All numbers are always floating points in Javascript
console.log(23 === 23.0); // true

// Base 10 - 0 to 9
// Binary base 2 - 01
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false

// Converting string to numbers
console.log(Number('23'));
console.log(+'23');

// Parse number from a string
console.log(Number.parseInt('30px')); // 30
console.log(Number.parseFloat('30.5px')); // 30.5
// Radix = 10 or 2 depending on what you are working with
console.log(Number.parseInt('50px', 10 /* radix */));

// You can also call them globally
// Not recommended anymore, as the Number object
// provides a namespace
console.log(parseInt('1560 dogs')); // 1560

// Checking if a value is NaN
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN('20')); // false
console.log(Number.isNaN(+'20px')); // true
console.log(Number.isNaN(23 / 0)); // false (Infinity)

// Checking if a number is finite & a real number
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite('20')); // false
console.log(Number.isFinite(+'20px')); // false
console.log(Number.isFinite(23 / 0)); // false

// Checking if a number is an integer
console.log(Number.isInteger(23)); // true
console.log(Number.isInteger(23.0)); // true
console.log(Number.isInteger(23 / 0)); // false
