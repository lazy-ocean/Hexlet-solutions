/*invertCase.js
Write and export by default invertCase() function that reverses the letter case for argumented string:

invertCase('Hello, World!'); // hELLO, wORLD!
invertCase('I loVe JS');     // i LOvE js
*/

const invertCase = (str) => {
    let result = '';
    const length = str.length;

    for (let i = 0; i < length; i++) {
        result += (str[i] === str[i].toUpperCase()) ? str[i].toLowerCase() : str[i].toUpperCase();
    }
    return result;
};

export default invertCase;

console.log(invertCase('Hello, World!')); // hELLO, wORLD!
console.log(invertCase('I loVe JS')); // i LOvE js
console.log(invertCase('MEOW meow MEOW')); // i LOvE js
console.log(invertCase('lOREM IpSuM dolor Sit AmEt')); // i LOvE js
console.log(invertCase('SMALL big LOWER upper')); // i LOvE js