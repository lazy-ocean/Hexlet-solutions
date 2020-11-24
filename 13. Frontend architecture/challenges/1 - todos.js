/* to-do list
Realize logic for the simple to-do list: user should be able to add new tasks to the list with validation (3-20 symbols, required field).
On submit, mock post response should be sent on /todos with the body '{ todo: { name } }'. During the response the button should be disabled. After that, the tasks added to the list below.
*/

//// SHOWCASE ON CODEPEN --- https://codepen.io/lazy_ocean/pen/zYKOqqw

import axios from "axios";
import * as yup from "yup";
import onChange from "on-change";

const app = () => {
  const form = document.querySelector("#todo-form");

  const schema = yup.object().shape({
    task: yup
      .string()
      .trim()
      .required("this is a required field")
      .min(3, "this must be at least 3 characters")
      .max(20, "this must be shorter than 20 characters"),
  });

  const state = {
    state: "waiting",
    newTask: { task: null },
    errors: [],
    tasks: [],
  };

  const renderErr = () => {
    let formDiv = form.querySelector(".form-group");
    let errorsDiv = document.createElement("div");
    const tasksList = document.querySelector(".list-group");
    let errors = form.querySelector(".invalid-feedback");
    if (errors) errors.remove();
    if (state.errors.length) {
      errorsDiv.innerHTML = `${state.errors[0]}`;
      errorsDiv.classList.add("invalid-feedback");
      errorsDiv.style.display = "inline";
      form.append(errorsDiv);
    }
  };

  const submitHandler = () => {
    try {
      schema.validateSync(state.newTask);
      state.errors = [];
      state.tasks.push(state.newTask.task);
    } catch (err) {
      console.log("m");
      state.errors = [];
      state.errors.push(err.errors);
    }
  };

  const watchedState = onChange(state, (path, value) => {
    submitHandler();
    renderErr();
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const task = data.get("name");
    const btn = form.querySelector(".btn");
    watchedState.newTask.task = task;

    let text = state.newTask.task;
    if (!state.errors.length) {
      btn.disabled = true;
      axios
        .post("/todos", { todo: { name: text } })
        .then(function (response) {
          const tasksList = document.querySelector(".list-group");
          let listItems = state.tasks
            .map((task) => `<li>${task}</li>`)
            .join("");
          tasksList.innerHTML = listItems;
          btn.disabled = false;
          form.reset();
        })
        .catch(function (err) {});
    }
  });
};
