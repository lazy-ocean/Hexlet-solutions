/* themedTasks.jsx
Modify Tasks component the way that on click it would change its theme from dark to light.
*/

import React from "react";
import { connect } from "react-redux";
import cn from "classnames";

///////////// ACTIONS
const addTask = createAction("TASK_ADD");
const updateNewTaskText = createAction("NEW_TASK_TEXT_UPDATE");
const inverseTaskTheme = createAction("CHANGE_THEME");

////////////// TASKS
const mapStateToProps = (state) => {
  const { tasks, text, tasksUIState } = state;
  const { byId, allIds } = tasks;
  const t = allIds.map((id) => byId[id]);
  const props = {
    tasks: t,
    text,
    tasksUIState,
  };
  return props;
};

const actionCreators = {
  inverseTaskTheme: actions.inverseTaskTheme,
};

const TasksComp = ({ inverseTaskTheme, tasksUIState, tasks }) => {
  const handleThemeChange = (id) => (e) => {
    e.preventDefault();
    inverseTaskTheme({ id });
  };
  let classesList = Object.keys(tasksUIState).reduce((acc, item) => {
    let text = tasksUIState[item] === "light" ? "dark" : "light";
    acc[item] = `list-group-item d-flex bg-${tasksUIState[item]} text-${text}`;
    return acc;
  }, {});
  return tasks.length ? (
    <div className="mt-3">
      <ul className="list-group">
        {tasks.map((task) => (
          <li
            className={
              classesList[task.id] ||
              "list-group-item d-flex bg-light text-dark"
            }
            key={task.id}
          >
            <span className="mr-auto">
              <a
                href="#"
                className="text-reset"
                onClick={handleThemeChange(task.id)}
              >
                {task.text}
              </a>
            </span>
          </li>
        ))}
      </ul>
    </div>
  ) : null;
};

const Tasks = connect(mapStateToProps, actionCreators)(TasksComp);

/////////// REDUCERS
const tasks = handleActions(
  {
    [actions.addTask](state, { payload: { task } }) {
      const { byId, allIds } = state;
      return {
        byId: { [task.id]: task, ...byId },
        allIds: [task.id, ...allIds],
      };
    },
  },
  { byId: {}, allIds: [] }
);

const tasksUIState = handleActions(
  {
    [actions.inverseTaskTheme](state, { payload: { id } }) {
      let theme = state[id] === "dark" ? "light" : "dark";
      return { ...state, [id]: theme };
    },
  },
  {}
);

const text = handleActions(
  {
    [actions.addTask]() {
      return "";
    },
    [actions.updateNewTaskText](state, { payload }) {
      return payload.text;
    },
  },
  ""
);

const reducers = combineReducers({
  tasks,
  tasksUIState,
  text,
});
