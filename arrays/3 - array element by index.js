/*arrays.js
Write and export by default get() function that returns an array item of argumented index if there's such item. Otherwise, it returns default value.
Function takes array, index and default (= null) value as arguments.
*/

const get = (arr, i, result = null) => (arr[i] === '') ? '' : arr[i] || result;
// added check on empty value: without it function always return default if it should return '';

export default get;

const cities = ['moscow', 'london', 'berlin', 'porto', ''];

const actual1 = get(cities, 0);
console.log(actual1) // 'moscow'

const actual2 = get(cities, 2, 'default');
console.log(actual2) // 'berlin'

const actual3 = get(cities, 5, false);
console.log(actual3) // false

const actual4 = get(cities, -1, 'oops');
console.log(actual4) // 'oops'

const actual5 = get(cities, 5);
console.log(actual5) // null

const actual6 = get(cities, 4);
console.log(actual6) // ''