/*sumSquareDifference.js
A sum of squares of the first 10 integers is 1^2 + 2^2 + 3^3 + ... + 10^2 = 385.

A square of sum of the first 10 integers is (1 + 2 + 3 + ... + 10)^2 = 55^2 = 3025.

The difference between the square of the sum and the sum of the squares of the first ten natural numbers is 3025 - 385 = 2640.

Write sumSquareDifference() that takes n as an argument and returns the difference between the square of the sum and the sum of squares of the first n integers.
*/

const sumOfSquares = (n) => {
    let result = 0;
    for (let i = 0; i <= n; i++) {
        result += i ** 2;
    }
    return result;
};

const squareOfSum = (n) => {
    let result = 0;
    for (let i = 0; i <= n; i++) {
        result += i;
    }
    return result ** 2;
};

const sumSquareDifference = (n) => squareOfSum(n) - sumOfSquares(n);

console.log(sumSquareDifference(10)); // 2640
console.log(sumSquareDifference(1)); // 0
console.log(sumSquareDifference(5)); // 170
console.log(sumSquareDifference(10)); // 2640
console.log(sumSquareDifference(42)); // 789824