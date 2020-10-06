/* itinerary.js
Write and export by default itinerary() function that returns a route between two cities.
Function takes:
--- a tree of cities
--- start city
--- goal city
Function returns an array of cities in such order it takes to go from one two another. See tests for examples.
*/

const itinerary = (tree, a, b) => {
  let startPath = iteration(tree, [], a).reverse();
  let finishPath = iteration(tree, [], b);
  let sameUnit = _.intersection(startPath, finishPath)[0];
  let index1 = _.indexOf(startPath, sameUnit);
  let index2 = _.indexOf(finishPath, sameUnit);
  return _.union(startPath.splice(0, index1 + 1), finishPath.slice(index2));
};

const iteration = (item, path, city) => {
  if (item.includes(city)) {
    return [...path, city];
  }
  if (item.length === 1) return [];

  const children = item[1];
  return children.flatMap((child) =>
    iteration(child, [...path, item[0]], city)
  );
};

export default itinerary;

///// TESTS
const tree = [
  "Moscow",
  [
    ["Smolensk"],
    ["Yaroslavl"],
    [
      "Voronezh",
      [
        ["Liski"],
        ["Boguchar"],
        ["Kursk", [["Belgorod", [["Borisovka"]]], ["Kurchatov"]]],
      ],
    ],
    ["Ivanovo", [["Kostroma"], ["Kineshma"]]],
    ["Vladimir"],
    ["Tver", [["Klin"], ["Dubna"], ["Rzhev"]]],
  ],
];

console.log(itinerary(tree, "Dubna", "Kostroma"));
// ['Dubna', 'Tver', 'Moscow', 'Ivanovo', 'Kostroma']

console.log(itinerary(tree, "Borisovka", "Kurchatov"));
// ['Borisovka', 'Belgorod', 'Kursk', 'Kurchatov']

console.log(itinerary(tree, "Rzhev", "Moscow"));
// ['Rzhev', 'Tver', 'Moscow'];

console.log(itinerary(tree, "Ivanovo", "Kursk"));
// ['Ivanovo', 'Moscow', 'Voronezh', 'Kursk'];

console.log(itinerary(tree, "Rzhev", "Borisovka"));
//  ['Rzhev', 'Tver', 'Moscow', 'Voronezh', 'Kursk', 'Belgorod', 'Borisovka'];
