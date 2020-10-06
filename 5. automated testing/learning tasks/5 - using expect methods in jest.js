/* tests/gt.test.js
Write tests for the gt(value, othValue) function that returns true if the value > othValue and false in any other case.
The function works just like _.gt of lodash:
https://lodash.com/docs/4.17.15#gt
=> gt(3, 1); // true
=> gt(3, 3); // false
=> gt(1, 3); // false
*/

test("gt", () => {
  // If function returns true when value > othValue
  expect(gt(13, 7)).toBe(true);
  // If function returns false when value = othValue
  expect(gt(7, 7)).toBe(false);
  // If function returns false when value < othValue
  expect(gt(1, 7)).toBe(false);
  // If function returns false when there's no value || othValue
  expect(gt(0)).toBe(false);
  // If function returns false when there're no arguments
  expect(gt()).toBe(false);
});
