/* normalize.js
Write and export by default normalize() function that converts all kebab-case classes to camelCase.
*/
import camelCase from "lodash/camelCase";

const normalize = (document) => {
  const elements = Array.from(document.body.getElementsByTagName("*"));
  return elements.map((el) => {
    const classes = el.classList;
    return classes.forEach((item) =>
      el.classList.replace(item, camelCase(item))
    );
  });
};

export default normalize;
