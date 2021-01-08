/* storages.js
In this task you have to break Liskov substition principle just for the example of how not to do.
Imagine a library that works with 'key: value' storages. All storages has set(key, value), get(key) and count() methods.
You have two preset such storages. Write a third one, GoogleStorage, that throws error on count()

NOTE: what you will be doing here, breaks the following restriction: Postconditions cannot be weakened in the subtype.
*/

////////// GoogleStorage class
class GoogleStorage {
  constructor(elements = {}) {
    this.elements = elements;
  }

  get(key) {
    return this.elements[key];
  }

  set(key, value) {
    this.elements[key] = value;
  }

  count() {
    throw new Error("Could not count");
  }
}

/////////// Prewritten storage classes
class InMemory {
  constructor(elements = {}) {
    this.elements = elements;
  }

  get(key) {
    return this.elements[key];
  }

  set(key, value) {
    this.elements[key] = value;
  }

  count() {
    return Object.keys(this.elements).length;
  }
}

class Redis {
  constructor() {
    this.elements = new Map();
  }

  get(key) {
    if (!this.elements.has(key)) {
      throw new Error(`Not found key "${key}"`);
    }
    return this.elements.get(key);
  }

  set(key, value) {
    this.elements.set(key, value);
  }

  count() {
    return this.elements.size;
  }
}
