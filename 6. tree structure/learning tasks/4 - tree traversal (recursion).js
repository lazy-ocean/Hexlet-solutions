/* treeTraversal.js
Using preset mkdir, mkfile, isFile, getChildren, getName, getMeta functions (and lodash, if necessary), write recursive functions:
-- printTree() - printing all the tree's files and directories
-- changeOwner() - changing the owner on all the tree's files
*/
/// SAMPLE TREE
const tree = mkdir(
  "/",
  [
    mkdir("etc", [
      mkfile("bashrc", { owner: root }),
      mkfile("consul.cfg", { owner: root }),
    ]),
    mkfile("hexletrc"),
    mkdir("bin", [mkfile("ls", { owner: sam }), mkfile("cat")]),
  ],
  { owner: root }
);

// PRINTING ALL TREE
const printTree = (tree) => {
  console.log(getName(tree));
  if (isFile(tree)) return;
  let children = getChildren(tree);
  children.map((child) => printTree(child));
};
/* Result
 => /
 => etc
 => bashrc
 => consul.cfg
 => hexletrc
 => bin
 => ls
=> cat
*/

// CHANGING OWNERS
const changeOwner = (tree, owner) => {
  let name = getName(tree);
  let meta = _.cloneDeep(getMeta(tree));
  meta.owner = owner;

  if (isFile(tree)) return mkfile(name, meta);
  let children = getChildren(tree);
  let newChildren = children.map((child) => changeOwner(child, owner));

  let newTree = mkDir(name, newChildren, meta);
  return newTree;
};
