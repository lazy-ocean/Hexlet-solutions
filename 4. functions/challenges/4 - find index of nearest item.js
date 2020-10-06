/* findIndexOfNearest.js
Write and export by default findIndexOfNearest() function that takes an array and a number. The function should find the nearest item to the argumented number and return its index.
If there're several items of the same closeness, return the index of the first such one.
*/
//////// OPTION 1
const findIndexOfNearest = (arr, num) => {
  if (!arr.length) return null;
  const min = arr.reduce(
    (acc, item) => (Math.abs(item - num) < Math.abs(acc - num) ? item : acc),
    arr[0]
  );
  return arr.indexOf(min);
};

export default findIndexOfNearest;

//////// OPTION 2
const findIndexOfNearest = (arr, num) => {
  if (!arr.length) return null;
  let diff = arr.map((item) => Math.abs(item - num));
  let min = diff.reduce((acc, item) => (item < acc ? item : acc), diff[0]);
  return diff.indexOf(min);
};

//////// TESTS
console.log(findIndexOfNearest([], 2)); // null
console.log(findIndexOfNearest([10], 0)); // 0
console.log(findIndexOfNearest([10, 15], 0)); // 0
console.log(findIndexOfNearest([15, 10], 0)); // 1
console.log(findIndexOfNearest([15, 10], 12)); // 1
console.log(findIndexOfNearest([15, 10, 3, 4], 0)); // 2
console.log(findIndexOfNearest([7, 5, 3, 2], 4)); // 1
console.log(findIndexOfNearest([7, 5, 4, 4, 3, 6], 4)); // 2
