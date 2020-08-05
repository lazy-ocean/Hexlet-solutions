/* fromPairs.js
Write and export by default fromPairs() function that takes an array of arrays-pairs and returns an object made of these pairs.
*/
const fromPairs = (arr) => {
  let result = {};
  for (let [key, value] of arr) {
    result[key] = value;
  }
  return result;
};

export default fromPairs;

/////// TESTS
console.log(
  fromPairs([
    ["fred", 30],
    ["barney", 40],
  ])
); //  { fred: 30, barney: 40 }

console.log(
  fromPairs([
    ["cat", 5],
    ["dog", 6],
    ["bird", 10],
  ])
); // { cat: 5, dog: 6, bird: 10 }

console.log(
  fromPairs([
    ["cat", 5],
    ["dog", 6],
    ["cat", 11],
  ])
); // { cat: 11, dog: 6 }
