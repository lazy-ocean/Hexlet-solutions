/* sumIntervals.js
Write and export by default sumIntervals function that takes an array of arrays (=intervals) and returns the sum of all intervals.
All intervals look like [integer, integer], where first integer is always less than the second one.
Mind the intersected intervals.
For example:
[1, 2] [12, 13] = 2, as this intervals are not intersected and equals 1 each.
[1, 3] [2, 6] [4, 10] - equals 9, as it is a whole non-interrupted interval from 1 to 10.
*/

const sumIntervals = (arr) => {
  let result = [];
  for (const item of arr) {
    for (let i = item[0]; i < item[1]; i++) {
      if (!result.includes(i)) result.push(i);
    }
  }
  return result.length;
};

export default sumIntervals;

console.log(sumIntervals([[5, 5]])); // 0
console.log(
  sumIntervals([
    [7, 7],
    [6, 6],
  ])
); // 0

console.log(sumIntervals([[3, 10]])); // 7
console.log(sumIntervals([[-100, 0]])); // 100

console.log(
  sumIntervals([
    [-4, 4],
    [1, 3],
  ])
); // 8

console.log(
  sumIntervals([
    [1, 2],
    [11, 12],
  ])
); // 2

console.log(
  sumIntervals([
    [2, 7],
    [6, 6],
  ])
); // 5

console.log(
  sumIntervals([
    [1, 5],
    [1, 10],
  ])
); // 9

console.log(
  sumIntervals([
    [1, 9],
    [7, 12],
    [3, 4],
  ])
); // 11

console.log(
  sumIntervals([
    [7, 10],
    [-1, 4],
    [2, 5],
  ])
); // 9

console.log(
  sumIntervals([
    [1, 5],
    [-30, 19],
    [1, 7],
    [16, 19],
    [5, 100],
  ])
); // 130
