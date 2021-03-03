'use strict';

const restaurants = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time, address }) {
    console.log('Order Delivery:');
    console.log(this.starterMenu[starterIndex]);
    console.log(this.mainMenu[mainIndex]);
    console.log(`Deliver at ${time} on ${address}`);
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// Short Circuiting (&& and ||)
console.log(3 || 'string'); // 3
console.log('' || 'string'); // string
console.log(true || 0); // true
console.log(undefined || null); // null

// Easier to assign default values
const guests = restaurants.numGuests || 10;
console.log(guests);

console.log(0 && 'string'); // 0
console.log(7 && 'string'); // string

// Easier to check if property exists in objects
restaurants.order && restaurants.order(1, 2);

console.log('\n\n');
// Rest Pattern & Parameters
// Rest pack values into an array
// NOTE: Spread operator is on the RIGHT side of =
// Rest is on the LEFT side of =
const [one, two, ...others] = [1, 2, 3, 4, 5];
console.log(one, two, others); // Results in 1, 2, [3, 4, 5]

// More examples
const [pizza, , risotto, ...otherFood] = [
  ...restaurants.mainMenu,
  ...restaurants.starterMenu,
];
console.log(pizza, risotto, otherFood);

// It also works with objects
const { sat, ...weekdays } = restaurants.openingHours;
console.log(sat, weekdays);

// Functions Examples
const add = function (...numbers) {
  let sum = 0;
  numbers.forEach((number) => (sum += number));
  console.log(sum);
};

add(2, 3, 4, 5);

console.log('\n\n');
// Spread Operator
// Creating new arrays
const spreadArr = [7, 8, 9];
const newSpreadArr = [5, 6, ...spreadArr];
// Logs whole array
console.log(newSpreadArr);

// Values are logged individually
console.log(...newSpreadArr);

// This creates a new array and does not modify the existing one
// Does not assign new variables
const newMenu = [...restaurants.mainMenu, 'Gnocci'];
console.log(newMenu);

// Create shallow copies of array
const mainMenuCopy = [...restaurants.mainMenu];
console.log(mainMenuCopy);

// Merging Arrays
const fullMenu = [...restaurants.starterMenu, ...restaurants.mainMenu];
console.log(fullMenu);

// Spread operator works on any iterables
// Iterables are arrays, strings, maps sets
// That means we can use spread on strings as well
const myName = 'Paulo';
const letters = [...myName, ' ', 'T.'];
console.log(letters);

// Using spread operator to pass arguments to a function
const ingredients = ['mushrooms', 'aspargus', 'cheese'];
function orderPasta(ing1, ing2, ing3) {
  console.log(ing1, ing2, ing3);
}

orderPasta(...ingredients);

// Spread operator with object (ES2018)
const newRestaurant = { ...restaurants, founder: 'Giuseppe', foundedIn: 1989 };
console.log(newRestaurant);

console.log('\n\n');
// Destructuring Objects
const { name, categories, openingHours } = restaurants;
console.log(name, categories, openingHours);

// Changing const names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurants;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurants;
console.log(menu, starters);

// Mutating variables
let d = 111;
let e = 999;
const obj = { d: 23, e: 7, f: 14 };
// Enclose the code in parenthesis to avoid
// SyntaxError: Unxpected token '='
({ d, e } = obj);
console.log(d, e); // Now outputs 23, 7

// Nested objects destructuring
const {
  thu: { open: thuOpen, close: thuClose },
  fri: { open: friOpen, close: friClose },
  sat: { open: satOpen, close: satClose },
} = openingHours;
console.log(thuOpen, thuClose, friOpen, friClose, satOpen, satClose);

// You can pass it an object as an argument and destructure it in the function declaration
// See line 12 to understand how the values are being passed into the function.
restaurants.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 3,
});

console.log('\n\n');
// Destructuring Arrays
// Conventional way of retrieving elements in an array
// and assigning it to a variable
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// Destructuring Arrays (Unpacking)
const [x, y, z] = arr;
console.log(x, y, z);

// If you need to skip elements, you can leave it blank
// Then no variables will be assigned to the value

let [main, , secondary] = restaurants.categories;
console.log(main, secondary); // main = Italian, secondary = Vegetarian

// You can even use destructuring to switch values extracted
[main, secondary] = [secondary, main];
console.log(main, secondary);

// You can use it to receive 2 (or more) return values from a function
const [starter, mainCourse] = restaurants.order(2, 0);
console.log(starter, mainCourse);

// Destructuring nested arrays
const nestedArr = [2, 4, [5, 6]];
const [i, , [j, k]] = nestedArr;
console.log(i, j, k);

// Setting default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
