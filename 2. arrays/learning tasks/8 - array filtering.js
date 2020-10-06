/* getSameParity.js
Write and export by default getSameParity() function that takes an array and returns the new one that contains only the items which are odd or even like the first array element.
*/

/////// METHOD ONE ///////
const getSameParity = (arr) => {
    if (arr.length === 0) return [];
    const result = [];
    const r = Math.abs(arr[0] % 2);

    for (const item of arr) {
        if (Math.abs(item % 2) === r) result.push(item);
    }

    return result;
};

export default getSameParity;

/////// METHOD TWO ///////
const getSameParity = (arr) => {
    if (arr.length === 0) return [];
    let result = [];

    for (const item of arr) {
        if (arr[0] % 2 === 0) {
            if (item % 2 === 0) result.push(item);
        }
        if (arr[0] % 2 !== 0) {
            if (item % 2 !== 0) result.push(item);
        }
    }

    return result;
};

export default getSameParity;

console.log(getSameParity([])); // []
console.log(getSameParity([1, 2, 3])); // [1, 3]
console.log(getSameParity([1, 2, 8])); // [1]
console.log(getSameParity([2, 2, 8])); // [2, 2, 8]
console.log(getSameParity([1, 2, -3])); // [1, -3]
console.log(getSameParity([-3, 2, 1])); // [-3, 1]