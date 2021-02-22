/**
 * Debugging with the Console and Breakpoints
 */

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: +prompt('Degrees celsius:'),
  };

  const kelvin = measurement.value + 273;

  return kelvin;
};

// A) Identify the bug
console.log(measureKelvin());
