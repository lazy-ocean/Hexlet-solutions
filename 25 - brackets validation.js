/*areBracketsBalanced.js
Write and export by default areBraketsBalanced() function that takes a string of round brackets and checks if this string is correct === all brackets are balanced (paired and closed correctly).

Every opening bracket should have its closing pair. Opening one is always in front.
*/

const areBracketsBalanced = (str) => {
    const length = str.length;
    if (length % 2 !== 0 || str[0] === ')' || str[length - 1] === '(') return false;

    let acc = 0;
    for (let i = 0; i < length; i++) {
        acc += (str[i] === '(') ? 1 : -1;
        if (acc < 0) return false;
    }

    return (acc === 0);
};

export default areBracketsBalanced;


console.log(areBracketsBalanced('()')); // true
console.log(areBracketsBalanced('(())')); // true
console.log(areBracketsBalanced('(()((((())))))')); // true
console.log(areBracketsBalanced('')); // true
console.log(areBracketsBalanced('(())(())')); // true
console.log(areBracketsBalanced('((')); // false
console.log(areBracketsBalanced('())(')); // false
console.log(areBracketsBalanced('((())')); // false
console.log(areBracketsBalanced('(())())')); // false
console.log(areBracketsBalanced('(()(()))))')); // false
console.log(areBracketsBalanced(')')); // false
console.log(areBracketsBalanced('())(()')); // false