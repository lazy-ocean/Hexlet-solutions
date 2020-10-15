/* ajax.js
Write a function that works as autocomplete.
You have two input forms, each of those has its own json. When user starts typing, the form should request its json file and return necessary data for the autocomplete in the form of a new div on the right side:
<ul data-autocomplete-name="country">
  <li>pakistan</li>
  <li>panama</li>
  <li>paraguay</li>
</ul>

If the list is empty, return 'Nothing'
<ul data-autocomplete-name="country">
  <li>Nothing</li>
</ul>
*/

////// JS REALIZATION
const forms = document.querySelectorAll(".form-control");
forms.forEach((form) => {
  form.addEventListener("input", (e) => {
    let link = form.dataset.autocomplete;
    let label = form.dataset.autocompleteName;
    let input = e.target.value;
    const ul = document.querySelector(`ul[data-autocomplete-name="${label}"]`);
    const myurl = new URL(link, window.location.origin);
    myurl.searchParams.append("term", input);
    fetch(myurl)
      .then((response) => response.json())
      .then((data) => {
        let li =
          data.length === 0
            ? "<li>Nothing</li>"
            : data.map((item) => `<li>${item}</li>`).join("\n");
        ul.innerHTML = li;
      });
  });
});
