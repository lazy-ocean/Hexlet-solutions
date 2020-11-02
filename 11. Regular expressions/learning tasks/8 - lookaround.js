/* lookaround.js
Write a regex that matches the substring 1 with the substring 2 following:
Substring 1 - '80'
Substring 2 - a colon and 1+ symbols of not [a-z] class
*/
let regex = /80:(?=[^a-z]+)/;

///// TEST
let match = [
  "80:8080, 80:!@#$", // true
  "80: d123e", // true
  "80:", // false
  "80", // false
  "80:d123f", // false
];
let found = match.filter((str) => str.match(regex));
console.log(found); // => ["80:8080, 80:!@#$", "80: d123e"]
