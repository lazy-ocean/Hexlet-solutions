/* play.js
Write and export by default function that returns a vertical histogram of the results of rolling the dice.
Your function takes:
-- times the dices roll, a number
-- a function that returns a result (you dont need to write that, just take random numbers from 1 to 6)
Your histogram should look like this:

displayHistogram(13, rollDie);
                   31% 31%
                   ### ###
       15%     15% ### ###
       ### 8%  ### ### ###
       ### ### ### ### ###
   -----------------------
    1   2   3   4   5   6
*/
var _ = require("lodash");
/// Generate random dice
const rollDie = () => Math.round(Math.random() * 5 + 1);

const play = (num, rollDie) => {
  // Use lodash to roll the dice specified number of times and make an array of sides
  const nums = _.times(num, rollDie);
  // Make a side with all possible sides, 1 to 6
  const sides = _.range(1, 7);

  // First, let's get the horizontal histogram
  const lines = sides.map((side) => {
    // Use filter to go through the sides that appeared (nums) and count it for every option of sides (1 to 6)
    const count = nums.filter((number) => number === side).length;
    // Get the probability of every option in this particular iteration of rolling the dice
    let percent = Math.round((count / num) * 100);
    // If the percent is zero, it appears as nothing, anything else should be three symbols long - '3%_' with a space or '36%'
    const displayPercent = percent !== 0 ? `${percent}%`.padEnd(3, " ") : "";
    // Return an array of arrays ~~ horizontal histogram
    return [
      `${"### "}`.repeat(count).split(" ", count),
      `${displayPercent}`,
    ].flat();
  });

  // Find max possible height of the future vertical histogram
  const max = lines.reduce(
    (acc, line) => (line.length > acc.length ? line : acc),
    lines[0]
  );

  // Rotate the horizontal histogram anticlockwise
  const rotateLeft = (lines) => {
    let result = [];
    for (let i = max.length - 1; i >= 0; i--) {
      let stack = [];
      for (const item of lines) {
        stack = [...stack, item[i] || "   "];
      }
      result = [...result, stack];
    }
    // And push scale
    result.push(["-----------------------"]);
    result.push([" 1   2   3   4   5   6"]);
    return result;
  };

  const rotatedLines = rotateLeft(lines);
  // To get rid of the commas inside histogram arrays, join all with spaces and delete unnecessary spaces at the end of every line
  const spaces = rotatedLines.map((line) => line.join(" ").replace(/\s*$/, ""));
  // Join with new lines
  console.log(spaces.join("\n"));
};

export default play;
