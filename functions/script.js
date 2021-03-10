'use strict';

// Default parameters
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  bookings.push(booking);
  console.log(booking);
};

createBooking('LH123');
createBooking('LH123', 3, 800);
createBooking('LH123', 4);
createBooking('LH123', undefined, 1000);

// How passing arguments works: Value vs Reference
const flightNumber = 'LH234';
const passenger = {
  name: 'Paulo T',
  passport: 12345678910,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 12345678910) {
    console.log('Check in');
  } else {
    console.log('Wrong passport!');
  }
};

checkIn(flightNumber, passenger);
console.log(flightNumber); // is still LH234
console.log(passenger); // Name has changed

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};

newPassport(passenger);
checkIn(flightNumber, passenger);

// Functions accepting callback functions
console.clear();
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
  console.log('');
};

transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);

// Functions returning functions
console.clear();

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

const hey = greet('Hey');
hey('Paulo');
hey('Steven');

greet('Hello')('John');
greetArrow('Hi')('Robert');

// The call and apply methods
console.clear();

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],

  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({
      flight: this.iataCode + flightNum,
      name,
    });
  },
};

lufthansa.book(239, 'Paulo');
lufthansa.book(635, 'John');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// book(23, 'Sarah'); Does not work
// Call Method
// Manually set the this keyword, all the arguments after
// are the original arguments expected by the function
book.call(eurowings, 23, 'Sarah');
book.call(lufthansa, 239, 'Mary');

const swiss = {
  airline: 'Swiss Airlines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary');

// Apply Method
// Similar to call, but it doesn't receieve the arguments
// instead it receives one array with all the arguments
book.apply(swiss, [583, 'George']);
book.apply(eurowings, [123, 'Jonas']);

// The bind method
// The bind method does not immediately execute the function
// Instead it returns a function where the 'this' keyword is bound
const bookEW = book.bind(eurowings);
bookEW(890, 'Steven');

const bookLH = book.bind(lufthansa);
bookLH(980, 'Johnny');

const bookLX = book.bind(swiss);
bookLX(789, 'William');

// You can also bind arguments
const bookEW23 = book.bind(eurowings, 23);
// So we only need to pass the name
bookEW23('David');

// Binding with Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application (preset params)
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// Set the rate param to 0.23, so you can only pass the value
const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(500));
console.log(addVAT(23));

// Immediately invoked function expressions (IIFE)
// Used for data encapsulation & hide variables within
// the IIFE scopes, it is not a feature, but a pattern
console.clear();

(function () {
  console.log('This will never run again! Unless you refresh the page');
})();

(() => console.log('This will also never run again'))();

// You can also use const and let inside blocks
{
  const isPrivate = 23;
}

// console.log(isPrivate); // Throws an error

// Closures
// Closures are not a feature explicitly used
// It happens automatically in some situations
// - A clousre is the closed-over variable environment of the execution context
// in which a function was created, even after that execution context is gone.
// - A closure gives a function access to all the variables of its parent function,
// even after that parent function has returned. The function keeps a reference to its outer scope,
// which preserves the scope chain throughout time.
// - A clousre makes sure that a function doesn't lose connection to variables that existed
// at the function's birth place.
// - A closure is like a backpack that a function carries around wherever it goes.
// This backpack has all the variables that were present in the envinronment where
// the function was created.
console.clear();

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
// The booker function can access the variable environment of
// the execution context in which it was created, making it possible
// to increment the variable, that is no longer in the call stack.
booker(); // 1 passengers
booker(); // 2 passengers
booker(); // 3 passengers

// You can see the Closure in a function using console.dir()
console.dir(booker);
// anonymous()
// arguments: (...)
// caller: (...)
// length: 0
// name: ""
// prototype: {constructor: ƒ}
// __proto__: ƒ ()
// [[FunctionLocation]]: script.js:217
// [[Scopes]]: Scopes[3]
// 0: Closure (secureBooking)
// passengerCount: 3
// 1: Script { ...

// More Closure Examples
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
// f will still use the 'a' variable;
f(); // 46

h();
// f will still use the 'b' variable;
f(); // 1554

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds.`);
};

boardPassengers(180, 3);
