/* stringify.js
Write a stringify() function that returns an HTML-string based on argumented object with its tags and other attributes.
Mind that:
- there're pair and single tags.
- there could be attributes other than class and id
- there might or might not be a body.
*/
const randomWords = require("random-words");

const attributes = (attrName, tag) => ` ${attrName}="${tag[attrName]}"`;
const tagType = {
  single: () => `>`,
  pair: (tag) => `</${tag.name}>`,
};

function stringify(tag) {
  let res = `<${tag.name}`;
  Object.keys(tag)
    .filter((key) => key !== "body" && key !== "tagType" && key !== "name")
    .forEach((key) => (res += attributes(key, tag)));
  if (tag.body) res += `>${tag.body}`;
  res += tagType[tag.tagType](tag);
  return res;
}

///// TESTS
const tag1 = {
  name: "hr",
  class: "px-3",
  id: "myid",
  tagType: "single",
};
stringify(tag1); // => '<hr class="px-3" id="myid">'

const tag2 = {
  name: "p",
  tagType: "pair",
  body: "text",
};
stringify(tag2); // => "<p>text</p>"

const tag3 = {
  name: "div",
  tagType: "pair",
  body: "text2",
  id: "wow",
};
stringify(tag3); // => '<div id="wow">text2</div>'

const randomAttr = randomWords();
const tag = {
  name: "div",
  tagType: "pair",
  body: "text2",
  id: "wow",
  [randomAttr]: "value",
};
stringify(tag); // => `<div id="wow" ${randomAttr}="value">text2</div>`;
