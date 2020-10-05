/* touch.js
Write and export asynchronous touch() function that creates file is there isn't one by the argumented path. 
*/

import { promises as fs } from "fs";

export const touch = (path) =>
  fs.access(path).catch(() => fs.writeFile(path, ""));
