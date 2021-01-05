/* ConfigFactory.js
Create a factory for 3 classes: Config, JsonParser and YamlParser. Factory takes a path to the json/jaml file and return new Config object. Config (premade class) takes a string with data from yaml/json and has getValue(key) method used to return a value by argumented key.
Write a factory, JsonParser and YamlParser classes.
*/
import yaml from "js-yaml";
import path from "path";
import fs from "fs";

///// PREMADE CONFIG CLASS
class Config {
  constructor(data = {}) {
    this.data = data;
  }

  getValue(key) {
    const result = this.data[key];
    if (result instanceof Object) {
      return new Config(result);
    }
    return result;
  }
}

///////// FACTORY
class ConfigFactory {
  static factory(filepath) {
    let file = fs.readFileSync(filepath, "utf8");
    let type = path.extname(filepath).slice(1);
    let parser = new mapping[type](file);
    let data = parser.getData();
    return new Config(data);
  }
}

////////// JSON & YAML PARSERS
class JsonParser {
  constructor(file) {
    this.data = JSON.parse(file);
  }
  getData() {
    return this.data;
  }
}

class YamlParser {
  constructor(file) {
    this.data = yaml.safeLoad(file);
  }
  getData() {
    return this.data;
  }
}
