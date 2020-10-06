/*reverse.js
Write and export reverse() function that takes an array and reverses it.
Using the .reverse() method is not allowed.
*/

export const reverse = (arr) => {
    for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
        const reversingName = arr[i];
        arr[i] = arr[j];
        arr[j] = reversingName;
    }
    return arr;
};

const names1 = ['john', 'smith', 'karl'];
console.log(reverse(names1)); // ['karl', 'smith', 'john']

const names2 = [];
console.log(reverse(names2)); // []

const names3 = ['one', 'two'];
console.log(reverse(names3)); // ['two', 'one']

const names4 = ['john', 'smith', 'karl', 'alan', 'joe'];
console.log(reverse(names4)); // ['joe', 'alan', 'karl', 'smith', 'john']