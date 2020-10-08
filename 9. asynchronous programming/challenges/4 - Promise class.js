/* CustomPromise.js
Write and export by default CustomPromise class that takes a callback(resolve) function. It should work without async, just with the chain of execution using this() method;
*/
class CustomPromise {
  constructor(executor) {
    this.value = null;
    executor(this.resolve.bind(this));
  }
  resolve(result) {
    this.value = result;
  }
  then(callback) {
    return new CustomPromise((resolve) => {
      resolve(callback(this.value));
    });
  }
}

export default CustomPromise;
