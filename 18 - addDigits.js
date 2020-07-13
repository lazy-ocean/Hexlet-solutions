/* addDigits.js
Write and export by default addDigits() function that calculates the sum of digits of an argumented number to the moment when there's only one digit left.

For example, num = 38;

3 + 8 = 11 => 1 + 1 = 2
return 2
*/

const collapseNumber = (num) => {
    const str = num.toString();
    let result = 0;

    for (let i = str.length - 1; i >= 0; i--) {
        result = result + ~~str[i];
    }
    return result;
};

const addDigits = (n) => {
    let num = n;
    while (num >= 10) {
        num = collapseNumber(num);
    }
    return num;
};

export default addDigits;