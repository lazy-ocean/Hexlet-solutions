/* withoutTwoZeros.js
Write and export by default withoutTwoZeros() function that takes two arguments: the num  o 0 and the num  o 1. The function determines how many ways there are to place these 0s and 1s in a row, BUT returns only the num  o such combinations where there're no two zeros standing together.

For example: 
withoutTwoZeros(2, 2):
There're 6 possible ways to place these digits: 0011, 0101, 0110, 1001, 1010, 1100. 
In 3 of them there're 00 standing together: 0011, 1001 и 1100.
So it leaves us with only 3 ways: 0101, 0110 и 1010. 
console.log(withoutTwoZeros(2, 2)); = 3
*/
//---- Factorial function ----//
const factorial = (num) => {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
};

const withoutTwoZeros = (n, m) => {
    //---- Permutations with repetition formula, as we have two types of information (0, 1) each repeating n and m times ----//
    let combinations = factorial(n + m) / (factorial(n) * factorial(m));
    if (n === 1) return combinations;
    if (n - m >= 2) return 0;
    /*---- Simple permutations formula: to 'neutralize' zeros we should place m + 1 ones on n zeros, so
      n
    A ===== (m + 1)! / (m + 1 - n)!
      m + 1
    */
    return factorial(m + 1) / (factorial(m + 1 - n) * factorial(n));
};

export default withoutTwoZeros;

console.log(withoutTwoZeros(3, 1)); // 0
console.log(withoutTwoZeros(3, 2)); // 1
console.log(withoutTwoZeros(1, 1)); // 2
console.log(withoutTwoZeros(3, 5)); // 20
console.log(withoutTwoZeros(1, 3)); // 4
console.log(withoutTwoZeros(2, 2)); // 3
console.log(withoutTwoZeros(2, 4)); // 10
console.log(withoutTwoZeros(4, 6)); // 35
console.log(withoutTwoZeros(5, 6)); // 21
console.log(withoutTwoZeros(5, 7)); // 56
console.log(withoutTwoZeros(6, 8)); // 84