/* genDiff.js
Write and export by default genDiff() function that takes two objects (initial and final edition) and returns the difference between them by the following template: your function should return an object with all keys with the description of changes:
-- added: the key appeared only in the second object
-- deleted: the key disappeared in the second object
-- changed: the key was in both of objects but changed in the second one
-- unchanged: the key was in both of objects and is the same in both.
*/
const genDiff = (obj1, obj2) => {
  let result = {};
  const keys = _.union(Object.keys(obj1), Object.keys(obj2));
  for (let key of keys) {
    if (_.has(obj2, key) && _.has(obj1, key)) {
      result[key] = obj1[key] === obj2[key] ? "unchanged" : "changed";
    } else {
      result[key] = !_.has(obj1, key) ? "added" : "deleted";
    }
  }
  return result;
};

export default genDiff;

//////// TESTS
console.log(genDiff({}, {})); // {}

console.log(
  genDiff(
    { one: "eon", two: "two", four: true },
    { two: "own", zero: 4, four: true }
  )
);
/*
{
  one: 'deleted',
  two: 'changed',
  four: 'unchanged',
  zero: 'added',
}
*/

console.log(genDiff({ one: "eon" }, { two: "own" }));
/*
{
  one: 'deleted',
  two: 'added',
};
*/

console.log(genDiff({ one: "eon", two: "two" }, { two: "own", one: "one" }));
/*
{
  one: 'changed',
  two: 'changed',
};
*/

console.log(genDiff({}, { two: "own" }));
/*
{
  two: 'added',
}
*/

console.log(genDiff({ one: "eon" }, {}));
/*
{
  one: 'deleted',
};
*/
