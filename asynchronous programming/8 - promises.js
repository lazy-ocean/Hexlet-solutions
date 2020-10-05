/* reverse.js
Write and export asynchronous reverse() function that reverses the order of the strings in the file.
*/
import { promises as fs } from "fs";

export const reverse = (src) => {
  return fs
    .readFile(src, "utf-8")
    .then((data1) => data1.split("\n").reverse().join("\n"))
    .then((data2) => fs.writeFile(src, data2));
};
