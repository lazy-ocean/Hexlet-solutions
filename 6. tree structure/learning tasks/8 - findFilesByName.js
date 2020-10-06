/* findFilesByName.js
Using preset mkdir, mkfile, isFile, getChildren, getName, getMeta functions, write a function that takes a tree and a string. Your function should find files with names containing the argumented string and return the list of full paths to those files.
*/
const findFilesByName = (tree, str) => {
  const iteration = (item, acc) => {
    const name = getName(item);
    if (isFile(item)) {
      if (name.includes(str)) {
        return path.join(acc, name);
      }
      return [];
    }
    const children = getChildren(item);
    return children.flatMap((child) => iteration(child, path.join(acc, name)));
  };

  return iteration(tree, "");
};

//////// TESTS
const tree = mkdir("/", [
  mkdir("etc", [
    mkdir("apache"),
    mkdir("nginx", [mkfile("nginx.conf", { size: 800 })]),
    mkdir("consul", [
      mkfile("config.json", { size: 1200 }),
      mkfile("data", { size: 8200 }),
      mkfile("raft", { size: 80 }),
    ]),
  ]),
  mkfile("hosts", { size: 3500 }),
  mkfile("resolve", { size: 1000 }),
]);

console.log(findFilesByName(tree, "co"));
// ['/etc/nginx/nginx.conf', '/etc/consul/config.json']

console.log(findFilesByName(tree, "toohard"));
// []

console.log(findFilesByName(tree, "data"));
// ['/etc/consul/data']
