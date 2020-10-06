/* getHiddenFilesCount.js
Using preset mkdir, mkfile, isFile, getChildren, getName functions (and lodash, if necessary), write a function that returns the number of hidden files of the tree (in Linux the hidden file's name starts with the '.').
*/
//
var _ = require("lodash");

const getHiddenFiles = (tree) => {
  if (isFile(tree)) {
    return _.startsWith(getName(tree), ".") ? 1 : 0;
  }
  const children = getChildren(tree);
  const hiddenChildrenCount = children.map(getHiddenFiles);
  return _.sum(hiddenChildrenCount);
};

export default getHiddenFiles;

/////// TESTS
const tree1 = mkdir("/", [
  mkdir("etc", [
    mkdir("apache"),
    mkdir("nginx", [mkfile(".nginx.conf", { size: 800 })]),
    mkdir(".consul", [
      mkfile(".config.json", { size: 1200 }),
      mkfile("data", { size: 8200 }),
      mkfile("raft", { size: 80 }),
    ]),
  ]),
  mkfile(".hosts", { size: 3500 }),
  mkfile("resolve", { size: 1000 }),
]);

console.log(getHiddenFiles(tree1)); // 3

const tree2 = mkdir("/", [
  mkdir(".etc", [
    mkdir(".apache"),
    mkdir("nginx", [mkfile("nginx.conf", { size: 800 })]),
  ]),
  mkdir(".consul", [
    mkfile("config.json", { size: 1200 }),
    mkfile(".raft", { size: 80 }),
  ]),
  mkfile("hosts", { size: 3500 }),
  mkfile("resolve", { size: 1000 }),
]);

console.log(getHiddenFiles(tree1)); // 1
