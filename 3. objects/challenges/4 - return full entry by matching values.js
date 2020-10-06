/* findWhere.js
Write and export by default findWhere() function that takes an array of objects-books and an object of some pairs of key: value. Your function should return a matching book for all these argumented pairs (or this pair), if there's no match, return null.
*/

const findWhere = (books, search) => {
  const objKeys = Object.keys(search);
  for (const book of books) {
    let match = 0;
    for (let key of objKeys) {
      if (book[key] === search[key]) match += 1;
    }
    if (match === objKeys.length) return book;
  }
  return null;
};

export default findWhere;

/////////// TESTS
const data = [
  { title: "Book of Fooos", author: "FooBar", year: 1111 },
  { title: "Cymbeline", author: "Shakespeare", year: 1611 },
  { title: "The Tempest", author: "Shakespeare", year: 1611 },
  { title: "Book of Foos Barrrs", author: "FooBar", year: 2222 },
  { title: "Still foooing", author: "FooBar", year: 3333 },
  { title: "Happy Foo", author: "FooBar", year: 4444 },
];

const where1 = { author: "Shakespeare", year: 1611 };
console.log(findWhere(data, where1)); // { title: 'Cymbeline', author: 'Shakespeare', year: 1611 }

const where2 = { author: "undefined", year: 1611 };
console.log(findWhere(data, where2)); // null

const where3 = { year: 4444 };
console.log(findWhere(data, where3)); // { title: 'Happy Foo', author: 'FooBar', year: 4444 }

const where4 = { author: "Shakespeare", year: 1611, title: "The Tempest" };
console.log(findWhere(data, where4)); // { title: 'The Tempest', author: 'Shakespeare', year: 1611 }
