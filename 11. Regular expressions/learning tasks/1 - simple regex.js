/* simple regex.js
Write regex to find a string 'ruby1.*', where there is a dot and * is any symbol.
*/
let regex = /ruby1\../;

// TEST
let test = [
  "ruby1.9", // true
  "ruby1.h", // true
  "abcruby1.8xyz", // true
  "ruby1a9", // false
  "ruby2.5", // false
  "ruby1111", // false
  "ruby10", // false
];
let found = test.filter((str) => str.match(regex));
console.log(found); /* => [
  "ruby1.9",
  "ruby1.h",
  "abcruby1.8xyz"
  ]
  */
