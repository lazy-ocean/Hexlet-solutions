/* play.js
Write and export by default function that returns a horizontal histogram of the results of rolling the dice.
Your function takes:
-- times the dices roll, a number
-- a function that returns a result (you dont need to write that, just take random numbers from 1 to 6)
Your histogram should look like this:

play(100, rollDie); // rolling the dice 100 times
'1|####################### 23
2|################## 18
3|############# 13
4|#################### 20
5|############ 12
6|############## 14'
*/

var _ = require("lodash");
/// Generate random dice
const rollDie = () => Math.round(Math.random() * 5 + 1);

const play = (num, rollDie) => {
  let result = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
  let histogram = [];

  // Roll the dice the specified number of times and generate a counter for every side appearing.
  for (let counter = 1; counter <= num; counter++) {
    let number = rollDie();
    result.hasOwnProperty(number)
      ? (result[number] += 1)
      : (result[number] = 1);
  }

  // Make an array out of object
  const entries = Object.entries(result);
  // For every side: counter element make a histogramic scale
  for (let [key, value] of entries) {
    value === 0
      ? histogram.push(`${key}|`)
      : histogram.push(`${key}|${"#".repeat(value)} ${value}`);
  }

  // Return as a string
  return histogram.join("\n");
};
