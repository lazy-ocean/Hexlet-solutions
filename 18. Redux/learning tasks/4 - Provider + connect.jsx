/* Todo.jsx
Write a simple todo-app with two functions: one can add tasks and delete them.
Use react-redux library syntax.
*/

///////// SHOWCASE ON CODEPEN: https://codepen.io/lazy_ocean/pen/QWGwPrX

import { combineReducers } from "redux";
import _ from "lodash";
import React from "react";
import { connect } from "react-redux";

/////////////////////////////////////// ACTIONS:
const updateNewTaskText = (text) => ({
  type: "TEXT_UPDATE",
  payload: text,
});

const addTask = (task) => ({
  type: "TASK_ADD",
  payload: task,
});

const removeTask = (id) => ({
  type: "TASK_REMOVE",
  payload: id,
});

/////////////////////////////////////// REDUCERS:
const text = (state = "", action) => {
  switch (action.type) {
    case "TEXT_UPDATE": {
      return action.payload.text;
    }
    case "TASK_ADD": {
      return "";
    }
    default:
      return state;
  }
};

const tasks = (state = [], action) => {
  switch (action.type) {
    case "TASK_ADD": {
      const { task } = action.payload;
      return [{ id: _.uniqueId(), task: task }, ...state];
    }
    case "TASK_REMOVE": {
      const { id } = action.payload;
      return state.filter((task) => task.id !== id);
    }
    default:
      return state;
  }
};
const reducers = combineReducers({
  text,
  tasks,
});

/////////////////////////////////////// APP
const mapStateToProps = (state) => {
  const { tasks, text } = state;
  const props = {
    tasks,
    text,
  };
  return props;
};

const AppClass = (props) => {
  const handleAddTask = (e) => {
    e.preventDefault();
    const { dispatch, text } = props;
    dispatch(addTask({ task: text }));
  };
  const handleInput = (e) => {
    e.preventDefault();
    const { dispatch, text } = props;
    dispatch(updateNewTaskText({ text: e.target.value }));
  };
  const handleRemove = (id) => (e) => {
    e.preventDefault();
    const { dispatch, tasks } = props;
    dispatch(removeTask({ id: id }));
  };
  const { tasks, text } = props;
  return (
    <>
      <div className="col-5">
        <form action="" className="form-inline" onSubmit={handleAddTask}>
          <div className="form-group mx-sm-3">
            <input type="text" required value={text} onChange={handleInput} />
          </div>
          <button type="submit" className="btn btn-primary btn-sm">
            Add
          </button>
        </form>
      </div>
      {tasks.length ? (
        <div className="mt-3">
          <ul className="list-group">
            {tasks.map((task) => (
              <li key={task.id} id={task.id} className="list-group-item d-flex">
                <span className="mr-auto">{task.task}</span>
                <button
                  type="button"
                  className="close"
                  onClick={handleRemove(task.id)}
                >
                  <span>&times;</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  );
};

const App = connect(mapStateToProps)(AppClass);

/////////////////////////////////////// RENDER
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("container")
);
