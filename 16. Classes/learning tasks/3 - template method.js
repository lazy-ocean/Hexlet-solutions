/* HTMLPairElement & HTMLDivElement
Write two classes extending pre-existing HTMLElement class:
--- HTMLPairElement: extends HTMLElement and has toString(), getTextContent(), setTextContent(body) methods. Returns pair html tag representation.
--- HTMLDivElement: returns full and complete html <div> pair tag with attributes and body.

const div = new HTMLDivElement({ name: 'div', 'data-toggle': true });
div.setTextContent('Body');
console.log(div.toString()); // '<div name="div" data-toggle="true">Body</div>'
*/
///////// Prewritten HTMLElement class
class HTMLElement {
  constructor(attributes = {}) {
    this.attributes = Object.entries(attributes);
  }
  stringifyAttributes() {
    if (this.attributes.length === 0) {
      return "";
    }
    const line = this.attributes
      .map(([attr, value]) => `${attr}="${value}"`)
      .join(" ");
    return ` ${line}`;
  }
}

/////////// HTMLPairElement class
class HTMLPairElement extends HTMLElement {
  toString() {
    const attr = this.stringifyAttributes();
    const bod = this.getTextContent();
    const tagName = this.getTagName();
    return `<${tagName}${attr}>${bod}</${tagName}>`;
  }
  getTextContent() {
    return this.body || "";
  }
  setTextContent(body) {
    this.body = body;
  }
}

////////// HTMLDivElement class
class HTMLDivElement extends HTMLPairElement {
  getTagName() {
    return "div";
  }
}
