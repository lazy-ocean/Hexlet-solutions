/* getMenCountByYear.js
Write and export by default getMenCountByYear() function that takes a list of users and returns an object of years of birth with the count of males born that year.
Use lodash if necessary.
*/
var _ = require("lodash");

const callback = (acc, { gender, birthday }) => {
  let birth = birthday.slice(0, 4);
  if (gender === "male") {
    _.has(acc, birth) ? (acc[birth] += 1) : (acc[birth] = 1);
  }
  return acc;
};

const getMenCountByYear = (users) => users.reduce(callback, {});
export default getMenCountByYear;

////// TESTS
const users = [
  { name: "Bronn", gender: "male", birthday: "1973-03-23" },
  { name: "Reigar", gender: "male", birthday: "1973-11-03" },
  { name: "Eiegon", gender: "male", birthday: "1963-11-03" },
  { name: "Sansa", gender: "female", birthday: "2012-11-03" },
  { name: "Jon", gender: "male", birthday: "1980-11-03" },
  { name: "Robb", gender: "male", birthday: "1980-05-14" },
  { name: "Tisha", gender: "female", birthday: "2012-11-03" },
  { name: "Rick", gender: "male", birthday: "2012-11-03" },
  { name: "Joffrey", gender: "male", birthday: "1999-11-03" },
  { name: "Edd", gender: "male", birthday: "1973-11-03" },
];

console.log(getMenCountByYear);
/*
{
  1973: 3,
  1963: 1,
  1980: 2,
  2012: 1,
  1999: 1,
}
*/
