/* HTMLHrElement & HTMLElement
Write two classes: 
--- HTMLElement: has stringifyAttributes() method that takes an object with attributes - { class: 'w-75', id: 'wop' } - and returns a string to add to HTML tag - 'class="w-75" id="wop"'
--- HTMLHrElement, extending HTMLElement: it has toString() method that returns full <hr> tag with attributes.
*/

class HTMLElement {
  constructor(attributes = {}) {
    this.attributes = attributes;
  }

  stringifyAttributes() {
    let str = "";
    Object.keys(this.attributes).forEach((attr) => {
      str += ` ${attr}="${this.attributes[attr]}"`;
    });
    return str;
  }
}

class HTMLHrElement extends HTMLElement {
  toString() {
    let attrs = this.stringifyAttributes();
    return `<hr${attrs}>`;
  }
}
