/* calculateSum.js
Write and export by default calculateSum() function that sums all array items that are divided by 3 with no reminder.

In case of an empty array return null.
*/

const calculateSum = (arr) => {
    if (arr.length === 0) return null;
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0) result += arr[i];
    }
    return result;
};

export default calculateSum;

const coll1 = [8, 9, 21, 19, 18, 22, 7];
console.log(calculateSum(coll1)); // 48

const coll2 = [];
console.log(calculateSum(coll2)); // 27

const coll3 = [2, 17, 4, 10, 16, 14, 1];
console.log(calculateSum(coll3)); // 0