/* progress.js
Write a function that executes a progress bar that fills in 1% in 1 second.
Use setTimeout;
*/

///// SHOWCASE ON CODEPEN - https://codepen.io/lazy_ocean/pen/GRqZmjw

///// JS REALIZATION
const bar = document.querySelector("progress");
const tick = () => {
  let value = bar.getAttribute("value");
  if (value === "100") return;
  bar.setAttribute("value", ~~value + 1);
  setTimeout(tick, 1000);
};
//tick()
setTimeout(tick, 1000);
