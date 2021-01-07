/* isInstanceOf.js
Add an isInstanceOf(classname) method that checks if this object is in inheritance of the argumented class. May be on multiple levels.

// class ChildOfChild extends FirstChild extends Base
const obj = new ChildOfChild();
obj.isInstanceOf('FirstChild'); // true
obj.isInstanceOf('SomeClass'); // false
*/

class Base {
  isInstanceOf(className) {
    let currentObj = this;
    while (currentObj !== null) {
      if (currentObj.constructor.name === className) return true;
      currentObj = Object.getPrototypeOf(currentObj);
    }
    return false;
  }
}
