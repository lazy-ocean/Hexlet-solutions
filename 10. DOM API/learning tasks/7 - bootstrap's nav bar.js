/* navbars.js
Write function realizing logic as in Bootstrap's nav bar:
https://getbootstrap.com/docs/4.5/components/navs/#javascript-behavior
Imagine, that your page has numerous such nav bars. Make this logic available for this situation.
 */

////// SHOWCASE ON CODEPEN: https://codepen.io/lazy_ocean/pen/ZEOboPB

/// JS REALIZATION
const links = document.querySelectorAll('[data-toggle="tab"]');
links.forEach((link) => {
  link.addEventListener("click", () => {
    // content
    const hash = link.hash;
    const newActiveContent = document.querySelector(`${hash}`);
    const contentBar = newActiveContent.closest(".tab-content");
    const oldActiveContent = contentBar.querySelector(".active");
    oldActiveContent.classList.remove("active");
    newActiveContent.classList.add("active");
    // menu bar
    const navBar = link.closest(".nav");
    const oldActiveMenu = navBar.querySelector(".active");
    oldActiveMenu.classList.remove("active");
    link.classList.add("active");
  });
});
