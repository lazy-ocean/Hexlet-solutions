/* downcaseFileNames.js
Using preset mkdir, mkfile, isFile, getChildren, getName, getMeta functions (and lodash, if necessary), write a function that brings to the lower case all FILES names (not directories) and returns the modified tree.
*/

const downcaseFileNames = (tree) => {
  const name = getName(tree);
  const meta = _.cloneDeep(getMeta(tree));
  if (isFile(tree)) return mkfile(name.toLowerCase(), meta);

  const children = getChildren(tree);
  const newChildren = children.map((child) => downcaseFileNames(child));

  const newTree = mkdir(name, newChildren, meta);
  return newTree;
};

export default downcaseFileNames;
