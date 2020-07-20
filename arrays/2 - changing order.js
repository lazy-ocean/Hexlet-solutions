/*arrays.js
Write and export swap() function that swaps first and last array items.
*/

////////// FIRST OPTION ////////////
export const swap = (arr) => {
    arr.push(arr[0]);
    arr[0] = arr[arr.length - 2];
    arr.splice(arr.length - 2, 1);
    return arr;
};

////////// SECOND OPTION ////////////
const swap = (arr) => {
    if (arr.length < 2) return arr;
    return [arr[arr.length - 1], ...arr.slice(1, arr.length - 1), arr[0]];
};

////////// THIRD OPTION ////////////
export const swap = (arr) => {
    if (arr.length < 1) return arr;
    const first = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = first;
    return arr;
};


console.log(swap([])); // ([])
console.log(swap([1])); // ([1])
console.log(swap([1, 2])); // ([2, 1])
console.log(swap(['one', 'two', 'three'])); // (['three', 'two', 'one'])
console.log(swap(['one', 'two', 'three', 'four'])); // (['four', 'two', 'three', 'one'])
console.log(swap(['one', 'two', 'three', 'four', 'five', 'six', 'seven'])); // (["seven", "two", "three", "four", "five", "six", "one"])