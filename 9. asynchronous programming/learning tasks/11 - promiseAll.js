/* getDirectorySize.js
Write and export asynchronous getDirectorySize() function that returns the size of the argumented directory (only files without subdirectories).
This time, use promises.
 */
import path from "path";
import _ from "lodash";
import { promises as fs } from "fs";

//// OPTION 1
export const getDirectorySize = (path) => {
  const promise = fs.readdir(path).then((fileNames) => {
    const filePaths = fileNames.map((fileName) => path.join(path, fileName));
    const promises = filePaths.map(fs.stat);
    return Promise.all(promises);
  });
  return promise.then((stats) =>
    _sumBy(
      stats.filter((stat) => stat.isFile()),
      "size"
    )
  );
};

//// OPTION 2
export const getDirectorySize = (dirPath) =>
  fs
    .readdir(dirPath)
    .then((files) => files.map((file) => fs.stat(path.join(dirPath, file))))
    .then((arr) => Promise.all(arr))
    .then((stats) => stats.filter((stat) => stat.isFile()))
    .then((filtered) => _.sumBy(filtered, "size"));
