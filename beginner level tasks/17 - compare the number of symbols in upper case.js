/*comparers.js
Write bigLettersCount() and compare() functions:

-- bigLettersCount() returns the number of capital letters of the string.
Special symbols (like space or commas) for this task are considered capital.

-- compare() function takes two strings as arguments, first and second, and should work like this:
* If there're more capital letters in the first string, return 1;
* If there're more capital letters in the second string, return -1;
* Otherwise return 0;
*/

const bigLettersCount = (str) => {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            result += 1;
        }
    }
    return result;
};

const compare = (first, second) => {
    const firstCount = bigLettersCount(first);
    const secondCount = bigLettersCount(second);

    const final = (firstCount > secondCount) ? 1 : (secondCount > firstCount) ? -1 : 0;

    return final;
};

console.log(compare('AD', 'ad sd')); // 1
console.log(compare('AD', 'Ad sd')); // 0
console.log(compare('az', 'ad')); // 0
console.log(compare('Hello', 'MeOw')); // -1
console.log(compare('purr', 'KITTY!')); // -1
console.log(compare('Lo Ve', 'aa a a')); // 1