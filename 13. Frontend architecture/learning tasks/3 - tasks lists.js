/* tasksLists.js
Your task is to realize an interface of task planner:
You have lists and tasks input forms. Write any other logic so that your planner works with:
--- adding lists and tasks to chosen lists
--- switching between lists and see its tasks.

Lists are added above the form, tasks - under the form.
Current (chosen) list is <b>-bold, any other is a <a>-link.
Both lists and tasks are <ul><li> lists.
*/

/// SHOWCASE ON CODEPEN - https://codepen.io/lazy_ocean/pen/VwjNmaY

//// CODE
const renderLists = () => {
  const containerList = document.querySelector('[data-container="lists"]');
  let allLists = Object.keys(lists);
  let li = allLists
    .map((list) => {
      if (lists[list].status === "current") return `<li><b>${list}</b></li>`;
      if (lists[list].status === "link")
        return `<li><a href="#${list}">${list}</a></li>`;
    })
    .join("");
  containerList.innerHTML = `<ul>${li}</ul>`;
  const links = document.getElementsByTagName("a");
  if (links.length !== 0) {
    [...links].forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        let name = link.innerHTML;
        Object.keys(lists).map((list) => {
          list === name
            ? (lists[list].status = "current")
            : (lists[list].status = "link");
        });
        renderLists();
        renderTasks(name);
      });
    });
  }
};

const lists = {
  General: {
    status: "current",
    tasks: [],
  },
};

const renderTasks = (currentList) => {
  const containerTasks = document.querySelector('[data-container="tasks"]');
  let allTasks = lists[currentList].tasks;
  let li = allTasks.map((task) => `<li>${task}</li>`).join("");
  li
    ? (containerTasks.innerHTML = `<ul>${li}</ul>`)
    : (containerTasks.innerHTML = ``);
};

const run = () => {
  renderLists();
  const tasksForm = document.querySelector('[data-container="new-task-form"]');
  const listsForm = document.querySelector('[data-container="new-list-form"]');

  tasksForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const task = data.get("name");
    let currentList = Object.keys(lists).find(
      (list) => lists[list].status === "current"
    );
    lists[currentList].tasks.push(task);
    renderTasks(currentList);
    tasksForm.reset();
  });
  listsForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const list = data.get("name");
    lists[list] = { status: "link", tasks: [] };
    renderLists();

    listsForm.reset();
  });
};
