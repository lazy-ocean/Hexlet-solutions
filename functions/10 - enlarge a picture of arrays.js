/* enlargeArrayImage.js
Write and export by default enlargeArrayImage() function that takes a picture formed of arrays with symbols and enlarges it two times.
See tests for examples.
*/

////// OPTION ONE - USING MAP
const double = (items) => items.map((item) => [item, item]).flat();
const enlargeArrayImage = (arr) => double(arr.map((array) => double(array)));

////// OPTION TWO - REDUCE INSIDE REDUCE
const callback = (acc, item) => {
  let str = item.reduce((accum, char) => {
    accum.push(char, char);
    return accum;
  }, []);
  acc.push(str, str);
  return acc;
};

const enlargeArrayImage = (arr) => arr.reduce(callback, []);

/////// TESTS
const arr1 = [
  ["*", "*", "*", "*"],
  ["*", " ", " ", "*"],
  ["*", " ", " ", "*"],
  ["*", "*", "*", "*"],
];

console.log(enlargeArrayImage(arr1));
/*
[
    ['*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', ' ', ' ', ' ', ' ', '*', '*'],
    ['*', '*', ' ', ' ', ' ', ' ', '*', '*'],
    ['*', '*', ' ', ' ', ' ', ' ', '*', '*'],
    ['*', '*', ' ', ' ', ' ', ' ', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*'],
];
*/

const arr2 = [
  [" ", " ", "*", " ", " "],
  [" ", "*", " ", "*", " "],
  [" ", "*", " ", "*", " "],
  ["*", " ", " ", " ", "*"],
  ["*", " ", " ", " ", "*"],
  [" ", "*", " ", "*", " "],
  [" ", "*", " ", "*", " "],
  [" ", " ", "*", " ", " "],
];

console.log(enlargeArrayImage(arr2));
/*
[
    [' ', ' ', ' ', ' ', '*', '*', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', '*', '*', ' ', ' ', ' ', ' '],
    [' ', ' ', '*', '*', ' ', ' ', '*', '*', ' ', ' '],
    [' ', ' ', '*', '*', ' ', ' ', '*', '*', ' ', ' '],
    [' ', ' ', '*', '*', ' ', ' ', '*', '*', ' ', ' '],
    [' ', ' ', '*', '*', ' ', ' ', '*', '*', ' ', ' '],
    ['*', '*', ' ', ' ', ' ', ' ', ' ', ' ', '*', '*'],
    ['*', '*', ' ', ' ', ' ', ' ', ' ', ' ', '*', '*'],
    ['*', '*', ' ', ' ', ' ', ' ', ' ', ' ', '*', '*'],
    ['*', '*', ' ', ' ', ' ', ' ', ' ', ' ', '*', '*'],
    [' ', ' ', '*', '*', ' ', ' ', '*', '*', ' ', ' '],
    [' ', ' ', '*', '*', ' ', ' ', '*', '*', ' ', ' '],
    [' ', ' ', '*', '*', ' ', ' ', '*', '*', ' ', ' '],
    [' ', ' ', '*', '*', ' ', ' ', '*', '*', ' ', ' '],
    [' ', ' ', ' ', ' ', '*', '*', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', '*', '*', ' ', ' ', ' ', ' '],
];
*/

const arr3 = [
  ["@", "@"],
  ["@", "|"],
  ["—", "|"],
  ["@", "|"],
  ["@", "@"],
];

console.log(enlargeArrayImage(arr3));
/*
[
    ['@', '@', '@', '@'],
    ['@', '@', '@', '@'],
    ['@', '@', '|', '|'],
    ['@', '@', '|', '|'],
    ['—', '—', '|', '|'],
    ['—', '—', '|', '|'],
    ['@', '@', '|', '|'],
    ['@', '@', '|', '|'],
    ['@', '@', '@', '@'],
    ['@', '@', '@', '@'],
];
*/

const arr4 = [["x"]];

console.log(enlargeArrayImage(arr4));
/*
[
    ['x', 'x'],
    ['x', 'x'],
];
*/