/* flags.js
Write a regex that finds all substrings that match word 'python' in any register and is quoted by pair "" or ''.
*/

let regex = /('|")python\1\i/; // /^(")python(")$|^(')python(')$/i

///// TEST
let match = [
  '"python"', // true
  "'Python'", // true
  "'PYTHON'", // true
  '"pyTHon"', // true
  'python"', // false
  "'PYTHON", // false
  "python", // false
  "'pYThon\"", // false
  "\"pYThon'", // false
];
let found = match.filter((str) => str.match(regex));
console.log(found);
/* => [
""python"",
"'Python'",
"'PYTHON'",
""pyTHon""
] */
