/* getSortedNames.js
Write and export by default getSortedNames() function that takes an array of objects with users' data and returns an array of users' names sorted alphabetically.
*/

const getSortedNames = (obj) => {
  let names = [];
  for (const { name } of obj) {
    names.push(name);
  }
  return names.sort();
};

export default getSortedNames;

////// TESTS
const users = [
  { name: "Bronn", gender: "male", birthday: "1973-03-23" },
  { name: "Reigar", gender: "male", birthday: "1973-11-03" },
  { name: "Eiegon", gender: "male", birthday: "1963-11-03" },
  { name: "Sansa", gender: "female", birthday: "2012-11-03" },
];

console.log(getSortedNames(users));
// ["Bronn", "Eiegon", "Reigar", "Sansa"]

const data = [
  { name: "Jon", gender: "male", birthday: "1980-11-03" },
  { name: "Robb", gender: "male", birthday: "1980-05-14" },
  { name: "Tisha", gender: "female", birthday: "2012-11-03" },
  { name: "Rick", gender: "male", birthday: "2012-11-03" },
  { name: "Joffrey", gender: "male", birthday: "1999-11-03" },
  { name: "Edd", gender: "male", birthday: "1973-11-03" },
];
console.log(getSortedNames(data));
// ["Edd", "Joffrey", "Jon", "Rick", "Robb", "Tisha"]
