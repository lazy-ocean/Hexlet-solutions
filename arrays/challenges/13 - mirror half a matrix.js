/* getMirrorMatrix.js
Write and export by default getMirrorMatrix that takes matrix and returns the new one: in the new matrix the left half stays the same as original and the right side mirrors the left.
Argumented matrix is always squared with even number of sides.
Try to use only minimum of arrays methods.
*/

const getMirrorMatrix = (arr) => {
  const length = arr[0].length;
  let result = [];
  for (const item of arr) {
    let temp = [];
    for (let i = 0; i < length / 2; i++) {
      temp.push(item[i]);
    }
    temp = [...temp, ...temp.reverse()];
    result.push(temp);
  }
  return result;
};

export default getMirrorMatrix;

const arr1 = [
  ["he", "xl", "et", "io"],
  ["in", "my", "hea", "rt"],
  ["fo", "re", "ve", "r"],
  ["an", "d", "ev", "er"],
];
console.log(getMirrorMatrix(arr1));
/*
    ['he', 'xl', 'xl', 'he'],
    ['in', 'my', 'my', 'in'],
    ['fo', 're', 're', 'fo'],
    ['an', 'd', 'd', 'an'],
*/

const arr2 = [
  [11, 12, 13, 14, 15, 16],
  [21, 22, 23, 24, 25, 26],
  [31, 32, 33, 34, 35, 36],
  [41, 42, 43, 44, 45, 46],
  [51, 52, 53, 54, 55, 56],
  [61, 62, 63, 64, 65, 66],
];
console.log(getMirrorMatrix(arr2));
/*
    [11, 12, 13, 13, 12, 11],
    [21, 22, 23, 23, 22, 21],
    [31, 32, 33, 33, 32, 31],
    [41, 42, 43, 43, 42, 41],
    [51, 52, 53, 53, 52, 51],
    [61, 62, 63, 63, 62, 61],
*/
