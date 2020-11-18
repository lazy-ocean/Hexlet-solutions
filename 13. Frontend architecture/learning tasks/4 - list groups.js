/* listGroups.js
Realize an interface of bootstrap's list-group
https://getbootstrap.com/docs/4.5/components/list-group/#javascript-behavior
Use on-change library. https://github.com/sindresorhus/on-change
 */

/// SHOWCASE ON CODEPEN - https://codepen.io/lazy_ocean/pen/OJXGrKM
import onChange from "on-change";

const run = (() => {
  const state = {
    active: "list-home-list",
  };
  const listGroups = document.querySelectorAll(".container");
  listGroups.forEach((group) => {
    let items = group.querySelectorAll(".list-group-item");
    items.forEach((item) => {
      item.addEventListener("click", (e) => {
        watchedState.active = item.id;
      });
    });
  });
  const watchedState = onChange(state, (path, value) => {
    render(value);
  });
})();

const render = (name) => {
  let item = document.getElementById(name);
  let list = item.closest(".list-group");
  let oldActive = list.querySelector(".active");
  oldActive.classList.remove("active");
  item.classList.add("active");

  let content = document.querySelector(`[aria-labelledby="${name}"]`);
  let tab = content.closest(".tab-content");
  let oldActiveTab = tab.querySelector(".active");
  oldActiveTab.classList.remove("active", "show");
  content.classList.add("active", "show");
};
