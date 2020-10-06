/* du.js
Using preset mkdir, mkfile, isFile, getChildren, getName, getMeta functions (and lodash, if necessary), write an analog of the du command: a function that returns takes a file tree and returns the list of the children (first level, both files and directories) with their overall sizes. The size of directories sums up the size of its inside files of all children directories. The returning list should be sorted by size: from "heavy" to "light".
See tests for examples.
du manual - https://man7.org/linux/man-pages/man1/du.1.html
*/
var _ = require("lodash");

const findSize = (item) => {
  if (isFile(item)) {
    const meta = _.cloneDeep(getMeta(item));
    return meta.size;
  }
  const children = getChildren(item);
  const sizeCount = children.map(findSize);
  return _.sum(sizeCount);
};

const du = (tree) => {
  const children = getChildren(tree);
  const result = children.map((child) => [getName(child), findSize(child)]);
  return result.sort((a, b) => b[1] - a[1]);
}

export default du;

/////////// TESTS
const tree = mkdir('/', [
  mkdir('etc', [
    mkdir('apache'),
    mkdir('nginx', [
      mkfile('nginx.conf', { size: 800 }),
    ]),
    mkdir('consul', [
      mkfile('config.json', { size: 1200 }),
      mkfile('data', { size: 8200 }),
      mkfile('raft', { size: 80 }),
    ]),
  ]),
  mkfile('hosts', { size: 3500 }),
  mkfile('resolve', { size: 1000 }),
]);

console.log(du(tree)) 
/* [
  [ 'etc', 10280 ],
  [ 'hosts', 3500 ],
  [ 'resolve', 1000 ] 
] */

console.log(du(getChildren(tree)[0]));
/* [
  [ 'consul', 9480 ],
  [ 'nginx', 800 ],
  [ 'apache', 0 ] 
];