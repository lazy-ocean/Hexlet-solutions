/* magic.js
Write a function that should result to curried sum of all arguments:
magic(1, 2)(3, 4, 5)(6)(7, 10) == 38; // true

See tests for other examples.
 */

const magic = (...args) => {
  return Object.assign(magic.bind(null, ...args), {
    valueOf: () => args.reduce((a, c) => a + c, 0),
  });
};

console.log(magic(5, 2, -8) == -1); // true
console.log(magic(1, 2)(3, 4, 5)(6)(7, 10) == 38); // true

console.log(magic() + 0); // 0
console.log(magic() + 1); // 1
console.log(magic(5, 2, -8) + 2); // 1
console.log(magic(1, 2)(3, 4, 5)(6)(7, 10) - 8); // 30
console.log(magic(4, 8, 1, -1, -8)(3)(-3)(7, 2) + 7); // 20
console.log(magic(5) + 1); // 6
