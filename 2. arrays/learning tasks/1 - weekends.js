/*arrays.js
Write and export getWeekends() function that returns an array of two elements - days of weekend.
Function takes one parameter - a format, 'long' - saturday, sunday (by default), or 'short' - sat, sun.
*/

export const getWeekends = (str) => (str === 'short') ? ['sat', 'sun'] : ['saturday', 'sunday'];


console.log(getWeekends()); // (['saturday', 'sunday']);
console.log(getWeekends('long')); // (['saturday', 'sunday']);
console.log(getWeekends('short')); // (['sat', 'sun']);