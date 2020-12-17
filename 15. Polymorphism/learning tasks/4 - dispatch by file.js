/* DatabaseConfigLoader.js
Write and export by default DatabaseConfigLoader class:
--- it takes a path to the directory with config files
--- directory has 4 different files for the specific environments: custom, development, preproduction and production.
--- class had a load() method that takes environment as a string and should return the correct data from the environment config json.
--- environment config jsons may be interpolated: in this case it has 'extend" key with the name of the environment that should also be returned. In this case, return one object with data from all of the extended and original config jsons with the priority on the original environment json data without 'extend' key.
Json filenames are of this template = 'database.$environment.json
*/
import fs from "fs";
import path from "path";
import _ from "lodash";

class DatabaseConfigLoader {
  constructor(configPath) {
    this.configPath = configPath;
  }
  load(env) {
    const filename = `database.${env}.json`;
    const pathToFile = path.join(this.configPath, filename);
    const raw = fs.readFileSync(pathToFile);
    let config = JSON.parse(raw);
    if (Object.keys(config).includes("extend")) {
      let xtnd = config.extend;
      return { ...this.load(xtnd), ..._.omit(config, ["extend"]) };
    } else return config;
  }
}
