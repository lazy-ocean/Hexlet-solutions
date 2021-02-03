/* filteredTasks.jsx
Continuing working on tasks list, add filtration by the task state: active, finished and all tasks.
Use reselect library for effective re-rendering.

Starting filter buttons:
<div class="mt-3 d-flex justify-content-around">
  All Tasks
  <button type="button" class="btn btn-link border-0 p-0">Active Tasks</button>
  <button type="button" class="btn btn-link border-0 p-0">Finished Tasks</button>
</div>

After click on Active tasks button:
<div class="mt-3 d-flex justify-content-around">
  <button type="button" class="btn btn-link border-0 p-0">All Tasks</button>
  Active Tasks
  <button type="button" class="btn btn-link border-0 p-0">Finished Tasks</button>
</div>
*/

//////////////////// SHOWCASE ON CODEPEN: https://codepen.io/lazy_ocean/pen/GRNpvex

import { createSelector } from "reselect";
import { createAction, handleActions } from "redux-actions";
import _ from "lodash";
import { combineReducers } from "redux";
import React from "react";
import { connect } from "react-redux";

/////////////////////////////// SELECTORS
const getTasks = (state) => state.tasks.byId;
const getFilter = (state) => state.tasks.currentFilterName;
const filteredTasksSelector = createSelector(
  getTasks,
  getFilter,
  (tasks, filter) => {
    let entries = Object.entries(tasks);
    return entries.reduce((acc, [id, content]) => {
      if (content.state === filter || filter === "all") acc.push(content);
      return acc;
    }, []);
  }
);

/////////////////////////////// ACTIONS
const addTask = createAction("TASK_ADD");
const updateNewTaskText = createAction("NEW_TASK_TEXT_UPDATE");
const removeTask = createAction("TASK_REMOVE");
const toggleTaskState = createAction("TASK_STATE_TOGGLE");
const setTasksFilter = createAction("TASK_FILTER_SET");

/////////////////////////////// REDUCERS
const tasks = handleActions(
  {
    [actions.addTask](state, { payload: { task } }) {
      const { byId, allIds } = state;
      return {
        ...state,
        byId: { ...byId, [task.id]: task },
        allIds: [task.id, ...allIds],
      };
    },
    [actions.removeTask](state, { payload: { id } }) {
      const { byId, allIds } = state;
      return {
        ...state,
        byId: _.omit(byId, id),
        allIds: _.without(allIds, id),
      };
    },
    [actions.toggleTaskState](state, { payload: { id } }) {
      const task = state.byId[id];
      const newState = task.state === "active" ? "finished" : "active";
      const updatedTask = { ...task, state: newState };
      return {
        ...state,
        byId: { ...state.byId, [task.id]: updatedTask },
      };
    },
    [actions.setTasksFilter](state, { payload: { filterName } }) {
      return {
        ...state,
        currentFilterName: filterName,
      };
    },
  },
  { byId: {}, allIds: [], currentFilterName: "all" }
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
  text,
});

//////////////////////////// FILTER
const filters = [
  ["all", "All Tasks"],
  ["active", "Active Tasks"],
  ["finished", "Finished Tasks"],
];

const mapStateToProps = (state) => {
  const { currentFilterName } = state.tasks;
  const props = { currentFilterName };
  return props;
};

const actionCreators = {
  setTasksFilter: actions.setTasksFilter,
};

const FilterComp = ({ currentFilterName, setTasksFilter }) => {
  const handleFilterChange = (filterName) => (e) => {
    e.preventDefault();
    setTasksFilter(filterName);
  };
  return (
    <div className="mt-3 d-flex justify-content-around">
      {filters.map(([filterName, filterText]) => {
        return filterName === currentFilterName ? (
          filterText
        ) : (
          <button
            type="button"
            key={_.uniqueId()}
            className="btn btn-link border-0 p-0"
            onClick={handleFilterChange({ filterName })}
          >
            {filterText}
          </button>
        );
      })}
    </div>
  );
};

const Filter = connect(mapStateToProps, actionCreators)(FilterComp);

//////////////////////////////// TASKS
const mapStateToProps = (state) => {
  const { tasks } = state;
  const props = {
    tasks: filteredTasksSelector(state),
  };
  return props;
};

const actionCreators = {
  removeTask: actions.removeTask,
  toggleTaskState: actions.toggleTaskState,
};

const TasksComp = ({ removeTask, toggleTaskState, tasks }) => {
  const handleRemoveTask = (id) => () => {
    removeTask({ id });
  };

  const handleToggleTaskState = (id) => () => {
    toggleTaskState({ id });
  };
  const renderTasks = () => (
    <div className="mt-3">
      <ul className="list-group">
        {tasks.map(({ id, text, state }) => (
          <li key={id} className="list-group-item d-flex">
            <span className="mr-auto">
              <button
                type="button"
                className="btn btn-link"
                onClick={handleToggleTaskState(id)}
              >
                {state === "active" ? text : <s>{text}</s>}
              </button>
            </span>
            <button
              type="button"
              title="remove"
              className="close"
              onClick={handleRemoveTask(id)}
            >
              <span>&times;</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );

  if (tasks.length === 0) {
    return null;
  }

  return <div className="mt-3">{renderTasks()}</div>;
};

const Tasks = connect(mapStateToProps, actionCreators)(TasksComp);
