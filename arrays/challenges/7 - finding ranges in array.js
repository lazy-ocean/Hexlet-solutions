/* summaryRanges.js
Write and export by default summaryRanges() function that finds continuous increasing sequences of numbers in the argumented array (1 2 3 4, or 34 35 35, or -4 -3) and returns an array with their ranges.
Examples:
summaryRanges([1, 2, 3]);
// ['1->3']
summaryRanges([0, 1, 2, 4, 5, 7]);
// ['0->2', '4->5']
*/

const summaryRanges = (arr) => {
  let result = [];
  let temp = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] === arr[i] + 1) {
      temp.push(arr[i], arr[i + 1]);
    } else if (temp.length) {
      result.push(`${temp[0]}->${temp[temp.length - 1]}`);
      temp = [];
    }
  }
  return result;
};

console.log(summaryRanges([])); // ['1->3']
console.log(summaryRanges([1, 2, 3, 5, 6])); // ['1->3']
console.log(summaryRanges([0, 1, 2, 4, 5, 7])); // ['0->2', '4->5']
console.log(summaryRanges([1, 1, 3, 4, 5, -6, 8, 9, 10, 12, 14, 14])); // ['3->5', '8->10']
console.log(summaryRanges([110, 111, 112, 111, -5, -4, -2, -3, -4, -5])); // ['110->112', '-5->-4']
