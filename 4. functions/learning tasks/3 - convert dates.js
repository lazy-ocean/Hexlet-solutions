/* convert.js
Write and export by default a convert() function that converts dates argumented as arrays of numbers to strings of type "Sat Apr 24 1993".
Your function should take any number of dates.
*/
///////// USING RECURSION
const convert = (first, ...rest) => {
  if (first === undefined && !rest.length) return [];
  let date = new Date(...first);
  return [date.toDateString()].concat(convert(...rest));
};

export default convert;

///////// USING FOR-OF LOOP
const convert = (...dates) => {
  let result = [];
  for (let date of dates) {
    let d = new Date(...date);
    result.push(d.toDateString());
  }
  return result;
};

///////// TESTS

console.log(convert()); // []

const item = [1993, 3, 24];
console.log(convert(item)); // ['Sat Apr 24 1993'];

const coll = [
  [1993, 3, 24],
  [1997, 8, 12],
  [2001, 10, 18],
];
console.log(
  convert(...coll)
); /* [
      'Sat Apr 24 1993',
      'Fri Sep 12 1997',
      'Sun Nov 18 2001',
    ];
  */

const coll1 = [
  [1982, 12, 11],
  [1996, 5, 28],
  [2005, 1, 1],
  [2000, 12, 12],
  [1994, 7, 31],
];
console.log(
  convert(...coll1)
); /* [
      'Tue Jan 11 1983',
      'Fri Jun 28 1996',
      'Tue Feb 01 2005',
      'Fri Jan 12 2001',
      'Wed Aug 31 1994',
    ]
    */
