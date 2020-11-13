/* protect.js
There’s a widespread convention that properties and methods prefixed by an underscore _ are internal. They shouldn’t be accessed from outside the object.
So, write a proxy to protect such properties from getting and setting. Throw error if there's an attempt to re-write, get these properties or invalid properties.
*/

//// Example of class to work with
class Course {
  constructor({ name, language, created }) {
    this.language = language;
    this._name = name;
    this._created = created;
  }
  get created() {
    return this._getCreated();
  }
  getName() {
    return `${this.language}: ${this._name}`;
  }
  _getCreated() {
    return this._created;
  }
  setName(name) {
    this._name = name;
  }
}

///// PROXY
const protect = (course) =>
  new Proxy(course, {
    get: function (target, prop) {
      if (prop.startsWith("_")) throw new Error("Error");
      if (prop in target) {
        let value = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
      } else {
        throw new Error("Error");
      }
    },
    set(target, prop, val) {
      if (prop.startsWith("_")) {
        throw new Error("Error");
      } else {
        target[prop] = val;
        return true;
      }
    },
  });
