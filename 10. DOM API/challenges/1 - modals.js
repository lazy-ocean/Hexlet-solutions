/* modals.js
Write a function that opens and closes modal windows.
*/

////// SHOWCASE ON CODEPEN: https://codepen.io/lazy_ocean/pen/JjKXbzB

///// JS REALIZATION
const btns = document.querySelectorAll(".btn");
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const id = btn.dataset.target;
    const modal = document.querySelector(id);
    modal.classList.add("show");
    modal.style.display = "block";

    const closeBtns = document.querySelectorAll(".close");
    closeBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        modal.classList.remove("show");
        modal.style.display = "none";
      });
    });
  });
});
