/* sortDeps.js
Write and export by default function that takes json with libraries and dependencies and returns the order of its installation.
The order should be primarilly from top to botton (not libraries with no dependencies first, for example)
*/
const adaptTree = (tree) => {
  let entries = Object.entries(tree);
  let result = [];
  for (let item of entries) {
    let chunk = {};
    let [name, dependencies] = item;
    chunk["name"] = name;
    chunk["dependencies"] = dependencies;
    result.push(chunk);
  }
  return result;
};

const sortDeps = (startTree) => {
  const tree = adaptTree(startTree);
  let list = [];

  const getDependencies = (name) => {
    const item = tree.find((item) => item.name === name);
    const dependency = item?.dependencies;
    if (dependency && dependency.length) {
      dependency.forEach((item) => {
        if (list.indexOf(item) === -1) {
          getDependencies(item);
        }
      });
    }
    list.push(name);
  };

  tree.forEach((item) => {
    if (list.indexOf(item.name) === -1) {
      getDependencies(item.name);
    }
  });

  return list;
};

export default sortDeps;

///// TESTS
const deps1 = {
  mongo: [],
  tzinfo: ["thread_safe"],
  uglifier: ["execjs"],
  execjs: ["thread_safe", "json"],
  redis: [],
};

console.log(sortDeps(deps1));
// => ['mongo', 'thread_safe', 'tzinfo', 'json', 'execjs', 'uglifier', 'redis'];

const deps2 = {
  wrong: ["predicated", "sexp_processor"],
  xpath: ["nokogiri"],
  predicated: ["htmlentities"],
  sexp_processor: [],
  nokogiri: ["wrong"],
  virtus: [],
};
console.log(sortDeps(deps2));
// ['htmlentities', 'predicated', 'sexp_processor', 'wrong', 'nokogiri', 'xpath', 'virtus'];

const deps3 = {
  wrong: ["predicated", "sexp_processor"],
  xpath: ["nokogiri"],
  predicated: ["htmlentities"],
  sexp_processor: [],
  nokogiri: ["wrong", "libxml2"],
  libxml2: ["libxslt"],
  virtus: [],
};
console.log(sortDeps(deps3));
// ['htmlentities', 'predicated', 'sexp_processor', 'wrong', 'libxslt', 'libxml2', 'nokogiri', 'xpath', 'virtus'];
