/* isContinuousSequence.js
Write and export by default isContinuousSequence() function that checks if the argumented sequence is unbroken.
10, 11, 12, 13 - true
10, 12, 13, 14 - false.

In case of empty array or only one number return false.
*/

const isContinuousSequence = (arr) => {
  if (arr.length < 2) return false;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] !== arr[i] + 1) return false;
  }
  return true;
};

export default isContinuousSequence;

console.log(isContinuousSequence([10, 11, 12, 13])); // true
console.log(isContinuousSequence([-5, -4, -3])); // true
console.log(isContinuousSequence([10, 11, 12, 14, 15])); // false
console.log(isContinuousSequence([1, 2, 2, 3])); // false
console.log(isContinuousSequence([7])); // false
console.log(isContinuousSequence([])); // false
