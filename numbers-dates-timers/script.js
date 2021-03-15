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

// Math and Rounding
console.clear();
// Square Root
console.log(Math.sqrt(25)); // 5
// You can also use exponential to calc sqrt
console.log(25 ** (1 / 2)); // 5
console.log(8 ** (1 / 3)); // 2

// Getting the maximum & minimum values
console.log(Math.max(5, 15, 23, 11, 2));
console.log(Math.max(5, 15, '23', 11, 2));

console.log(Math.min(5, 15, 23, 11, 2));
console.log(Math.min(5, 15, '23', 11, 2));

// Constants in the Math object
console.log(Math.PI);
// Calculating area of a circle
console.log(Math.PI * Number.parseFloat('10px') ** 2);

// Random function
console.log(Math.random());
console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
console.log(randomInt(10, 20));

// Rounding Integers
// Removes decimals
console.log(Math.trunc(23.3)); // 23

// Rounds to the nearest integer
console.log(Math.round(23.9)); // 24
console.log(Math.ceil(23.9)); // 24

// Floors to the nearest integer
console.log(Math.floor(23.9)); // 23

// Negative numbers
console.log(Math.trunc(-23.3)); // -23
console.log(Math.floor(-23.3)); // -24

// Rounding decimals (toFixed returns a string)
console.log((2.7).toFixed(0)); // 3
console.log((2.7).toFixed(1)); // 2.7
console.log((2.7).toFixed(2)); // 2.70
console.log((2.7).toFixed(3)); // 2.700

// The Remainder Operator
// It returns the remainder of a division
console.clear();

console.log(5 % 2); // 1
console.log(8 % 3); // 2
console.log(4 % 2); // 0

// Checking if numbers are even or odds with the remainder operator
const isEven = n => n % 2 === 0;

console.log(isEven(1)); // false
console.log(isEven(2)); // true
console.log(isEven(3)); // false
console.log(isEven(4)); // true
console.log(isEven(5)); // false
console.log(isEven(6)); // true
