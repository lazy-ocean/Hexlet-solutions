/* read.test.js
Write a couple of tests for the fs.readdir() or its analog function (read() in your case) that checks that a function throws errors when there're no such directory ('/undefined) or the path to file is argumented (/file).
*/

test("undefined", () => {
  expect(() => {
    read("/undefined");
  }).toThrow();
});

test("file", () => {
  expect(() => {
    read("/file");
  }).toThrow();
});
