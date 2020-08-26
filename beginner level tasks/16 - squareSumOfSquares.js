/*squares.js
-- Write square() function that returns the square of a number;
-- Write sumOfSquares() function that returns a sum of the squares of two numbers;
-- Write squareSumOfSquares() function that returns a square of the sum of the squares of two numbers.
*/

const square = (a) => a * a;
const sumOfSquares = (c, d) => square(c) + square(d);
const squareSumOfSquares = (e, f) => sumOfSquares(e, f) ** 2;

console.log(square(10)); // 100
console.log(square(20)); // 400
console.log(sumOfSquares(3, 7)); // 58
console.log(sumOfSquares(10, -9)); // 181
console.log(squareSumOfSquares(0, 0)); // 0
console.log(squareSumOfSquares(1, 1)); // 4
console.log(squareSumOfSquares(-3, 7)); // 3364