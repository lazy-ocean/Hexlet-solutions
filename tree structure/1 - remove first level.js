/* removeFirstLevel.js
Write and export by default removeFirstLevel() function that takes a tree and returns a new one only with children.
*/
const removeFirstLevel = (arr) =>
  arr.filter((item) => Array.isArray(item)).flat();
export default removeFirstLevel;

/////// TESTS
const tree1 = [[5], 1, [3, 4]];
console.log(removeFirstLevel(tree1)); // [5, 3, 4]

const tree2 = [1, 2, [3, 5], [[4, 3], 2]];
console.log(removeFirstLevel(tree2)); // [3, 5, [4, 3], 2]

const tree3 = [];
console.log(removeFirstLevel(tree3)); // []

const tree4 = [1, 100, 3];
console.log(removeFirstLevel(tree4)); // []

const tree5 = [[1, [3, 2]], 2, { a: 1 }, [3, 5], 2];
console.log(removeFirstLevel(tree5)); // [1, [3, 2], 3, 5]
