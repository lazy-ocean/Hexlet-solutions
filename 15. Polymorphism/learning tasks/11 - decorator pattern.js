/* decorator.js
You have an InputTag class that takes type and value of html input tag and returns it as a string.
Write similar LabelTag decorator class that takes an innerHTML text and other inner tag (as new Something class) and returns wrapped to <label></label> text and inner tag.

Example:
const inputTag = new InputTag('submit', 'Save');
const labelTag = new LabelTag('Press Submit', inputTag);
labelTag.render();
// <label>
//   Press Submit
//   <input type="submit" value="Save">
// </label>
*/

/////////////// INPUT TAG
class InputTag {
  constructor(type, value) {
    this.type = type;
    this.value = value;
  }

  render() {
    return `<input type="${this.type}" value="${this.value}">`;
  }

  toString() {
    return this.render();
  }
}

/////////////// LABEL TAG
class LabelTag {
  constructor(text, innerTag) {
    this.text = text;
    this.innerTag = innerTag;
  }
  render() {
    return `<label>${this.text}${this.innerTag}</label>`;
  }
  toString() {
    return this.render();
  }
}
