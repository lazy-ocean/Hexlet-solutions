/* getIn.js
Write and export by default getIn() function that returns an item of object that can be of different depth. Your function takes an object and a path (array).
If you cannot access any item by argumented path, return null.
Use lodash if necessary.
*/
var _ = require("lodash");

const getIn = (obj, path) => _.get(obj, path, null);

export default getIn;

///// TESTS

const data = {
  user: "ubuntu",
  hosts: {
    0: {
      name: "web1",
    },
    1: {
      name: "web2",
      null: 3,
      active: false,
    },
  },
};

console.log(getIn(data, [null])); // Null
console.log(getIn(data, ["user", "ubuntu"])); // Null
console.log(getIn(data, ["hosts", 1, "name"])); //'web2'
console.log(getIn(data, ["hosts", 5])); // Null
console.log(getIn(data, ["hosts", 0])); // { name: 'web1' }
console.log(getIn(data, ["hosts", 1, null])); // 3
console.log(getIn(data, ["user", "name", "name"])); // Null
console.log(getIn(data, ["hosts", 1, "active"])); // false
