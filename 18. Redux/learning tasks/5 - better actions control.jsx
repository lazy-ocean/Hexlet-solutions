/* Generate-Clear
Add up Panel component to the previous app that has Generate and Clear buttons: Generate returns 5 more random tasks instead of the existing ones and Clear removes all tasks.
*/

//////// SHOWCASE ON CODEPEN with slightly different example: https://codepen.io/lazy_ocean/pen/dyOobGK

import React from "react";
import { render } from "react-dom";
import { Provider, connect } from "react-redux";
import { createStore, combineReducers } from "redux";
import _ from "lodash";
import randomSentence from "https://cdn.skypack.dev/random-sentence@1.0.4";

///////////////////////////////// ACTIONS
const updateNewTaskText = (text) => ({
  type: "TEXT_UPDATE",
  payload: {
    text,
  },
});

const addTask = (task) => ({
  type: "TASK_ADD",
  payload: {
    task,
  },
});

const removeTask = (id) => ({
  type: "TASK_REMOVE",
  payload: {
    id,
  },
});

const generateTasks = () => ({
  type: "GENERATE",
  payload: {},
});

const cleanTasks = () => ({
  type: "CLEAN",
  payload: {},
});

/////////////////////////////////////// REUSABLE

const mapStateToProps = (state) => {
  const { tasks, text } = state;
  const props = {
    tasks,
    text,
  };
  return props;
};

const actionCreators = {
  generateTasks: generateTasks,
  cleanTasks: cleanTasks,
  removeTask: removeTask,
};

/////////////////////////////////////// PANEL
const PanelComp = (props) => {
  const handleGenerate = (e) => {
    e.preventDefault();
    const { generateTasks } = props;
    generateTasks();
  };
  const handleClean = (e) => {
    e.preventDefault();
    const { cleanTasks } = props;
    cleanTasks();
  };

  return (
    <div className="py-3">
      <button
        type="button"
        data-test="clean"
        onClick={handleClean}
        className="btn btn-warning btn-sm mr-3"
      >
        Clean
      </button>
      <button
        type="button"
        data-test="generate"
        onClick={handleGenerate}
        className="btn btn-primary btn-sm"
      >
        Generate
      </button>
    </div>
  );
};

const Panel = connect(mapStateToProps, actionCreators)(PanelComp);

//////////////////////////// TASKS
const TasksComp = (props) => {
  const { tasks, removeTask } = props;
  const handleRemoveTask = (id) => () => {
    removeTask(id);
  };

  return tasks.length ? (
    <div className="mt-3">
      <ul className="list-group">
        {tasks.map((task) => (
          <li className="list-group-item d-flex" key={task.id}>
            <span className="mr-auto">{task.text}</span>
            <button
              type="button"
              onClick={handleRemoveTask(task.id)}
              className="close"
              aria-label="Close"
            >
              <span>×</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  ) : null;
};

const Tasks = connect(mapStateToProps, actionCreators)(TasksComp);

///////////////////////////// NEW TASK FORM
const mapStateToProps = (state) => {
  const props = {
    text: state.text,
  };
  return props;
};

const actionCreators = {
  updateNewTaskText: updateNewTaskText,
  addTask: addTask,
};

const NewTaskFormComp = ({ addTask, text, updateNewTaskText }) => {
  const handleAddTask = (e) => {
    e.preventDefault();
    const task = { text, id: _.uniqueId() };
    addTask(task);
  };

  const handleUpdateNewTaskText = (e) => {
    updateNewTaskText(e.target.value);
  };

  return (
    <form action="" className="form-inline" onSubmit={handleAddTask}>
      <div className="form-group mx-sm-3">
        <input
          type="text"
          required
          value={text}
          onChange={handleUpdateNewTaskText}
        />
      </div>
      <input type="submit" className="btn btn-primary btn-sm" value="Add" />
    </form>
  );
};

const NewTaskForm = connect(mapStateToProps, actionCreators)(NewTaskFormComp);

//////////////////////////////////////// APP
const App = () => (
  <div className="col-5">
    <NewTaskForm />
    <Panel />
    <Tasks />
  </div>
);

/////////////////////////////////// REDUCERS
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
      return [action.payload.task, ...state];
    }
    case "TASK_REMOVE": {
      return state.filter((t) => t.id !== action.payload.id);
    }
    case "GENERATE": {
      let tasks = [];
      _.times(5, () =>
        tasks.push({ id: _.uniqueId(), text: randomSentence() })
      );
      return tasks;
    }
    case "CLEAN": {
      return [];
    }
    default:
      return state;
  }
};

const Reducers = combineReducers({
  text,
  tasks,
});

//////////////////////////////////////////// RENDER
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
