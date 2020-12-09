/* getInvalidBooks.js
Using yup library, write the function that takes an array with books and returns invalid of them.
Validating parameters:
- name: string, required
- author: string, required
- pagesCount: number, not required
- link: url, not required
- genre: string, not required but if so must be of the genre list: 'drama', 'horror', 'fantasy', 'classic'.
*/
let yup = require("yup");
const genres = ["drama", "horror", "fantasy", "classic"];

const schema = yup.object().shape({
  name: yup.string().required(),
  author: yup.string().required(),
  pagesCount: yup.number().positive().integer(),
  link: yup.string().url(),
  genre: yup.string().oneOf(genres),
});

const getInvalidBooks = (books) => {
  return books.filter((book) => !schema.isValidSync(book));
};

const books = [
  {
    name: "besi",
    author: "dostoevski",
    pagesCount: 100,
    genre: "drama",
    link: "https://some.ru",
  },
  {
    name: "book",
    author: "author",
  },
  {
    name: "book 2",
    author: "author 2",
    genre: "fiction",
  },
];
const invalidBooks = getInvalidBooks(books);
console.log(invalidBooks); // [ { name: 'book 2', author: 'author 2', genre: 'fiction' } ]
