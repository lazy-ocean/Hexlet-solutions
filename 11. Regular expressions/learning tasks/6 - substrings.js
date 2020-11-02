/* substrings.js
Write a regex that matches strings with substrings that contains an openning square bracket, at least one any symbol and a closing square bracket (in that particular order). 
*/

let regex = /\(.+?\)/;

///// TEST
let match = [
  "(one) ($%@#$) (value1)", // true
  "test (^,ehu-) ) (t) (//)", // true
  "2383", // false
  "()", // false
  "() (", // false
];
let found = match.filter((str) => str.match(regex));
console.log(found);
/* =>
[
"(one) ($%@#$) (value1)",
"test (^,ehu-) ) (t) (//)"
]
 */
