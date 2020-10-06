/* takeLast.js
Write an inner takeLast() function that returns last n characters of the argumented string reversed.
If the string is empty or shorter than the number of taken symbols, return null.
You have the function call as 'return takeLast(text, 4)', so set your inner function accordingly.
*/

const run = (text) => {
  const takeLast = (str, n) => {
    if (str.length < n) return null;
    return str.slice(-n).split("").reverse().join("");
  };
  return takeLast(text, 4);
};

/////// TESTS
console.log(run("")); // null
console.log(run("cb")); // null
console.log(run("power")); // rewo
console.log(run("hexlet")); // telx
console.log(run("kids")); // sdik
