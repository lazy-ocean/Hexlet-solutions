/* tests/get.tests.js
Write tests for the get(obj, key, defaultValue) function. This function gets the value at path of object, if the resolved value is undefined, the defaultValue is returned in its place.

=> get({ hello: 'world' }, 'hello'); // world
=> get({ hello: 'world' }, 'hello', 'kitty'); // 'world'
=> get({}, 'hello', 'kitty'); // 'kitty'

You should write three tests:
-- Check if the function returns the exact value of the key from the object
-- Check if the function returns default value if there're no such key: value pair
-- Check if the function returns the value of the key even if there is the default value.
*/

// If the function returns the value of the key
if (get({ cat: "meow" }, "cat") !== "meow") {
  throw new Error("Fail");
}

// If the function returns the value of the key even if there is the default value
if (get({ cat: "meow" }, "cat", "purr") === "purr") {
  throw new Error("Fail");
}

// If the function returns the default value when there're no such key
if (get({}, "cat", "purr") !== "purr") {
  throw new Error("Fail");
}

console.log("All tests passed");
