/* calcInPolishNotation.js
Write and export by default calcInPolishNotation() function that would return the result of the argumented expression written in polish postfix notation.

1 2 + 4 * 3 + ===> (1 + 2) * 4 + 3  === 15
7 2 3 * - ===> 7 - 2 * 3 === 1;
*/

const operators = ["+", "-", "*", "/"];
const math = (x, y, op) => {
  let res;
  switch (op) {
    case "+":
      res = x + y;
      break;
    case "-":
      res = x - y;
      break;
    case "*":
      res = x * y;
      break;
    case "/":
      res = x / y;
      break;
    default:
      break;
  }
  return res;
};

const calcInPolishNotation = (arr) => {
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    if (!operators.includes(arr[i])) stack.push(arr[i]);
    if (operators.includes(arr[i])) {
      let temp1 = stack.pop();
      let temp2 = stack.pop();
      stack.push(math(temp2, temp1, arr[i]));
    }
  }
  return stack.pop();
};

export default calcInPolishNotation;

console.log(calcInPolishNotation([1, 2, "+", 4, "*", 3, "+"])); // 15
console.log(calcInPolishNotation([1, 2, "+", 4, "*", 3, "/"])); // 4
console.log(calcInPolishNotation([7, 2, 3, "*", "-"])); // 1
console.log(calcInPolishNotation([1, 2, "+", 2, "*"])); // 6
