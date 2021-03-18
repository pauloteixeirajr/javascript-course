'use strict';

// Constructor Functions and the 'new' operator
const Person = function (name, birthYear) {
  this.name = name;
  this.birthYear = birthYear;

  // Do not create a method inside a constructor function
  // 1000 objects = 1000 functions (bad performance)
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const paulo = new Person('Paulo', 1989);
console.log(paulo);

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda);
console.log(jack);

console.log(paulo instanceof Person); // true
