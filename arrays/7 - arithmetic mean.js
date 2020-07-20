/* calculateAverage.js
Write and export by default calculateAverage() function that returns the arithmetic mean of array items.
If array is empty, return null.
*/

const calculateAverage = (arr) => {
    if (arr.length === 0) return null;
    let sum = 0;
    for (const item of arr) {
        sum += item;
    }
    return sum / arr.length;
};

export default calculateAverage;


const temperatures1 = [37.5, 34, 39.3, 40, 38.7, 41.5];
console.log(calculateAverage(temperatures1)); // 38.5;
const temperatures2 = [36, 37.4, 39, 41, 36.6];
console.log(calculateAverage(temperatures2)); // 38;
const temperatures3 = [];
console.log(calculateAverage(temperatures3)); // null;