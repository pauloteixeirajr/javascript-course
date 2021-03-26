'use strict';

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

// spendingLimits.jay = 200; // throws an exception

const getLimit = user => spendingLimits[user] ?? 0;

// Pure function
const addExpense = function (state, value, description, user = 'jonas') {
  const clearUser = user.toLowerCase();

  return value <= getLimit(clearUser)
    ? [...state, { value: -value, description, user: clearUser }]
    : state;
};

const budget1 = addExpense(budget, 10, 'Pizza 🍕');
const budget2 = addExpense(budget1, 100, 'Going to movies 🍿', 'Matilda');
const budget3 = addExpense(budget2, 200, 'Stuff', 'Jay');

console.log(budget, budget1, budget2, budget3);

const checkExpenses = state =>
  state.map(entry =>
    entry.value < -getLimit(entry.user) ? { ...entry, flag: 'limit' } : entry
  );

const finalBudget = checkExpenses(budget3);

console.log(finalBudget);

const logBigExpenses = function (bigLimit, state) {
  const bigExpenses = state
    .filter(entry => entry.value <= -bigLimit)
    .map(entry => entry.description.slice(-2))
    .join(' / ');
  console.log(bigExpenses);
};

logBigExpenses(500, finalBudget);
