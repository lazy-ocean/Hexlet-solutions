/* bqs.js
A query string is a part of a URL that assigns values to specified parameters. It starts from '?' and goes to the very end of the URL.
Query string: page=5&per=10
https://ru.hexlet.io/blog?per=10&page=5

Write and export by default bqs() function that takes an object with parameters and returns a query string.
*/

const bqs = (obj) => {
  let query = "";
  const keys = Object.keys(obj).sort();
  for (let key of keys) {
    query.length
      ? (query = `${query}&${key}=${obj[key]}`)
      : (query = `${query}${key}=${obj[key]}`);
  }
  return query;
};

export default bqs;

////// TESTS
console.log(bqs({ per: 10, page: 1 })); // page=1&per=10
console.log(bqs({ param: "all", param1: true })); // param=all&param1=true
console.log(bqs({})); // ''
console.log(bqs({ page: 1 })); // 'page=1'
console.log(bqs({ per: 10, page: 1 })); // 'page=1&per=10'
console.log(
  bqs({
    a: 10,
    s: "Wow",
    d: 3.2,
    z: "89",
  })
); // 'a=10&d=3.2&s=Wow&z=89'
console.log(bqs({ param: "all", param1: true })); // 'param=all&param1=true'
