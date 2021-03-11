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
