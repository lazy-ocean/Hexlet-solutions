/* compressPictures.js
Using preset mkdir, mkfile, isFile, getChildren, getName, getMeta functions (and lodash, if necessary), write and export compressImages() function that takes a directory, finds pictures inside of it and compresses it:
-- compress = reducing meta's { size } in half
-- pictures are the only files with .jpg
-- your function should return the whole directory as it was, not only pictures.
Your task is not to write functions but to exactly repeat and update a file tree using it.
Mind that you should recreate the tree by copying it.
*/
////// SAMPLE TREE
const tree = mkdir("my documents", [
  mkfile("avatar.jpg", { size: 100 }),
  mkfile("passport.jpg", { size: 200 }),
  mkfile("family.jpg", { size: 150 }),
  mkfile("addresses", { size: 125 }),
  mkdir("presentations"),
]);

//// FUNCTION
export const compressImages = (tree) => {
  // getting all children of the directory
  const children = getChildren(tree);
  // getting new array of children so the old one doesn't change
  const newChildren = children.map((child) => {
    // copying name and metadata
    const name = getName(child);
    const newMeta = _.cloneDeep(getMeta(child));
    // if jpg, changing metadata
    if (name.slice("-4") === ".jpg") newMeta["size"] = newMeta["size"] / 2;
    // if file, creating a new file with the old name and new meta, if dir - copying everything as it was
    return isFile(child)
      ? mkfile(name, newMeta)
      : mkdir(name, getChildren(child), newMeta);
  });
  // cloning the tree's meta
  const newMetaDir = _.cloneDeep(getMeta(tree));
  // creating new one, using the old name, new children and old meta
  const tree2 = mkdir(getName(tree), newChildren, newMetaDir);
  return tree2;
};
