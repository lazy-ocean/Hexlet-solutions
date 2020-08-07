/* sayPrimeOrNot.js
Write an sayPrimeOrNot() function for checking if a number is a prime number. Return 'yes' if num is a prime number and 'no' otherwise.

1 is not a prime number so it returns 'no'.
For the purpose of this task, write two functions: one, pure, for checking if the number is prime or not, and the other one, with side effects, writing the result on the screen.
*/

const isPrime = (num) => {
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const sayPrimeOrNot = (num) =>
  isPrime(num) ? console.log("yes") : console.log("no");

export default sayPrimeOrNot;

///////// TESTS
// 'yes'

console.log(sayPrimeOrNot(2));
console.log(sayPrimeOrNot(3));
console.log(sayPrimeOrNot(13));

// 'no'
console.log(sayPrimeOrNot(8));
console.log(sayPrimeOrNot(4));
console.log(sayPrimeOrNot(1));
console.log(sayPrimeOrNot(0));
console.log(sayPrimeOrNot(-3));
console.log(sayPrimeOrNot(9));
