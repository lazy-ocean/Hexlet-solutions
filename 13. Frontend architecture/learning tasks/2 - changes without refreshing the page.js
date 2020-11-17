/* changes.js
Realize interface that allows to change the text in real time without refreshing the page.

At the beginning (default) state you have two inputs:
<div data-editable-target="name"><i>name</i></div>
<div data-editable-target="email"><i>email</i></div>

On click, these inputs should be changed on form:
<div data-editable-target="name">
  <form>
    <input type="text" name="name">
    <input type="submit" value="Save">
  </form>
</div>

When the input is submitted, the form should be deleted and the word remain:
<div data-editable-target="name">Cat</div>

If nothing is inputed, return the default value (name and email) in italic as it was.
*/

// SHOWCASE ON CODEPEN - https://codepen.io/lazy_ocean/pen/pobBjzY
const render = (div, state) => {
  let type = div.dataset.editableTarget;
  if (state === "changing") {
    div.innerHTML = `<form><input type="text" name="${type}" value=""><input type="submit" value="Save"></form>`;
    const form = document.querySelector("form");
    const input = form.firstChild;
    input.addEventListener("focus", () => {
      states[type].state = "changing";
    });
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const data = formData.get(type);
      div.innerHTML = data ? data : `<i>${states[type].def}</i>`;
      states[type].state = "changed";
    });
  }
};

const states = {
  name: {
    def: "name",
    state: "waiting",
  },
  email: {
    def: "email",
    state: "waiting",
  },
};

const run = () => {
  const forms = document.querySelectorAll(".container > div");
  forms.forEach((form) => {
    form.addEventListener("click", (e) => {
      let type = form.dataset.editableTarget;
      if (
        states[type].state === "waiting" ||
        states[type].state === "changed"
      ) {
        states[type].state === "changing";
        render(form, "changing");
      }
    });
  });
};

export default run;
