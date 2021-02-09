/* prettiry.js
Write and export by default prettify() function that finds all texts inside div-s that is not in the <p> tag and fixes that.
Example:
 <body>
   <p>Boom</p>
   text
   <div>Bam</div>
 </body>
prettify(document);
console.log(document.body.innerHTML);
 <body>
   <p>Boom</p>
   text
   <div><p>Bam</p></div>
 </body>
*/
const prettify = (document) => {
  const divs = Array.from(document.getElementsByTagName("div"));
  divs.map((div) => {
    let children = Array.from(div.childNodes);
    return children
      .filter((child) => child instanceof Text)
      .filter((child) => child.textContent.trim())
      .map((child) => {
        let newChild = document.createElement("p");
        newChild.textContent = child.nodeValue.trim();
        child.replaceWith(newChild);
      });
  });
};

export default prettify;
