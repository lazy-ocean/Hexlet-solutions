/* dictionary.js
Write and export a number of functions that will work as a dictionary of some sort, using hash table.
For the purpose of this task, your functions should not work with collisions.

-- make(): sets a new dictionary
-- set(map, key, value): adds a new definition to the dictionary (map) as key and value. Return true if addition was successful and false if there were collisions. If false, don't change your dictionary.
-- get(map, key, defaultValue = null): returns the value of the key from the dictionary. Default returns if there're no such key or there was a collision.

Collision works only with keys. Via set(), values can be reassigned.
*/
import crc32 from "crc-32";

export const make = () => [];
export const getIndex = (key) => Math.abs(crc32.str(key)) % 1000;

export const set = (map, key, value) => {
  const definition = [key, value];
  let index = getIndex(key);
  // If there're no collision on key, adding definition to the dictionary, othervise false
  if (map[index] && map[index][0] !== key) {
    return false;
  }
  // if the key is the same, we are set to change the value
  map[index] = definition;
  return true;
};

export const get = (map, key, defaultValue = null) => {
  // the hash of the certain element is always the same, so is index
  let index = getIndex(key);
  // if there's no such key or the key is different, return default
  if (!map[index] || map[index][0] !== key) return defaultValue;
  // othervise getting value from the dictionary
  let [, value] = map[index];
  return value || defaultValue;
};

////////// TEST 1

const map = make();
console.log(get(map, "key")); // null
console.log(get(map, "key", "value")); // value

set(map, "key2", "value2");
console.log(get(map, "key2")); // 'value2'
console.log(get(map, "undefined")); // null

set(map, "key2", "another value");
console.log(get(map, "key2")); // 'another value'

///////// TEST 2
const map = make();

set(map, "aaaaa0.462031558722291", "vvv"); // true
set(map, "aaaaa0.0585754039730588", "boom!"); // false

console.log(get(map, "aaaaa0.462031558722291")); // 'vvv'
console.log(get(map, "aaaaa0.0585754039730588")); // null

set(map, "aaaaa0.462031558722291", "wop");
console.log(get(map, "aaaaa0.462031558722291")); // 'wop'
