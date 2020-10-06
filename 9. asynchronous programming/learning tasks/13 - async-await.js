/* exchange.js
Write and export asynchronous exchange() function that exchanges content of two files.
*/
import { promises as fs } from "fs";

export const exchange = async (file1, file2) => {
  const reading1 = fs.readFile(file1, "utf-8");
  const reading2 = fs.readFile(file2, "utf-8");
  const [data1, data2] = await Promise.all([reading1, reading2]);
  const writing1 = fs.writeFile(file1, data2);
  const writing2 = fs.writeFile(file2, data1);
  await Promise.all([writing1, writing2]);
};
