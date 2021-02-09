/* get.js
Write and export by default get() function that returns an item of object that can be of different depth. Your function takes an object and a path (array).
If you cannot access any item by argumented path, return null.
You cannot use lodash.
*/

const get = (obj, path) => {
  if (path.length === 1) return obj[path[0]] ?? null;
  if (!obj.hasOwnProperty(path[0])) return null;
  return get(obj[path[0]], path.slice(1));
};

export default get;

/////// TESTS
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

console.log(get(data, ["hosts", 1, "active"])); //.toBe(false);
console.log(get(data, [null])); // Null
console.log(get(data, ["undefined"])); // null
console.log(get(data, ["user"])); // 'ubuntu'
console.log(get(data, ["user", "ubuntu"])); // null
console.log(get(data, ["hosts", 1, "name"])); // 'web2'
console.log(get(data, ["hosts", 5])); // null
console.log(get(data, ["hosts", 1, null])); // 3
console.log(get(data, ["user", "name", "name"])); // null
console.log(get(data, ["hosts", 0])); // { name: 'web1' }*/
