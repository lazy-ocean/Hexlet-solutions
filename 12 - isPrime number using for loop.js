/*
isPrime.js
Write an isPrime function for checking if a number is a prime number. Return true if num is a prime number and false otherwise.

1 is not a prime number so it returns false.
*/

const isPrime = (num) => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
};
//false:
console.log(isPrime(-3)); // false
console.log(isPrime(0)); // false
console.log(isPrime(-1)); // false
console.log(isPrime(1)); // false
console.log(isPrime(4)); // false
console.log(isPrime(21)); // false
console.log(isPrime(35)); // false
console.log(isPrime(-10)); // false

//true:
console.log(isPrime(2)); // true
console.log(isPrime(3)); // true
console.log(isPrime(17)); // true