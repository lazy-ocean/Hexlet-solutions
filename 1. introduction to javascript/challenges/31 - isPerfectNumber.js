/* isPerfect.js
Write isPerfect() function that takes a number as an argument and returns if its perfect.

Perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself. For instance, 6 has divisors 1, 2 and 3 (excluding itself), and 1 + 2 + 3 = 6, so 6 is a perfect number.

Others are:
6, 28, 496, 8128...
*/

const isPerfect = (num) => {
    if (num <= 1) return false;
    let acc = 0,
        i = 1;

    while (i <= num / 2) {
        if (num % i === 0) {
            acc += i;
        }
        i++;
    }
    return acc === num;
};

console.log(isPerfect(6)); // true
console.log(isPerfect(28)); // true
console.log(isPerfect(496)); // true
console.log(isPerfect(8128)); // true
console.log(isPerfect(-6)); // false
console.log(isPerfect(-28)); // false
console.log(isPerfect(44)); // false
console.log(isPerfect(0)); // false
console.log(isPerfect(10)); // false
console.log(isPerfect(44)); // false