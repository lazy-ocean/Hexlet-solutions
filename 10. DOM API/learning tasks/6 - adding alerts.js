/* application.js 
According to the original html structure, write onclick event listener that would add a new 'alert' div to the top of the page with every new click. 
Alert should look like this: <div class="alert alert-primary">Alert #</div>
# - the number of alert.
*/
//// ORIGINAL HTML
<div class="container m-3">
  <button id="alert-generator" class="btn btn-primary">
    Generate Alert
  </button>
  <div class="alerts m-5"></div>
</div>;

export default () => {
  const btn = document.getElementById("alert-generator");
  btn.addEventListener("click", () => {
    const el = document.querySelector(".alerts");
    const num = document.getElementsByClassName("alert").length;
    const alert = document.createElement("div");
    alert.innerHTML = `Alert ${num + 1}`;
    alert.classList.add("alert", "alert-primary");
    el.prepend(alert);
  });
};

///// RESULT HTML AFTER 3 CLICKS
<div class="container m-3">
  <button id="alert-generator" class="btn btn-primary">
    Generate Alert
  </button>
  <div class="alerts m-5">
    <div class="alert alert-primary">Alert 3</div>
    <div class="alert alert-primary">Alert 2</div>
    <div class="alert alert-primary">Alert 1</div>
  </div>
</div>;
