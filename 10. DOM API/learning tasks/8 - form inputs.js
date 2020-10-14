/* form.js
Write an executor for the html form that sends the data nowhere but replaces form on the page with it in the format of a new div:
<div>
  <p>Feedback has been sent</p>
  <div>Email: test@email.com</div>
  <div>Name: Matz</div>
  <div>Comment: My Comment</div>
</div>
*/

////// SHOWCASE ON CODEPEN: https://codepen.io/lazy_ocean/pen/GRqogGX

////// JS REALIZATION
import escapeGoat from "escape-goat";
const { htmlEscape } = escapeGoat;

const form = document.querySelector(".feedback-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  let entries = Object.fromEntries(formData);
  const result = resultDiv(entries);
  form.replaceWith(result);
});

const resultDiv = ({ email, name, comment }) => {
  const res = document.createElement("div");
  res.innerHTML = `
  <p>Feedback has been sent</p>
  <div>Email: ${htmlEscape(email)}</div>
  <div>Name: ${htmlEscape(name)}</div>
  <div>Comment: ${htmlEscape(comment)}</div>
`;
  return res;
};
