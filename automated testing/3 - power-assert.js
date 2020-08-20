/* tests/indexOf.test.js
Write tests for the indexOf(items, value, [fromIndex=0]) function that returns an index of the argumented value from the [items] starting from the argumented index, 0 by default. The function works just like _.indexOf of lodash:
https://lodash.com/docs/4.17.15#indexOf
indexOf([1, 2, 1, 2], 2); // 1
indexOf([1, 2, 1, 2], 2, 2); // 3
indexOf([2, 'one', 'cat', false], 8); // -1

Use power-assert library.
*/
const assert = require("assert");

// If the function returns the correct index of item
assert(indexOf(["one", "two", "three", "one"], "three", 1) === 2);
// If the function returns the correct index of item minding argumented starting index
assert(indexOf(["one", "two", "three", "one"], "one", 1) === 3);
// If the function returns the correct index of item using default starting index = 0
assert(indexOf(["one", "two", "three", "one"], "one") === 0);
// If the function returns the correct index of the missing item = -1
assert(indexOf(["one", "two", "three", "one"], "four") === -1);
