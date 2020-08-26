/*smallestDivisor.js
Write smallestDivisor function using iterative process. 
Your function should return the smallest prime divisor of num > 0.

The smallest divisor is always more than 1 (obviously) besides num = 1;
*/

const smallestDivisor = (num) => {
    if (num === 1) {
        return 1;
    }

    const iter = (i) => {
        if (i === num) {
            return num;
        }
        if (num % i === 0) {
            return i;
        }
        return iter(i + 1);
    };

    return iter(2);
};

console.log(smallestDivisor(1)); // 1 
console.log(smallestDivisor(3)); // 3 
console.log(smallestDivisor(4)); // 2 
console.log(smallestDivisor(8)); // 2 
console.log(smallestDivisor(9)); // 3 
console.log(smallestDivisor(17)); // 17
console.log(smallestDivisor(15)); // 3 
console.log(smallestDivisor(121)); // 11