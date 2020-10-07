/* promisify.js
Write and export by default promisify() function that promisifies asynchronous functions with callbacks.
*/
const promisify = (f) => {
  return function (...args) {
    return new Promise((resolve, reject) => {
      f(...args, (err, data) => (err ? reject(err) : resolve(data)));
    });
  };
};

export default promisify;
