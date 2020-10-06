/* barChart.js
Write and export by default function that returns a bar chart of the argumented numbers.
--- bar with *, if the number is positive
--- bar with #, if the number is negative.

barChart([5, 10, -5, -3, 7]);
//     *   
//     *   
//     *   
//     *  *
//     *  *
//    **  *
//    **  *
//    **  *
//    **  *
//    **  *
//      ## 
//      ## 
//      ## 
//      #  
//      #  
*/
var _ = require("lodash");

const barChart = (arr) => {
  const max = _.max(arr);
  const min = _.min(arr);

  let matrix = arr.reduce((acc, item) => {
    let sign = Math.sign(item);
    let symbol = sign === 1 ? "*" : "#";
    let string = _.repeat(symbol, Math.abs(item));
    let length = Math.abs(min) + item;
    let fullString =
      sign === 1
        ? string.padStart(length, " ")
        : string.padStart(Math.abs(item) + length, " ");
    return acc.concat(fullString);
  }, []);

  const rotateLeft = (lines) => {
    let result = [];
    let minimum = min > 0 ? min : 0;
    for (let i = all - 1; i >= minimum; i--) {
      let stack = [];
      for (const item of lines) {
        stack = [...stack, item[i] || " "];
      }
      result = [...result, stack];
    }
    return result;
  };

  const rotatedLines = rotateLeft(matrix);
  const spaces = rotatedLines.map((line) => line.join(""));
  console.log(spaces.join("\n"));
};

export default barChart;
