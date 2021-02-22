////////////////////////////////////////////
// Coding Challenge #1

/**
 * Given an array of forecasted maximum temperatures,
 * the thermometer displays a string with these temperatures.
 *
 * Example: [17, 21, 23] will print:
 * "... 17C in 1 days ... 21C in 2 days ... 23C in 3 days ..."
 *
 * Create a function 'printForecast' which takes in an array 'arr'
 * and logs a string like the above to the console.
 *
 * Use the problem-solving framework! Understand the problem and,
 * break it up into sub-problems!
 *
 * Test data 1: [17, 21, 23]
 * Test data 2: [12, 5, -5, 0, 4]
 */
const test1 = [17, 21, 23];
const test2 = [12, 5, -5, 0, 4];

// My solution
// 1) Understanding the problem
// How to append values to an existing string
// How to get number of days (use the index + 1, as index is zero-based)

// 2) Breaking up into sub-problems
// - Create the result variable with an empty string
// - On each iteration, append "... Temp C in index + 1 days ..."
const printForecast = function (temps) {
  let result = '';

  for (let i = 0; i < temps.length; i++) {
    result += `... ${temps[i]}C in ${i + 1} days ... `;
  }

  return result;
};

const str1 = printForecast(test1);
const str2 = printForecast(test2);
console.log(str1);
console.log(str2);

// Teacher's solution
// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days? index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with C
// - Strings needs to contain day (index + 1)
// Add ... between elements and start and end of string

const printForecastNew = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str = str + `... ${arr[i]}C in ${i + 1} days ... `;
  }
  console.log(str);
};

printForecastNew(test1);
printForecastNew(test2);
