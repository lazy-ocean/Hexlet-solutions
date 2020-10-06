/* unionFiles.js
Using async waterfall method (https://caolan.github.io/async/v3/docs.html#waterfall) write unionFiles() function that reads data from two argumented files (paths) and merges it into new one placed by the also argumented path.
unionFiles(inputPath1, inputPath2, outputPath, cb)
 */
import fs from "fs";
import async from "async";

export const unionFiles = (inputPath1, inputPath2, outputPath, cb) =>
  async.waterfall(
    [
      (cb) => {
        fs.readFile(inputPath1, (err1, data1) => cb(err1, data1));
      },
      (data1, cb) => {
        fs.readFile(inputPath2, (err2, data2) => cb(err2, data1, data2));
      },
      (data1, data2, cb) => {
        fs.writeFile(outputPath, `${data1}${data2}`, (err3, result) =>
          cb(err3, result)
        );
      },
    ],
    cb
  );
