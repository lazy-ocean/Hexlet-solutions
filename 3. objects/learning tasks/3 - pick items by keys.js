/* pick.js
Write and export by default pick() function that takes an object and keys and return new object only with items of arguemented keys.
*/

///// METHOD 1

const pick = (obj, items) => {
  let result = {};
  const entries = Object.entries(obj);
  for (const item of items) {
    for (const [key, value] of entries) {
      if (key === item) result[key] = value;
    }
  }
  return result;
};

////// METHOD 2
const pick = (obj, items) => {
  let result = {};
  const objKeys = Object.keys(obj);
  for (const key of items) {
    if (objKeys.includes(key)) result[key] = obj[key];
  }
  return result;
};

////// TESTS

const data1 = {};
console.log(pick(data1, [])); // {}
console.log(pick(data1, ["undefined", "another"])); // {}

const data2 = {
  user: "ubuntu",
  os: "linux",
};
console.log(pick(data2, [])); // {}
console.log(pick(data2, ["none"])); // {}
console.log(pick(data2, ["user"])); // { user: 'ubuntu' }
console.log(pick(data2, ["os", "user"])); // { os:"linux", user:"ubuntu" }

const data3 = {
  user: "ubuntu",
  os: "linux",
  virtual: false,
};
console.log(pick(data3, ["virtual"])); // { virtual: false }
console.log(pick(data3, ["os", "user", "virtual"])); // { os:"linux", user:"ubuntu", virtual:false }
