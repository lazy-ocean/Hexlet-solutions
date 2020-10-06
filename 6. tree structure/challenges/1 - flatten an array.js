/* flatten.js
Write and export by default flatten() function that flattens an array on infinite depth. You cannot use lodash and/or .flat method.
*/

const flatten = (arr) => {
  let result = [];
  arr.map((item) =>
    Array.isArray(item)
      ? (result = [...result, ...flatten(item)])
      : result.push(item)
  );
  return result;
};

/////// TESTS
const list = [1, 2, [3, 5], [[4, 3], 2]];
console.log(flatten(list)); // [1, 2, 3, 5, 4, 3, 2]

const list2 = [[1, [5], [], [[-3, "hi"]]], "string", 10, [[[5]]]];
console.log(flatten(list2)); // [ 1, 5, -3, "hi", "string", 10, 5 ]

const list3 = [1, 2, { a: 1 }, [3, 5], 2];
console.log(flatten(list3)); // [1, 2, { a: 1 }, 3, 5, 2]
