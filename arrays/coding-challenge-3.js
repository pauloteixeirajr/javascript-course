///////////////////////////////////////
// Coding Challenge #3

/**
 * Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an
 * arrow function, and using chaining!
 *
 * TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
 * TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
 * GOOD LUCK 😀
 */

const calcAverageHumanAge = ages => {
  const avg = ages
    .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, _, arr) => acc + age / arr.length, 0);

  console.log(avg);
  return avg;
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]); // 44
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]); // 47.33333
