/* merge.js
Write and export by default merge() function that merges several dictionaires (objects) to the one big dictionary: 
{
  key: [value1, value2, ...];
  key2: [value1, value2, ...];
};

Values are not dublicated and both keys and values should be in the order they appeared in the argumented dictionaires.
*/

///////// OPTION 1 - REDUCE & MAP
var _ = require("lodash");

const merge = (...objects) =>
  objects.reduce((acc, object) => {
    let keys = Object.keys(object);
    keys.map((key) => {
      _.has(acc, key) ? acc[key].push(object[key]) : (acc[key] = [object[key]]);
      acc[key] = _.uniq(acc[key]);
    });
    return acc;
  }, {});

export default merge;

///////// OPTION 1 - LODASH
var _ = require("lodash");

const customizer = (object, value) => _.union(object, [value]);
const merge = (...objects) => _.mergeWith({}, ...objects, customizer);
export default merge;

///////// TESTS
console.log(merge({ a: 1, b: 2 }, { a: 3 }));
// { a: [1, 3], b: [2] }

console.log(merge({ a: 1, b: 2 }, { a: 3, c: 0 }));
// { a: [1, 3], b: [2], c: [0] }

console.log(merge({ a: 1, b: 2, c: 3 }, { a: 3, b: 4 }, { a: 7, c: 1, d: 8 }));
// { a: [1, 3, 7], b: [2, 4], c: [3, 1], d: [8] }

console.log(merge({ a: 1, b: 2, c: 3 }, { a: 3, b: 4 }, { a: 3, b: 2, d: 5 }));
// { a: [1, 3], b: [2, 4], c: [3], d: [5] };

console.log(
  merge(
    { a: 1, b: 2, c: 3 },
    {},
    { a: 3, b: 2, d: 5 },
    { a: 6 },
    { b: 4, c: 3, d: 2 },
    { e: 9 }
  )
);
// { a: [1, 3, 6], b: [2, 4], c: [3], d: [5, 2], e: [9] };

console.log(merge({}, {}, {}, {}));
// {};
