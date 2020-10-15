/* carousel.js
Write a function that makes a working picture carousel (slider) on bootstrap's styles.
*/

//// SHOWCASE ON CODEPEN https://codepen.io/lazy_ocean/pen/dyXGrEM

///// JS REALIZATION
const controls = document.querySelectorAll("[data-slide]");
controls.forEach((pointer) => {
  pointer.addEventListener("click", () => {
    const carousel = pointer.closest(".carousel");
    const innerCarousel = carousel.querySelector(".carousel-inner");
    const currActItem = innerCarousel.querySelector(".active");
    const direction = pointer.dataset.slide;
    const newActiveItem =
      direction === "prev"
        ? currActItem.previousElementSibling || innerCarousel.lastElementChild
        : currActItem.nextElementSibling || innerCarousel.firstElementChild;
    currActItem.classList.remove("active");
    newActiveItem.classList.add("active");
  });
});
