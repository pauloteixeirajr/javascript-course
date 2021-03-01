'use strict';

// Scope & the Scope Chain
function calcAge(birthYear) {
  const age = new Date().getFullYear() - birthYear;
  console.log(firstName);

  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `Oh, and you are a millennial, ${firstName}`;
      console.log(str);
    }
  }
  printAge();

  return age;
}

const firstName = 'Paulo';
calcAge(1989);
