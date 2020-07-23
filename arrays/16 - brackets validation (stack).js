/*isBracketStructureBalanced.js
Write and export by default isBracketStructureBalanced() function that takes a string of different brackets and checks if this string is correct === all brackets are balanced (paired and closed correctly).

Every opening bracket should have its closing pair. Opening one is always in front.
*/
const openingSymbols = ['(', '[', '{', '<'];
const closingSymbols = [')', ']', '}', '>'];

const isBracketStructureBalanced = (str) => {
    const stack = [];
    for (const item of str) {
        if (openingSymbols.includes(item)) {
            stack.push(item);
        } else {
            const index = closingSymbols.indexOf(item);
            const pairItem = openingSymbols[index];
            if (stack.pop() !== pairItem) return false;
        }
    }
    return stack.length === 0;
};

export default isBracketStructureBalanced;

const str = '()';
console.log(isBracketStructureBalanced(str)); // true

const str2 = '[()]';
console.log(isBracketStructureBalanced(str2)); // true

const str3 = '({}[])';
console.log(isBracketStructureBalanced(str3)); // true

const str4 = '(<><<{[()]}>>)';
console.log(isBracketStructureBalanced(str4)); // true

const str5 = '';
console.log(isBracketStructureBalanced(str5)); // true

const str6 = '((';
console.log(isBracketStructureBalanced(str6)); // false

const str7 = '[[()]';
console.log(isBracketStructureBalanced(str7)); // false

const str8 = '({}}[]';
console.log(isBracketStructureBalanced(str8)); // false

const str9 = '(<><<{[()]}>>>)';
console.log(isBracketStructureBalanced(str9)); // false

const str10 = '}';
console.log(isBracketStructureBalanced(str10)); // false

const str11 = '([)]';
console.log(isBracketStructureBalanced(str11)); // false

const str12 = '([))';
console.log(isBracketStructureBalanced(str12)); // false