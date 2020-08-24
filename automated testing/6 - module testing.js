/* tests/validator.test.js
Write tests for the validator module: it validates the data and works like this:
-- Using addCheck(function) method Validator takes validation function. It takes an argumented object and returns true or false;
-- using isValid(value) method Validator takes this value and checks it on all the functions added with addCheck. If no validation functions were added, returns true.

Validator in the works:
const validator = makeValidator();
validator.isValid('some value'); // true
validator.addCheck((v) => v > 5);
validator.isValid(3); // false
validator.isValid(8); // true
*/

test("validator's main flow", () => {
  const validator = makeValidator();
  validator.addCheck((v) => v > 0);
  expect(validator.isValid(3)).toEqual(true);
  expect(validator.isValid(0)).toEqual(false);
});

test("validator with no check", () => {
  const validator = makeValidator();
  expect(validator.isValid(3)).toEqual(true);
});
