/* prettifyHTML.test.js
Write tests for the function that prettifies HTML file and re-writes it.
Take before and after files in the app/__fixtures__ directory.
*/
const getFixturePath = (filename) =>
  path.join("app", "..", "__fixtures__", filename);
const resultPath = await getFixturePath("after.html");
let dataPath = await getFixturePath("before.html");
let beforeData = await fs.readFile(dataPath, "utf-8");

test("prettify html", async () => {
  let result = await fs.readFile(resultPath, "utf-8");
  await prettifyHTMLFile(dataPath);
  let newData = await fs.readFile(dataPath, "utf-8");
  expect(newData).toEqual(result);
});

afterEach(async () => {
  await fs.writeFile(dataPath, beforeData);
});
