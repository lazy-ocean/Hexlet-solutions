/* hammingWeight.js
Write and export by default hammingWeight() function that takes an integer as an argument and returns hamming weight - the number of symbols that are different from the zero-symbol of the alphabet used.
*/
const hammingWeight = (num) => {
  // num to binary
  const binary = num.toString(2);
  // binary (=string) to array and filter all 1s
  const one = binary.split("").filter((item) => item === "1");
  return one.length;
};

export default hammingWeight;

console.log(hammingWeight(0)); // 0
console.log(hammingWeight(1)); // 1
console.log(hammingWeight(5)); // 2
console.log(hammingWeight(10)); // 2
console.log(hammingWeight(101)); // 4
console.log(hammingWeight(12345)); // 6
