/* buildSnailPath.js
Given an n x n array, return the array with elements arranged from outermost elements to the middle element, traveling clockwise.
array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]

Use lodash if necessary.
*/
var _ = require("lodash");

let reverse = (tail) => _.zip(...tail).reverse();
const buildSnailPath = (arr) => {
  if (!arr.length) return [];
  let [head, ...tail] = arr;
  let result = [head];
  while (tail.length) {
    arr = reverse(tail);
    [head, ...tail] = arr;
    result.push(head);
  }

  return result.flat();
};

export default buildSnailPath;

const matrix1 = [
  [1, 2],
  [3, 4],
];
console.log(buildSnailPath(matrix1)); // [1, 2, 4, 3];

const matrix2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
console.log(buildSnailPath(matrix2)); // [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7];

const matrix3 = [
  [undefined, "", null],
  [true, false, "foo"],
  [[], {}, { key: "bar" }],
];
console.log(buildSnailPath(matrix3)); // [undefined, '', null, 'foo', { key: 'bar' }, {}, [], true, false];

const matrix4 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
console.log(buildSnailPath(matrix4)); // [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10];

console.log(buildSnailPath([])); // []
console.log(buildSnailPath([[]])); // []
console.log(buildSnailPath([[0]])); // [0]
console.log(buildSnailPath([[1, 2, 3, 4]])); // [1, 2, 3, 4]
console.log(buildSnailPath([[1], [2], [3], [4]])); // [1, 2, 3, 4]
