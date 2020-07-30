/* triangle.js
Write and export by default generate() function that will return one line from Pascal's triangle as an array.
The number of the line is taken as an argument.
*/
const factorial = (num) => {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};

const generate = (num) => {
  let result = [];
  for (let i = 0; i <= num; i++) {
    let item = factorial(num) / (factorial(i) * factorial(num - i));
    result.push(item);
  }
  return result;
};

export default generate;

console.log(generate(0)); // [1]
console.log(generate(1)); // [1, 1]
console.log(generate(2)); // [1, 2, 1]
console.log(generate(3)); // [1, 3, 3, 1]
console.log(generate(7)); // [1, 7, 21, 35, 35, 21, 7, 1]
