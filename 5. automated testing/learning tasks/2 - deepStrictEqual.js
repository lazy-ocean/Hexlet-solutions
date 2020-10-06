/* tests/take.tests.js
Write tests for the take(items, n) function that returns the first n elements of [items] and works as lodash _.take:
https://lodash.com/docs/4.17.15#take
=> take([1, 2, 3], 2); // [1, 2]
=> take([], 2); // []
=> take([4, 3], 9); // [4, 3]
*/

// If the function returns the exact number of objects
assert.deepStrictEqual(take(["meow", "woof", "ribbit"], 2), ["meow", "woof"]);
// If the function works with empty array
assert.deepStrictEqual(take([], 2), []);
// If the function returns all items if the number is higher than arr.length
assert.deepStrictEqual(take(["meow", "woof", "ribbit"], 10), [
  "meow",
  "woof",
  "ribbit",
]);
// If the function returns all the first item if no number was argumented.
assert.deepStrictEqual(take(["meow", "woof", "ribbit"]), ["meow"]);
