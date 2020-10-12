/* extractor.js
For the sake of this task imagine that the data structure of the parsing html is certain, so using it make an object containing title of the category, its description and items with their titles and descriptions.
*/
///// THE HTML STRUCTURE
<div class="content">
  <h1>Category Name</h1>
  <div class="description">Category Description</div>
  <div class="links">
    <div>
      <h2>
        <a href="#">Article Name 1</a>
      </h2>
      <p>Article Description 1</p>
    </div>
    <div>
      <h2>
        <a href="#">Article Name 2</a>
      </h2>
      <p>Article Description 2</p>
    </div>
  </div>
</div>;

///// PARSING
const extractor = (document) => {
  const title = document.querySelector("h1").innerHTML;
  const description = document.querySelector(".description").innerHTML;
  const articles = Array.from(document.querySelectorAll(".links > div"));
  let items = articles.map((item) => {
    let titleArticle = item.querySelector("h2 > a").innerHTML;
    let descrArticle = item.querySelector("p").innerHTML;
    return { title: titleArticle, description: descrArticle };
  });
  return { title, description, items };
};

///// RESULT
const data = extractor(document);
console.log(data);
data = {
  title: "Category Name",
  description: "Category Description",
  items: [
    { title: "Article Name 1", description: "Article Description 1" },
    { title: "Article Names 2", description: "Article Description 2" },
  ],
};
