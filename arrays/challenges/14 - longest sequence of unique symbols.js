/* getLongestLength.js
Write and export by default getLongestLength() function that takes a string and returns the length of the longest sequence of unique symbols of this string.
For example, 'qweqrty': there're two sequences with unique symbols: qwe, weqrty. Longest is weqrty, so return is 6.
*/
const getLongestLength = (str) => {
  let max = [];
  for (let j = 0; j < str.length; j++) {
    let temp = [];
    for (let i = 0 + j; !temp.includes(str[i]) && i < str.length; i++) {
      temp.push(str[i]);
    }
    if (max.length < temp.length) max = temp;
  }
  return max.length;
};

console.log(getLongestLength("jabjcdel")); // 7
console.log(getLongestLength("abcddef")); // 4
console.log(getLongestLength("abbccddeffg")); // 3
console.log(getLongestLength("abcd")); // 4
console.log(getLongestLength("1234561qweqwer")); // 9
console.log(getLongestLength("1234561qweqwerqer")); // 9
console.log(getLongestLength("")); // 0
