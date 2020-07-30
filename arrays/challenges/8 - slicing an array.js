/* chunk.js
Write and export by default chunk() function that takes an array and the size of chunk. Return a sliced on chunks array.
*/
/////// 1
const chunk = (arr, size) => {
  if (!arr.length) return [];
  let result = [];
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (temp.length < size) {
      temp.push(arr[i]);
    } else {
      result.push(temp);
      temp = [arr[i]];
    }
  }
  result.push(temp);
  return result;
};

/////// 2
const chunk = (arr, size) => {
  let result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const result1 = chunk(["a", "b", "c", "d"], 2);
console.log(result1); // [['a', 'b'], ['c', 'd']]

const result2 = chunk(["a", "b", "c", "d"], 3);
console.log(result2); // [['a', 'b', 'c'], ['d']]

const result3 = chunk([], 4);
console.log(result3); // []

const result4 = chunk(["a"], 2);
console.log(result4); // [['a']]

const result5 = chunk(["a", "b", "c", "d", "e", "f"], 2);
console.log(result5); // [['a', 'b'], ['c', 'd'], ['e', 'f']]
