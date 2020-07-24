/* getMax.js
Write and export getMax() function that returns max value of the array.
Use destructuring and rest parameter.
*/

export const getMax = (arr) => {
    if (!arr.length) return null;
    let [max, ...rest] = arr;
    for (const item of rest) {
        if (item > max) max = item;
    }
    return max;
};

console.log(getMax([])); // null
console.log(getMax([1, 10, 8])); // 10
console.log(getMax([11, -3, 8, 1])); // 11