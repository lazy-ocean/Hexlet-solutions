/* bind.js
Write and export by default a bind() function that works exactly like bind() method. You can use call() or apply() methods.
*/
const bind = (obj, fn) => (...args) => fn.apply(obj, args);

// FULL VERSION
const bind = (obj, fn) => {
  // bind execute another function that collects all the arguments ...
  return (funct = (...args) => {
    //... which are applied in fn function with the context object.
    return fn.apply(obj, args);
  });
};

////// TESTS
const fnWithContext = bind(obj, fn);
console.log(fnWithContext(3)); // 8
console.log(fnWithContext(0)); // 5
console.log(fnWithContext.call({ number: 11 }, 3)); // 8

const fn2 = function fn(number1, number2) {
  return number1 + this.number + number2;
};

const fn2WithContext = bind(obj, fn2);
console.log(fn2WithContext(3, 1)); // 9
console.log(fn2WithContext(0, -1)); // 4
console.log(fn2WithContext.call({ number: 11 }, 3, 8)); // 16
