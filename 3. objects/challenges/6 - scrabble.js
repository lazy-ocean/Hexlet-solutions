/* scrabble.js
Write and export by default predicate function that takes two arguments:
-- a string with characters
-- a string with word

Your function should check if it is possible to make this word out of characters of string.
Mind the register - A and a should count as one letter.
*/

const countLetters = (str) => {
  let count = {};
  for (let char of str) {
    let charL = char.toLowerCase();
    !count.hasOwnProperty(charL) ? (count[charL] = 1) : (count[charL] += 1);
  }
  return count;
};

const scrabble = (str, word) => {
  const letters = countLetters(str);
  const search = countLetters(word);
  const keys = Object.keys(search);
  for (let key of keys) {
    if (!letters.hasOwnProperty(key) || search[key] > letters[key])
      return false;
  }
  return true;
};

export default scrabble;

//////// TESTS
console.log(scrabble("scriptingjava", "JavaScript")); // true
console.log(scrabble("scriptjavest", "javascript")); // false
console.log(scrabble("", "javascript")); // false
console.log(scrabble("katas", "steak")); // false
console.log(scrabble("rkqodlw", "world")); // true
console.log(scrabble("begsdhhtsexoult", "hexlet")); // true
console.log(scrabble("scriptjava", "javascript")); // true
console.log(scrabble("scriptingjava", "javascript")); // true
