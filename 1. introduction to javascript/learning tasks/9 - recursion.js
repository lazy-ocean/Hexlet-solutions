/*sequenceSum.js

Using recursion, write sequenceSum function that determines an average of a sequence of integers. 
Begin and end are the starting and the last number of the sequence.

EG: begin = 2 & end = 6 => 2 + 3 + 4 + 5 + 6 = 20.

Note that:
-- If begin > end, your function should return NaN
-- If begin === end, result should be equal to begin (or end)
*/

const sequenceSum = (begin, end) => {
    if (begin === end) return end;
    if (begin > end) return NaN;
    return begin + sequenceSum(begin + 1, end);
};

console.log(sequenceSum(0, 0)); // 0
console.log(sequenceSum(1, 1)); // 1
console.log(sequenceSum(1, 5)); // 15
console.log(sequenceSum(2, 6)); // 20
console.log(sequenceSum(-1, -1)); // -1
console.log(sequenceSum(-5, 4)); // -5
console.log(sequenceSum(2, 1)); // NaN
console.log(sequenceSum(1, -5)); // NaN