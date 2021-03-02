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
};

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
