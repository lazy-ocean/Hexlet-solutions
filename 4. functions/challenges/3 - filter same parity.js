/* sameParityFilter.js
Write and export by default sameParity() function that takes an array and returns the new one only with the items that are of the same parity as the first array element.
*/
const sameParity = (arr) => {
  return arr[0] % 2 === 0
    ? arr.filter((item) => item % 2 === 0)
    : arr.filter((item) => item % 2 !== 0);
};

export default sameParity;

//////// TESTS
console.log(sameParity([2, 0, 1, -3, 10, -2])); // [2, 0, 10, -2]
console.log(sameParity([])); // []
console.log(sameParity([-1, 0, 1, -3, 10, -2])); // [-1, 1, -3]
