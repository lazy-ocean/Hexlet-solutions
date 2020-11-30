/* filesCount.test.js
Test filesCount() function that returns the number of files in the __fixtures__/count directory (there're 4). Mind that the function maintains its own log, which you awoid during testing. Write tests that way so the logs remain untouched.

Function getFilesCount(path, log = writeDataToFile) takes path to directory and a function for the log writing.
*/
const getFixturePath = (name) => path.join("__fixtures__", name);

test("count files, nested dir", async () => {
  let path = await getFixturePath("count");
  let filesCount = await getFilesCount(path, () => {});
  expect(filesCount).toBe(4);
});
