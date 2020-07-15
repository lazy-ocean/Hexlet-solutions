/* isPowerOfThree.js

Write and export by default isPowerOfThree() function that checks if the argumented number the power of 3.
So,
3^1 = 3
3^2 = 9
3^3 = 27 ...
*/

const isPowerOfThree = (num) => {
    if (num < 1) return false;
    if (num === 1) return true;
    return isPowerOfThree(num / 3);
};

export default isPowerOfThree;

console.log(isPowerOfThree(1)); // true
console.log(isPowerOfThree(3)); // true
console.log(isPowerOfThree(9)); // true
console.log(isPowerOfThree(27)); // true
console.log(isPowerOfThree(81)); // true
console.log(isPowerOfThree(243)); // true
console.log(isPowerOfThree(0)); // false
console.log(isPowerOfThree(2)); // false
console.log(isPowerOfThree(12)); // false
console.log(isPowerOfThree(16)); // false
console.log(isPowerOfThree(28)); // false
console.log(isPowerOfThree(90)); // false