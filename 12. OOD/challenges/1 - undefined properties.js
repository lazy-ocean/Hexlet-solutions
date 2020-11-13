/* undefinedProperties.js
Write a function that takes an object and allows to get any property of object. If there're no such property, don't throw errors or return undefined, return Proxy object.
*/
const createObject = (object) => {
  const handler = {
    get: (target, prop) => {
      if (_.isObject(target[prop])) {
        return new Proxy(target[prop], handler);
      } else {
        return _.has(target, prop) ? target[prop] : new Proxy({}, handler);
      }
    },
  };
  return new Proxy(object, handler);
};
