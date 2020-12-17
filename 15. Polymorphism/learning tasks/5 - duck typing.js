/* keyValueFunctions.js
1. You have a prewritten class FileKV that reads data (in form of object) from argumented path and can store some key - value pairs in that file using get(), set(), unset() and toObject() methods.

2. Write a similar InMemoryKV class that has the same methods but of different type - it stores data in the class without writing it to the file. Constructor gets no path but the object with some key-value pairs to store.

3. Write a swapKeyValue() function that works for both of these classes: it uses their methods to swap key-value pairs on value-key pairs ({key: value } to { value: key })
*/
import fs from "fs";
import _ from "lodash";

///////////////// INMEMORYKV CLASS
class InMemoryKV {
  constructor(initial) {
    this.data = {};
    Object.entries(initial).forEach(([key, value]) => this.set(key, value));
  }
  set(key, value) {
    this.data = { ...this.data, [key]: value };
  }
  unset(key) {
    this.data = _.omit(this.data, key);
  }
  get(key, defaultValue = null) {
    return _.get(this.data, key, defaultValue);
  }
  toObject() {
    return _.cloneDeep(this.data);
  }
}

////////////// SWAP FUNCTION
const swapKeyValue = (obj) => {
  let data = obj.toObject();
  let entries = Object.entries(data).map((item) => item.reverse());
  Object.keys(data).forEach((key) => obj.unset(key));
  entries.forEach(([key, data]) => obj.set(key, data));
  return;
};

///////////// PRESET FILEKV CLASS:
class FileKV {
  constructor(filePath, initial = {}) {
    this.filePath = filePath;
    Object.entries(initial).forEach(([key, value]) => this.set(key, value));
  }
  set(key, value) {
    const content = fs.readFileSync(this.filePath);
    const data = JSON.parse(content);
    const updatedData = { ...data, [key]: value };
    fs.writeFileSync(this.filePath, JSON.stringify(updatedData));
  }
  unset(key) {
    const content = fs.readFileSync(this.filePath);
    const data = JSON.parse(content);
    const updatedData = _.omit(data, key);
    fs.writeFileSync(this.filePath, JSON.stringify(updatedData));
  }
  get(key, defaultValue = null) {
    const content = fs.readFileSync(this.filePath);
    const data = JSON.parse(content);
    return _.get(data, key, defaultValue);
  }
  toObject() {
    const content = fs.readFileSync(this.filePath);
    const data = JSON.parse(content);
    return data;
  }
}
