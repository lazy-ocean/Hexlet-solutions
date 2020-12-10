/* asyncTodo.js
Realize interface for the todo-app with two features: adding and POST-ing new todo-tasks to backend and updating viewed todo-list accordingly with the backend information (GET).
*/

///// WORKING DEMO ON CODEPEN (without backend exchange) - https://codepen.io/lazy_ocean/pen/mdrrXqZ
import axios from "axios";

const tasks = document.querySelector(".tasks");
const tasksForm = document.querySelector(".form-inline");
const state = {
  tasks: [],
};
const getTasks = () => {
  axios.get(routes.tasksPath()).then((response) => {
    state.tasks = response.data.items;
    renderTasks();
  });
};

const renderTasks = () => {
  let list = state.tasks;
  if (list) {
    let htmlList = list
      .map((item) => `<div class="p-2">${item.name}</div>`)
      .join("");
    tasks.innerHTML = htmlList;
  }
};
const run = async () => {
  await getTasks();

  tasksForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const task = formData.get("name");
    let data = { name: task };
    if (task) {
      axios.post(routes.tasksPath(), data).then(getTasks()).catch();
    }
  });
};

export default run;
