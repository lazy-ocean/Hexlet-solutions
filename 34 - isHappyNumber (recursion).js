/* isHappyNumber.js
If a given number transforms into 1 after some iterations of looking for the sum of squares of its digits, we call this number a 'happy number'.

7   => 7^2 = 49,
49  => 4^2 + 9^2 = 16 + 81 = 97,
97  => 9^2 + 7^2 = 81 + 49 = 130,
130 => 1^2 + 3^2 + 0^2 = 10,
10  => 1^2 + 0^2 = 1.
isHappyNumber(7) = true.

Write and export isHappyNumber() function that returns true if the number is happy and false otherwise. Limit the number of iteration to 10.

Note the sumOfSquareDigits() function that is ready to use in your function.
*/
///---- GIVEN FUNCTION FOR USE ---///
const sumOfSquareDigits = (num) => {
    const numAsStr = String(num);
    let sum = 0;
    for (let i = 0; i < numAsStr.length; i += 1) {
        const digit = Number(numAsStr[i]);
        sum += digit * digit;
    }

    return sum;
};

///--- MY FUNCTION ---/// 
const isHappyNumber = (num) => {
    let res = num;
    for (let acc = 0; acc <= 10; acc++) {
        if (res === 1) return true;
        res = sumOfSquareDigits(res);
    }
    return res === 1;
};

export default isHappyNumber;

console.log(isHappyNumber(1)); // true
console.log(isHappyNumber(7)); // true
console.log(isHappyNumber(13)); // true
console.log(isHappyNumber(0)); // false
console.log(isHappyNumber(2)); // false
console.log(isHappyNumber(15)); // false, num of iterations > 10.
console.log(isHappyNumber(90)); // false, num of iterations > 10.