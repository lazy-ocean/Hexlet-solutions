/* filterAnagrams.js
Write and export by default filterAnagrams() function that finds all anagrams of the argumented word from the argumented array.
Return [] if there're no anagrams in the array.
*/

/////// OPTION 1 - FOR LOOP
const filterAnagrams = (str, arr) => {
  let result = [];
  const word = str.split("").sort().join("");

  for (const item of arr) {
    let search = item.split("").sort().join("");
    if (search === word) result.push(item);
  }
  return result;
};

export default filterAnagrams;

/////// OPTION 2 - FILTER
const filterAnagrams = (str, arr) => {
  let sorted = (str) => str.split("").sort().join("");
  let word = sorted(str);

  return arr.filter((item) => sorted(item) === word);
};
export default filterAnagrams;

//////// TESTS
console.log(filterAnagrams("abba", ["aabb", "abcd", "bbaa", "dada"])); // ['aabb', 'bbaa']
console.log(
  filterAnagrams("racer", ["crazer", "carer", "racar", "caers", "racer"])
); // ['carer', 'racer']
console.log(filterAnagrams("laser", ["lazing", "lazy", "lacer"])); // []
