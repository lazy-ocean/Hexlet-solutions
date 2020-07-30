/* lengthOfLastWord.js
Write and export by default lengthOfLastWord() function that takes a string and returns the length of the last word. 
For the purpose of this task, word is any sequence of symbols without space: word!; wo.rd; ___word
*/
///////// 1
const lengthOfLastWord = (str) => {
  if (!str.length) return 0;
  let strArr = str.split(" ").filter(Boolean);
  return strArr[strArr.length - 1].length;
};

export default lengthOfLastWord;

///////// 2
const lengthOfLastWord = (str) => {
  let strArr = str.trim().split(" ");
  return strArr[strArr.length - 1].length;
};

export default lengthOfLastWord;

console.log(lengthOfLastWord("")); // 0
console.log(lengthOfLastWord("hi")); // 2
console.log(lengthOfLastWord("man in black")); // 5
console.log(lengthOfLastWord("hello, world!")); // 6
console.log(lengthOfLastWord("hello, wOrLD!  ")); // 6
