/* buildUser.test.js
Write a couple of tests for the function that creates a random user. User is an object with email, firstName and lastName parameters.

Test two features:
- that two randomly created users are not the same
- that you can argument parameters in the function.
*/
test("different users on each use", () => {
  let user = buildUser();
  let user2 = buildUser();
  expect(user).not.toEqual(user2);
});

test("values setting", () => {
  let user3 = buildUser({ firstName: "Vlada" });
  expect(user3.firstName).toEqual("Vlada");
});
