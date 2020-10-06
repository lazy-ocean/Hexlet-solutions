/* compare.js
Write and export by default compare() function that takes two companies (objects) and compares its values. Return true if the companies are the same.
*/

const compare = (obj, obj2) => {
  const keys = Object.keys(obj);
  for (let key of keys) {
    if (obj[key] !== obj2[key]) return false;
  }
  return true;
};

export default compare;

///////// TESTS
const company1 = { name: "Hexlet", website: "https://hexlet.io" };
const company2 = { name: "CodeBasics", website: "https://code-basics.com" };
console.log(is(company1, company2)); // false

const company3 = { name: "Hexlet", website: "https://hexlet.io" };
const company4 = { name: "Hexlet", website: "https://hexlet.io" };
console.log(is(company3, company4)); // true
