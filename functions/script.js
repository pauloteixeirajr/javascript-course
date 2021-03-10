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
