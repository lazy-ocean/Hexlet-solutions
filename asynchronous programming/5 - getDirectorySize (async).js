/* getDirectorySize.js
Write and export asynchronous getDirectorySize() function that returns the size of the argumented directory (only files without subdirectories).
Use async library.
 */
import path from "path";
import fs from "fs";
import _ from "lodash";
import async from "async";

export const getDirectorySize = (sourcePath, cb) => {
  fs.readdir(sourcePath, (err1, filesNames) => {
    if (err1) {
      cb(err1);
      return;
    }
    const filePaths = filesNames.map((fileName) =>
      path.join(sourcePath, fileName)
    );
    async.map(filePaths, fs.stat, (err2, stats) => {
      if (err2) {
        cb(err2);
        return;
      }
      const files = stats.filter((stats) => stats.isFile());
      const sizes = files.map((file) => file.size);
      cb(null, _.sumBy(sizes));
    });
  });
};
