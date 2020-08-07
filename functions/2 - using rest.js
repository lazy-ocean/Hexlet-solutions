/* average.js
Write and export by default calculateAverage() function that returns the arithmetic mean of an unknown number of numbers.
If there're no argumented numbers, return null.
*/
var _ = require("lodash");

const average = (...numbers) => {
  if (!numbers.length) return null;
  return _.sum(numbers) / numbers.length;
};

////// TESTS
console.log(average(0)); // 0
console.log(average(0, 10)); // 5
console.log(average(-3, 4, 2, 10)); // 3.25
console.log(average()); // null
