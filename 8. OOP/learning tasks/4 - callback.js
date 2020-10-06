/* callback.js
Write and export by default each() function that takes a collection of objects and a callback-function. Your function should execute callback-function for every collection item.
 */

const each = (obj, fn) => obj.forEach((item) => fn.call(item));

//// TESTS
const objects = [{ name: "Karl" }, { name: "Mia" }];

each(objects, function callback() {
  this.name = this.name.split("").reverse().join("");
});

console.log(objects);
/* [
  { name: 'lraK' },
  { name: 'aiM' },
];
*/
