'use strict';

// Constructor Functions and the 'new' operator
const Person = function (name, birthYear) {
  this.name = name;
  this.birthYear = birthYear;

  // Do not create a method inside a constructor function
  // 1000 objects = 1000 functions (bad performance)
  // Use prototype instead
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

// Prototypes
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

Person.prototype.species = 'Homo Sapiens';

paulo.calcAge();
matilda.calcAge();
jack.calcAge();

console.log(paulo.species, matilda.species, jack.species);
console.log(paulo.hasOwnProperty('name'));
console.log(paulo.hasOwnProperty('species')); // false

console.log(paulo.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(paulo));

// Prototypal Inheritance on Built-in Objects
const arr = [3, 6, 4, 5, 6, 9, 3, 9, 3, 3];
console.log(arr.__proto__);

// Not a good a practice to extend built-in prototypes
// - Next version might add a function with the same name
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

// DOM Elements
const h1 = document.querySelector('h1');
console.log(h1.__proto__);

// Functions
console.dir(x => x + 1);

console.clear();
// ES6 Classes
// Things to consider
// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode
class PersonES6 {
  constructor(name, birthYear) {
    // In the object itself
    this.name = name;
    this.birthYear = birthYear;
  }

  // In the Prototype
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.name}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  get fullName() {
    return this._name;
  }

  set fullName(name) {
    if (name.includes(' ')) this._name = name;
    else console.log(`${name} is not a full name`);
  }

  static hey() {
    console.log('Hey there!!');
    console.dir(this);
  }
}

const johnny = new PersonES6('Johnny', 1963);

console.log(johnny.age);
johnny.fullName = 'Johnny Davis';

const walter = new PersonES6('Walter', 1965);

// Setters and Getters
const account = {
  owner: 'Paulo',
  movements: [200, 530, 120, 300],
  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

// Don't call the method
console.log(account.latest);
account.latest = 400;

console.clear();
// Static Methods
// Methods that are executed from the constructor
// and not from an instance of a class
// Array.from works
// Array().from doesn't work
Person.hey = function () {
  console.log('Hey there!');
};

Person.hey();
PersonES6.hey();
// paulo.hey(); throws an error
