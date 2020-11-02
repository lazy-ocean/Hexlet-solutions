/* alternation.js
Write a regex that matches 'one', 'two' and 'three' strings.
*/
let regex = /one|t[wohr]/; // /one|two|three/

///// TEST
let match = [
  "one", // true
  "two", // true
  "three", // true
  "four", // false
  "five", // false
  "six", // false
  "seven", // false
  "eight", // false
  "nine", // false
  "ten", // false
];
let found = match.filter((str) => str.match(regex));
console.log(found); // => ["one", "two", "three"]
