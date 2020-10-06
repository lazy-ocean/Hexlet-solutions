/* flatten.js
Write and export flatten() function that flats an array to depth 1. 
Don't use flat() method, write a function using spread instead.
*/

export const flatten = (arr) => {
  let result = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      result = [...result, ...item];
    } else {
      result.push(item);
    }
  }
  return result;
};

console.log(flatten([1, [3, 2], 9])); // [1, 3, 2, 9]
console.log(flatten([1, [[2], [3]], [9]])); // [1, [2], [3], 9]
console.log(flatten([[9, 8], [], [0], 10])); // [9, 8, 0, 10]
