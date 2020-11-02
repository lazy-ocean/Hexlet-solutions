/* email.js
Write a regex for email addresses:
- first part from start to '@': 1+ symbol of \w
- second part from '@' to '.': domain containing only letters min 3 symbols long
- third part after '.': 2-5 letters long, only a-z.
*/
let regex = /^\w{1,}@[a-zA-Z]{3,}\.[a-zA-Z]{2,5}$/;

///// TEST
let match = [
  "suPport@hExlet.io", // true
  "in9Fo@hexlet.io", // true
  "in_fo@goOgle.com", // true
  "i@you.cOm", // true
  "support@hexletio", // false
  "^%@hexlet.io", // false
  "info@he.xlet.io", // false
  "info@he.io", // false
  "!info@hexlet.io", // false
  "info@hexlet.i", // false
  "info@hexlet.ioioio", // false
  "info@1hexlet.io", // false
  "info@hexlet.i3", // false
  "suPport@hExlet_.io", // false
  "suPport@hExlet.i^o", // false
];
let found = match.filter((str) => str.match(regex));
console.log(
  found
); /* =>
[
"suPport@hExlet.io",
"in9Fo@hexlet.io",
"in_fo@goOgle.com",
"i@you.cOm"
] */
