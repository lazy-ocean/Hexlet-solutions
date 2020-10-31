/* classes.js
Write regex that matches the expression: 
- first and second symbols are digits
- third symbol is a '/'
- forth symbol is any symbol excluding a-z
*/

let regex = /\d\d\/[^a-z]/;

////// TEST
let test = [
  "23/A", // true
  "83/#", // true
  "92/?", // true
  "92/8", // true
  "23/a", // false
  "53/e", // false
  "d3/3", // false
  "3d/2", // false
  "2383", // false
];
let found = test.filter((str) => str.match(regex));
console.log(found); /* =>
[
"23/A",
"83/#",
"92/?",
"92/8"
]
*/
