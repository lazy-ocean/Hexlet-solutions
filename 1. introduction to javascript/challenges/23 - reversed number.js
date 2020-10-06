/*reverseInt.js
Write and export by default reverseInt() function that reverses given number and returns the new one.

reverseInt(13); // 31
reverseInt(-123); // -321
reverseInt(8900); // 98
*/

const reverseInt = (num) => {
    const str = Math.abs(num).toString();
    let result = '';
    const length = str.length;

    for (let i = length - 1; i >= 0; i--) {
        result += str[i];
    }

    return (num < 0) ? -parseInt(result, 10) : parseInt(result, 10);
};

export default reverseInt;

console.log(reverseInt(189304089231)); // 21
console.log(reverseInt(-122)); // -221
console.log(reverseInt(8900)); // 98
console.log(reverseInt(0)); // 0
console.log(reverseInt(-87435)); // -53478