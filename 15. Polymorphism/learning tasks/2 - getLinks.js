/* getLinks.js
Write and export by default getLinks function that takes an object with html tags with their content and returns its links as one list.
Find input examples in test.
*/

const getLinks = (tags) =>
  tags.reduce((acc, item) => {
    switch (item.name) {
      case "a":
      case "link":
        acc.push(item.href);
        break;
      case "img":
        acc.push(item.src);
        break;
    }
    return acc;
  }, []);

/// TEST
const tags = [
  { name: "img", src: "hexlet.io/assets/logo.png" },
  { name: "div" },
  { name: "link", href: "hexlet.io/assets/style.css" },
  { name: "h1" },
];
console.log(getLinks(tags)); // => [ 'hexlet.io/assets/logo.png', 'hexlet.io/assets/style.css' ]
