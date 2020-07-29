/* battleship.js
Write and export two functions for the battleship game, both take in the argument a battleship game field: it is an array with arrays with 1s and 0s. 
- 1 is for the ship or its part
- 0 is an empty cell.

1) isValidField():
The battleship field with ships is valid if different ships are not connected by their corners.
Function checks if the field is valid.

2) calcShipsCount() 
This function returns the number of positioned ships.
*/

const isValidField = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j]) {
        if (arr[i + 1][j - 1] || arr[i + 1][j + 1]) return false;
      }
    }
  }
  return true;
};

const calcShipsCount = (arr) => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] && !arr[i][j - 1]) {
        if (!arr[i - 1] || !arr[i - 1][j]) result += 1;
      }
    }
  }
  return result;
};

const battleField1 = [];
console.log(isValidField(battleField1)); // true

const battleField2 = [
  [0, 1, 0, 0],
  [1, 0, 0, 1],
  [0, 0, 0, 0],
  [0, 1, 1, 1],
];
console.log(isValidField(battleField2)); // false

const battleField3 = [
  [0, 1, 1, 0],
  [0, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 1, 0, 1],
];
console.log(isValidField(battleField3)); // true

const battleField4 = [
  [1, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 1],
  [0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 1],
  [0, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 0, 0],
];
console.log(isValidField(battleField4)); // true

const battleField1 = [];
console.log(calcShipsCount(battleField1)); // 0

const battleField2 = [[1]];
console.log(calcShipsCount(battleField2)); // 1

const battleField3 = [[0]];
console.log(calcShipsCount(battleField3)); // 0

const battleField4 = [
  [0, 0, 1],
  [0, 0, 0],
  [1, 1, 0],
];
console.log(calcShipsCount(battleField4)); // 2

const battleField5 = [
  [1, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 1],
  [0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 1],
  [0, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 0, 0],
];
console.log(calcShipsCount(battleField5)); // 6
