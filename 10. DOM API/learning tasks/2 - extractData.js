/* extractData.js
Write an extractData() function that can be used as a web-scraper: it takes document.documentElement as an argument and returns an array of only <p>'s contents from the page.
So, from <body> like this only ["First paragraph", "Second paragraph", "Third paragraph"] should be returned:
  <body>
    <p>       First paragraph </p>
    <p> Second paragraph    </p>
    <table border="1">
      <tr>
        <th>id</th>
        <th>name</th>
      </tr>
    </table>
    <p>   Third paragraph   </p>
  </body>

Don't forget to trim the content.
*/

const extractData = (doc) => {
  const children = Array.from(doc.lastElementChild.children);
  return children
    .filter((child) => child.tagName === "P")
    .map((child) => child.textContent.trim());
};
