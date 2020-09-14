/* convert.js
Write and export by default function that takes an array of some depth and returns an object made out of the array's structure:
['1', '2'] - transforms to { 1: '2'}
['1', ['2', '3']] - transforms to { 1: { 2: '3'}}
See tests for more examples.
*/
const convert = (arr) => arr.reduce(callback, {});

let callback = (acc, [key, value]) => {
  acc[key] = Array.isArray(value) ? convert(value) : value;
  return acc;
};

export default convert;

///////// TESTS
const tree1 = [];
console.log(convert(tree1)); // {}

const tree2 = [["key", "value"]];
console.log(convert(tree2)); // { key: 'value' }

const tree3 = [
  ["key2", "value2"],
  ["key", "value"],
];
console.log(convert(tree3)); // { key: 'value', key2: 'value2' }*/

const tree4 = [
  ["key2", "value2"],
  [
    "anotherKey",
    [
      ["key2", false],
      ["innerKey", []],
    ],
  ],
  ["key", null],
  [
    "anotherKey2",
    [
      [
        "wow",
        [
          ["one", "two"],
          ["three", "four"],
        ],
      ],
      ["key2", true],
    ],
  ],
];
console.log(convert(tree4));
/*
{
    anotherKey: {
      innerKey: {}, key2: false,
    },
    anotherKey2: {
      key2: true,
      wow: {
        one: 'two',
        three: 'four',
      },
    },
    key: null,
    key2: 'value2',
}
*/
