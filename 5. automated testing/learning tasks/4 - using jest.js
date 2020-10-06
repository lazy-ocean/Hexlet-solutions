/* tests/without.test.js
Using Jest framework write tests for the without(arr, values) function that takes an array and returns its copy but without the argumented values (could be any number).
The function works just like _.without of lodash:
https://lodash.com/docs/4.17.15#without
=> _.without([2, 1, 2, 3], 1, 2); // [3]
*/
// prettier-ignore
test("without", () => {
    // If the function removes the value
    expect(without(['meow', 'purr', 'mrrr', 'woof'], 'woof')).toEqual(['meow', 'purr', 'mrrr']);
    // If the function removes nothing when there's no argumented value
    expect(without(['meow', 'purr', 'mrrr', 'woof'])).toEqual(['meow', 'purr', 'mrrr', 'woof']);
    // If the function removes nothing when there's no such value in the array
    expect(without(['meow', 'purr', 'mrrr', 'woof'], 'honk')).toEqual(['meow', 'purr', 'mrrr', 'woof']);
    // If the function removes nothing when the array is empty
    expect(without([], 'honk')).toEqual([]);
    // If the function removes two values
    expect(without(['meow', 'purr', 'mrrr', 'woof'], 'purr', 'mrrr')).toEqual(['meow', 'woof']);
    // If the function removes value and do nothing with the other one that is not in the array
    expect(without(['meow', 'purr', 'mrrr', 'woof'], 'honk', 'woof')).toEqual(['meow', 'purr', 'mrrr']);
    // If the function removes all instances of the value
    expect(without(['meow', 'purr', 'mrrr', 'woof', 'woof'], 'woof')).toEqual(['meow', 'purr', 'mrrr']);
  });
