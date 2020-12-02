/* mock.test.js
Test getfilesCount() function that returns the number of files in the __fixtures__/nested directory: this time we want to test the log maintaining feature of the function. To test, you should swap it with mock.

Function getFilesCount(path, log = writeDataToFile) takes path to directory and a function for the log writing.
*/
import path from "path";

const getFixturePath = (name) => path.join("__fixtures__", name);
test("getFilesCount", async () => {
  const callback = jest.fn();
  let path = await getFixturePath("nested");
  getFilesCount(path, callback);
  expect(callback).toHaveBeenCalledTimes(1);
  expect(callback).toHaveBeenCalledWith("Go!");
});
