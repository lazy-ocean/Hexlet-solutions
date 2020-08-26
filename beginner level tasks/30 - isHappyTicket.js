/* isHappyTicket.js
The ticket is called lucky when the sum of the first haft digits of its number equals to the sum of the last half digits. Write a function to find out whether the ticket is lucky or not (true or false). Consider that input is always a string. 

Num is always even, but its length can vary.

Examples:
isHappyTicket('385916'); // true
isHappyTicket('231002'); // false
isHappyTicket('1222');   // false
isHappyTicket('054702'); // true
isHappyTicket('00');     // true
*/

////////////////////////////////////
// Using two separate functions
////////////////////////////////////
const sum = (str, start, finish) => {
    let res = 0;
    for (let i = start; i < finish; i++) {
        res += +str[i];
    }
    return res;
};

const isHappyTicket = (str) => {
    const length = str.length;
    const res1 = sum(str, 0, length / 2);
    const res2 = sum(str, length / 2, length);
    return (res1 === res2);
};

export default isHappyTicket;

////////////////////////////////////
// Using accumulator
////////////////////////////////////
const isHappyTicket = (str) => {
    let acc = 0;
    let length = str.length - 1;
    for (let i = 0; i < length; i++, length--) {
        acc += +str[i] - +str[length];
    }
    return acc === 0;
}
export default isHappyTicket;

console.log(isHappyTicket('1234')) // false
console.log(isHappyTicket('385916')); // true
console.log(isHappyTicket('231002')); // false
console.log(isHappyTicket('1222')); // false
console.log(isHappyTicket('054702')); // true
console.log(isHappyTicket('00')); // true
console.log(isHappyTicket('101101')); // true
console.log(isHappyTicket('123876')); // false
console.log(isHappyTicket('333333')); // true
console.log(isHappyTicket('139940')); // true
console.log(isHappyTicket('101921')); // false