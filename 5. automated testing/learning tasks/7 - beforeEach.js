/* tests/set.test.js
Write tests for the set(object, path, value) function that sets the value at path of object and returns a mutated object. If a portion of path doesn't exist, it's created. 
This function works like _.set of lodash:
https://lodash.com/docs/4.17.15#set
*/
let object;
// Setting a non-mutated object for every test
beforeEach(() => {
  object = { one: [{ two: { three: 3 } }] };
});

test("set adding element", () => {
  expect(set(object, "one[0].two.four", 4)).toEqual({
    one: [{ two: { three: 3, four: 4 } }],
  });
});

test("set changing element", () => {
  expect(set(object, "one[0].two.three", 4)).toEqual({
    one: [{ two: { three: 4 } }],
  });
});

test("set adding way", () => {
  expect(set(object, "ten", 10)).toEqual({
    one: [{ two: { three: 3 } }],
    ten: 10,
  });
});
