/*addPrefix.js
Write and export by default addPrefix() function that takes an array and name prefix and returns new array with names (= array items) having argumented prefix (e.g., Smith to Mr Smith).
*/

const addPrefix = (arr, prefix) => {
    const newNames = [];
    for (let i = 0; i < arr.length; i++) {
        newNames[i] = `${prefix} ${arr[i]}`;
    }
    return newNames;
};

export default addPrefix;

const names = ['john', 'smith', 'karl'];
const actual1 = addPrefix(names, 'Mr'); // ['Mr john', 'Mr smith', 'Mr karl'];
const actual2 = addPrefix(names, 'Mrs'); // ['Mrs john', 'Mrs smith', 'Mrs karl'];