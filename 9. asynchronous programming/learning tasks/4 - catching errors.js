/* move.js
Write and export move() function that moves file from one folder to another. Its arguments include:
--- outputPath - from where file is taken
--- inputPath - where file is being moved
--- callback function
Your function should read the file, create new one and write data to it and delete original file.
Catch errors on every step.
*/
import fs from "fs";

export const move = (inputPath, outputPath, cb) => {
  fs.readFile(inputPath, "utf-8", (error1, data) => {
    if (error1) {
      cb(error1);
      return;
    }
    fs.writeFile(outputPath, data, (error2) => {
      if (error2) {
        cb(error2);
        return;
      }
      fs.unlink(inputPath, cb);
    });
  });
};
