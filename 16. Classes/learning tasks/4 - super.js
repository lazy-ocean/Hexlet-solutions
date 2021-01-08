/* SmartFileInfo.js
You have prewritten FileInfo class that has getSize() method that returns size of the file in bytes. Extend this class using SmartFileInfo class: with its getSize('kb' || 'b') method it should be able to return the size of the file in kilobytes or bytes or throw error on any other argument.
*/

////////// Prewritten FileInfo class
class FileInfo {
  constructor(filePath) {
    this.filePath = filePath;
    this.fileStat = fs.statSync(filePath);
  }

  getSize() {
    return this.fileStat.size;
  }
}

///////// SmartFileInfo class
class SmartFileInfo extends FileInfo {
  getSize(unit = "b") {
    switch (unit) {
      case "kb":
        return super.getSize() / 1024;
      case "b":
        return super.getSize();
      default:
        throw new Error("Wrong unit");
    }
  }
}
