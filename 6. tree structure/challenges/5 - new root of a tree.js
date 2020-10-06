const tree = [
  "A",
  [
    ["B", [["D"]]],
    ["C", [["E"], ["F"]]],
  ],
];
const tree1 = [
  "A",
  [
    ["B", [["D"]]],
    ["C", [["E"], ["F"]]],
  ],
];

const makeGraph = (tree, parent) => {
  let [key, values] = tree;

  if (!values) return { [key]: [parent] };
  const flatValues = _.flatten(values);
  let neighbours = [...flatValues, parent].filter(
    (neighbour) => neighbour && !_.isArray(neighbour)
  );
  const joints = values.reduce(
    (acc, value) => ({ ...acc, ...makeGraph(value, key) }),
    {}
  );

  return { [key]: neighbours, ...joints };
};

const makeNewTree = (oldTree, root) => {
  let graph = makeGraph(oldTree);
  console.log(graph);
  let keys = Object.keys(graph);

  let iter = (item, tree) => {
    if (tree.includes(item)) return tree;
    tree.push(item);
    const neighbours = graph[root];
    const filter = neighbours.filter((neighbour) => !tree.includes(neighbour));
    return filter.map((neighbour) => [tree, [iter(neighbour, tree)]]);
  };
  return iter(root, []);
};
console.log(makeNewTree(tree, "B"));
