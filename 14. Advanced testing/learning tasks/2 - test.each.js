/* testeach.test.js
Write tests for the function (toHtmlList() ) that parses different types of text files with list (like 'one, two, three') to html.
Compare results of function on three files with result.html that is in the same directory.
*/
import { promises as fs } from "fs";

/// getting data from file by by restoring the path. '/app' is the root directory
const getData = async (filename) => {
  const filepath = path.join("app", "..", "__fixtures__", filename);
  const content = await fs.readFile(filepath, "utf-8");
  return content.trim();
};

// reading result html data
const result = await getData("result.html");

test.each([["list.csv"], ["list.json"], ["list.yml"]])(
  "to html",
  async (file) => {
    let data = getData(file);
    expect(data).toEqual(result);
  }
);
