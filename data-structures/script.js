'use strict';

const restaurants = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time, address }) {
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

// Nullish Coalescing Operator ??
// Checks for nullish (null, undefined) values instead of nullish values
restaurants.numGuests = 0;
const newGuests = restaurants.numGuests ?? 10;
console.log(newGuests);

console.log('\n\n');

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

console.log('\n\n');
// Looping Arrays: The for-of loop
const menuArr = [...restaurants.starterMenu, ...restaurants.mainMenu];

for (const item of menuArr) console.log(item);

// Using the index with the for-of loop
for (const item of menuArr.entries()) {
  const [index, entry] = item;
  console.log(`${index + 1}: ${entry}`);
}

console.log('\n\n');

// Enhanced Object Literals

const thu = {
  open: 12,
  close: 22,
};
const newWeekdays = ['mon', 'tue', 'wed'];
const newOpeningHours = {
  thu, // variable and property name have the same name, so you can omit the assignment (thu: thu)
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0,
    close: 24,
  },

  // You can declare functions without a property name inside objects
  printHours() {
    console.log(this.thu.open);
    console.log(this.thu.close);
  },

  // You can compute property names, instead of manually entering them
  // Adds a property 'tue' to the object
  [newWeekdays[1]]: {
    open: 11,
    close: 23,
  },
};

console.log(newOpeningHours);
newOpeningHours.printHours();

console.log('\n\n');

// Optional chaining
console.log(restaurants.openingHours.mon); // yields undefined
//console.log(restaurants.openingHours.mon.open); // throws an error

console.log(restaurants.openingHours.mon?.open);
console.log(newOpeningHours?.printClosingTime?.());
newOpeningHours.printHours?.();

for (const day of newWeekdays) {
  const open = newOpeningHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Looping Objects: Object keys, values and entries
// Clearing the console to make it easier to read
console.clear();

// Looping over property names
for (const day of Object.keys(openingHours)) {
  console.log(day); // thu, fri, sat
}

// Looping over property values
for (const value of Object.values(openingHours)) {
  console.log(value);
}

// Looping over the entries (keys and values)
for (const [key, { open, close }] of Object.entries(openingHours)) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

// Sets (collection of unique values)
console.clear();

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet); // Set(3) {"Pasta", "Pizza", "Risotto"}

// Strings are also iterables
console.log(new Set('paulo')); // Set(5) {"p", "a", "u", "l", "o"}

// Print the size of Set
console.log(ordersSet.size); // 3

// Check if an element is in a Set
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));

// Add new items to a Set
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet);

// Remove elements from a Set
ordersSet.delete('Risotto');

// Clear the Set
// ordersSet.clear();

// Looping through a Set
for (const order of ordersSet) console.log(order);

// Convert set to array and vice versa
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

// Maps (Data structure that we can map values to keys)
// The big difference between maps and objects
// is that in Maps, keys can have any type
console.clear();

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');

// You can chain set methods
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest);

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// Check if value is in Map
console.log(rest.has('categories'));

// Delete value from Map
rest.delete(2);

console.log(rest);

// Check the size of map
console.log(rest.size);

// Clear the Map
// rest.clear();

// We can also use arrays or objects as map keys
// but you must reference the same instance of
// the same array or same object in the heap
const oneTwo = [1, 2];
rest.set(oneTwo, 'Test');
console.log(rest.get(oneTwo));

rest.set(document.querySelector('h1'), 'Heading');

// Populating map without using the set method
const questions = new Map([
  ['question', 'What is the best programming language in the world'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Try again'],
]);

console.log(questions);

// Converting objects to maps
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Iteration with Maps
console.log(questions.get('question'));
for (const [key, value] of questions) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const answer = 3; // +prompt('Your answer');
console.log(answer);
console.log(questions.get(answer === questions.get('correct')));

// Converting map back to array
console.log([...questions]);
