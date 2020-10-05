/* getTypes.js
Write and export asynchronous getTypes() function that takes paths and returns an array with types of object by those paths (directory or file). If the path is wrong, the type is null.
*/
import { promises as fs } from "fs";

const initPromise = Promise.resolve([]);

export const getTypes = (paths) => {
  return paths.reduce((acc, path) => {
    const newAcc = acc.then((contents) =>
      fs
        .stat(path)
        .then((stats) =>
          stats.isDirectory()
            ? contents.concat("directory")
            : contents.concat("file")
        )
        .catch(() => contents.concat(null))
    );
    return newAcc;
  }, initPromise);
};
