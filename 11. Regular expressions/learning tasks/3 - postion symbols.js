/* positionSymbols.js
Write a regex that strictly matches 'support@hexlet.io', excluding 'something here support@hexlet.io', 'support@hexlet.io something here' and anything else.
*/
let regex = /^support@hexlet\.io$/;

///// TEST
let match = [
  "support@hexlet.io", // true
  " support@hexlet.io", // false
  "support@hexlet.io ", // false
  "support@hexletdio", // false
  "9support@hexlet.io", // false
  "support@hexlet.ioo", // false
  "support@hexlet9io", // false
];
let found = match.filter((str) => str.match(regex));
console.log(found); // => ["support@hexlet.io"]
