/* calcShipsCount.js
Write and export calcShipsCount() function that takes in the argument a battleship game field: it is an array with arrays with 1s and 0s. 
- 1 is for the ship or its part
- 0 is an empty cell.
The function should return the number of positioned ships. Mind that the ships can bend, see tests for examples.

*/

var _ = require("lodash");

// Count all ships of two and more 1s (bigShipsCount) horizontally and the number of 1s used
const calcShips = (arr) => {
  let remains = 0;
  let bigShipsCount = 0;
  for (let line of arr) {
    let newLine = _.compact(line.join("").split(0));
    for (let item of newLine) {
      if (item.length > 1) {
        bigShipsCount += 1;
        remains += item.length;
      }
    }
  }
  return { bigShipsCount, remains };
};

const calcShipsCount = (arr) => {
  const ones = _.compact(arr.flat()).length;
  let smallShipsCount = 0;
  let result;

  // Count ships from normal field and rotated one to count all big ships horizontally
  const ships1 = calcShips(arr);
  const ships2 = calcShips(_.zip(...arr));
  let bigShipsCount = ships1.bigShipsCount + ships2.bigShipsCount;
  // Exclude big ships' 1s from the number of all 1s used
  let remains = ones - ships1.remains - ships2.remains;

  // Count all ships with only one '1'
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr[j].length; i++) {
      if (arr[j][i] && !arr[j][i - 1]) {
        if (
          (!arr[j - 1] || !arr[j - 1][i]) &&
          !arr[j][i + 1] &&
          (!arr[j + 1] || !arr[j + 1][i])
        )
          smallShipsCount += 1;
      }
    }
  }

  // If the number of remaining 1 is fewer than 0, that means that such number of ships are bended and counted twice, so we simply exclude it
  if (remains < 0) {
    result = bigShipsCount - Math.abs(remains);
    // If the number of remaining 1 is fewer than the small ships count but more than 0, we should just exclude bent ships and count small, too
  } else if (remains < smallShipsCount) {
    result = bigShipsCount - Math.abs(remains) + smallShipsCount;
    // If the number of remaining ones and the small ships count equal, there're no bent ships. Simply adding small and big ships.
  } else {
    result = bigShipsCount + smallShipsCount;
  }
  return result;
};

///////// TESTS
console.log(calcShipsCount([])); // 0

console.log(calcShipsCount([[1]])); // 1
console.log(calcShipsCount([[0]])); // 0
console.log(
  calcShipsCount([
    [0, 0, 1],
    [0, 0, 0],
    [1, 1, 0],
  ])
); // 2

console.log(
  calcShipsCount([
    [0, 1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 1],
    [0, 0, 0, 1, 0, 0],
    [0, 1, 1, 1, 0, 1],
    [0, 0, 0, 0, 0, 1],
    [1, 1, 0, 1, 0, 0],
  ])
); // 6

console.log(
  calcShipsCount([
    [0, 1, 0, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 1, 0],
    [0, 1, 1, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 0, 1, 0, 0],
    [1, 0, 0, 0, 1, 1, 1],
    [1, 0, 1, 0, 0, 0, 0],
  ])
); // 5
