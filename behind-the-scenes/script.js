'use strict';

// Scope & the Scope Chain
function calcAge(birthYear) {
  const age = new Date().getFullYear() - birthYear;
  console.log(firstName);

  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `Oh, and you are a millennial, ${firstName}`;
      console.log(str);
    }
  }
  printAge();

  return age;
}

const firstName = 'Paulo';
calcAge(1989);

// Hoisting: Makes some types of variables accessible/usable in the code before
// they are actually declared. "Variables lifted to the top of their scope."
// Before execution, the code is scanned for variable declarations, and for
// each variable, a new property is called in the variable envrionment object

// With Variables
console.log(me); // undefined
// console.log(job); ReferenceError: Cannot access 'job' before initialization
// console.log(year); ReferenceError: Cannot access 'year' before initialization

var me = 'Paulo';
let job = 'dev';
const year = 1989;

// With functions
console.log(addDecl(2, 3)); // 5
// console.log(addExpr(2, 3)); ReferenceError: Cannot access 'addExpr' before initialization
// console.log(addArrow(2, 3)); ReferenceError: Cannot access 'addArrow' before initialization

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// Pitfall of hoisting
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}
