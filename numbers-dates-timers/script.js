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

// Working with BigInt
console.clear();
console.log(2 ** 53 - 1); // The biggest number JS can safely represent
console.log(Number.MAX_SAFE_INTEGER);

// ES 2020 introduced BigInt
// Add n to the end of the number to convert it to BigInt
console.log(483843022483420438234083948394483204n);
console.log(BigInt(483843022483420438234083948394483204));

// Operations works the same
console.log(10000n + 10000n);

// You cannot mix BigInts with other types

// Creating Dates
console.clear();
// How to create dates
const now = new Date();
console.log(now);

// With strings
console.log(new Date('Sun Aug 02 2020 18:05:41'));
console.log(new Date('December 24, 2015'));
console.log(new Date('2021-11-18T21:30:00.178Z'));

// With year, month, day, hour, min, sec and etc values
console.log(new Date(2037, 10, 19, 15, 23, 5));
// JS will autocorrect dates that do not exist
console.log(new Date(2037, 10, 31)); // Dec 01

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

// Dates methods
const future = new Date(2037, 10, 19, 15, 23);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());

// Get current timestamp
console.log(Date.now());
