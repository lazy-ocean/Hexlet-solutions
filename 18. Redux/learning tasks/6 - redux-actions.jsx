/* redux-actions.jsx
Realize the same logic (delete-add todos) using redux-actions library.
*/
import { createAction } from "redux-actions";
import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import _ from "lodash";

////////////////////////////////////////// ACTIONS
const updateNewTaskText = createAction("TEXT_UPDATE");
const addTask = createAction("ADD_TASK");
const removeTask = createAction("REMOVE_TASK");

//////////////////////////////////////// REDUCERS
const defaultTasks = [];
let { addTask, updateNewTaskText, removeTask } = actions;
const tasks = handleActions(
  {
    [addTask]: (state, { payload: task }) => [task, ...state],
    [removeTask]: (state, { payload: id }) => state.filter((t) => t.id !== id),
  },
  defaultTasks
);
const defaultText = "";
const taskText = handleActions(
  {
    [addTask]: () => "",
    [updateNewTaskText]: (state, { payload: text }) => text,
  },
  defaultText
);

const reducers = combineReducers({
  taskText,
  tasks,
});
