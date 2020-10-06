/* rotateLeft and rotateRight
Write and export rotateLeft() and rotateRight() functions that rotate matrix to the left and to the right.
You shouldn't change the initial matrix.
*/
export const rotateLeft = (arr) => {
  let result = [];
  let length = arr[0].length;
  for (let i = 1; i <= length; i++) {
    let stack = [];
    for (const item of arr) {
      stack = [...stack, item[item.length - i]];
    }
    result = [...result, stack];
  }
  return result;
};

export const rotateRight = (arr) => {
  let result = [];
  let length = arr[0].length;
  for (let i = 0; i < length; i++) {
    let stack = [];
    for (const item of arr) {
      stack = [...stack, item[i]];
    }
    result = [...result, stack.reverse()];
  }
  return result;
};

const matrix1 = [
  [1, 2, 3, 4, 5, 6],
  [7, 8, 9, 0, 1, 2],
  [3, 4, 5, 6, 7, 8],
  [9, 0, 1, 2, 3, 4],
];
console.log(rotateLeft(matrix1));
/*
    [
      [6, 2, 8, 4],
      [5, 1, 7, 3],
      [4, 0, 6, 2],
      [3, 9, 5, 1],
      [2, 8, 4, 0],
      [1, 7, 3, 9],
    ];
*/
console.log(rotateRight(matrix1));
/*
    [
      [9, 3, 7, 1],
      [0, 4, 8, 2],
      [1, 5, 9, 3],
      [2, 6, 0, 4],
      [3, 7, 1, 5],
      [4, 8, 2, 6],
    ];
*/

const matrix2 = [
  ["a", "b", "c", "d"],
  ["aa", "ab", "ac", "ad"],
  ["e", "f", "g", "h"],
];
console.log(rotateLeft(matrix2));
/*
    [
      ['d', 'ad', 'h'],
      ['c', 'ac', 'g'],
      ['b', 'ab', 'f'],
      ['a', 'aa', 'e'],
    ];
*/
console.log(rotateRight(matrix2));
/*
    [
      ['e', 'aa', 'a'],
      ['f', 'ab', 'b'],
      ['g', 'ac', 'c'],
      ['h', 'ad', 'd'],
    ];
*/

const matrix3 = [[1, 2, 3, 4, 5, 6]];
console.log(rotateLeft(matrix3)); // [[6], [5], [4], [3], [2], [1]]
console.log(rotateRight(matrix3)); // [[1], [2], [3], [4], [5], [6]];

const matrix4 = [[1], [2], [3], [4], [5], [6]];
console.log(rotateLeft(matrix4)); // [[1, 2, 3, 4, 5, 6]];
console.log(rotateRight(matrix4)); // [[6, 5, 4, 3, 2, 1]];
