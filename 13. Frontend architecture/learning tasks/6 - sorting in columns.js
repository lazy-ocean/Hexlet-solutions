/* sortingInColumns.js
Write a realization of a table with two columns available for sorting.
Take your data from document.location - everything that is not a function, not an object and not empty.
There're three ways of sorting - ascending, descending order and unsorted.
Sort by one column at a time.
Use i18next libary to store text data and onChange library for changes monitoring.
*/

/// SHOWCASE ON CODEPEN --- https://codepen.io/lazy_ocean/pen/MWeNGpN

import i18next from "i18next";
import onChange from "on-change";

const resources = (() => {
  const data = document.location;
  let res = {};
  for (const property in data) {
    if (
      data[property] &&
      typeof data[property] !== "object" &&
      typeof data[property] !== "function"
    ) {
      res[property] = data[property];
    }
  }
  return { translation: res };
})();

const run = () => {
  const runApp = async () => {
    await i18next.init({
      lng: "en",
      debug: true,
      resources: resources,
    });
  };

  const state = {
    name: "Asc",
    value: "Unsorted",
  };

  const render = () => {
    let data = resources.en.translation;
    let container = document.querySelector(".container");
    let table = `<table class="table"><tbody><tr><th><a href="">Name (${state.name})</a></th><th><a href="">Value (${state.value})</a></th></tr>`;
    let tbl;
    if (
      state.name !== "Unsorted" ||
      (state.name === "Unsorted" && state.value === "Unsorted")
    ) {
      let keys =
        state.name === "Desc"
          ? Object.keys(data).sort((b, a) => a.localeCompare(b))
          : Object.keys(data).sort((a, b) => a.localeCompare(b));
      tbl = keys
        .map((key) => `<tr><td>${key}</td><td>${data[key]}</td></tr>`)
        .join("");
    }
    if (state.value !== "Unsorted") {
      let values =
        state.value === "Desc"
          ? Object.entries(data).sort(([, a], [, b]) => b.localeCompare(a))
          : Object.entries(data).sort(([, a], [, b]) => a.localeCompare(b));
      tbl = values
        .map(([key, value]) => `<tr><td>${key}</td><td>${value}</td></tr>`)
        .join("");
    }
    table += `${tbl}</tbody></table>`;
    container.innerHTML = table;

    const headers = document.querySelectorAll("a");

    headers.forEach((header) => {
      header.addEventListener("click", (e) => {
        e.preventDefault();
        let type = header.innerHTML.split(" ")[0].toLowerCase();
        if (type === "name") {
          state.value = "Unsorted";
          switcher(state.name, "name");
        }
        if (type === "value") {
          state.name = "Unsorted";
          switcher(state.value, "value");
        }
      });
    });
  };
  render();

  const switcher = (type, item) => {
    switch (type) {
      case "Desc":
        watchedState[item] = "Unsorted";
        break;
      case "Asc":
        watchedState[item] = "Desc";
        break;
      case "Unsorted":
        watchedState[item] = "Asc";
        break;
    }
  };

  const watchedState = onChange(state, (path, value) => {
    render();
  });
};
