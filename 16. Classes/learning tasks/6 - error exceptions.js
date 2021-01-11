/* File.js
1) Write File class: it has read() method that reads file using fs module. It should be able to catch two errors - when a file doesn't exist and when it is not accessible - and throw new NotExistsError and new NotReadableError classes in those cases.
2) Write FileError class (inheriting from Error), NotExistsError and NotReadableError.
3) Write readFiles() function that takes filepaths (array) and returns an array of its data (null if file not exists or not accessible).
*/
import fs from "fs";

class File {
  constructor(path) {
    this.filepath = path;
  }
  read() {
    try {
      return fs.readFileSync(this.filepath);
    } catch (e) {
      if (!fs.existsSync(this.filepath)) {
        throw new NotExistsError();
      } else if (!fs.accessSync(this.filepath)) {
        throw new NotReadableError();
      }
    }
  }
}

class FileError extends Error {
  constructor(message) {
    super(message);
    this.name = "File error";
  }
}
class NotExistsError extends FileError {
  // no additional code needed
}
class NotReadableError extends FileError {
  // no additional code needed
}

const readFiles = (filepaths) => {
  return filepaths.map((filepath) => {
    try {
      let file = new File(filepath);
      return file.read();
    } catch (e) {
      return null;
    }
  });
};
