/* backreference.js
Write a regex that matches strings with substrings containing:
- 3 symbols of a-z class
- a colon
- first three symbols repeated
*/
let regex = /([a-z]{3}):\1/;

///// TEST
let match = [
  "mam:mam", // true
  "asd mmm:mmm mmm", // true
  "asdf:sdfa", // true
  "mmm:emu", // false
  "emu:mmm", // false
  "mmm mmm", // false
  " aa:aa ", // false
];
let found = match.filter((str) => str.match(regex));
console.log(found); // => ["mam:mam", "asd mmm:mmm mmm", "asdf:sdfa"]
