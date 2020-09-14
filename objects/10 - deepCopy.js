/* deepCopy.js
Write and export by default deepCopy function that creates a deep clone of the argumented object. Your function should work like lodash _.cloneDeep, but you cannot use it.
*/
import _ from "lodash";

const cloneDeep = (obj) => {
  const result = {};
  const keys = Object.keys(obj);

  for (let key of keys) {
    let value = obj[key];
    result[key] = _.isObject(value) ? cloneDeep(value) : value;
  }
  return result;
};

export default cloneDeep;
