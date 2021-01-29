/* reducers.js
Realize two reducers for the below strucure and 4 actions: addTask, removeTask, addTaskComment, removeTaskComment.
Be sure that deleting the task you delete all of its comments as well.
{
  comments: {
    1: { id: 1, taskId: 1, body: 'comment 1' },
    2: { id: 2, taskId: 1, body: 'comment 2' },
    5: { id: 5, taskId: 2, body: 'another comment' },
  },
  tasks: {
    1: { id: 1, name: 'first task' },
    2: { id: 2, name: 'second task' },
  },
}
*/
import _ from "lodash";
import { combineReducers } from "redux";

const comments = (state = {}, action) => {
  switch (action.type) {
    case "TASK_COMMENT_ADD": {
      const { comment } = action.payload;
      return { ...state, [comment.id]: comment };
    }
    case "TASK_REMOVE": {
      const { id } = action.payload;
      return _.omitBy(state, (comment) => comment.taskId === id);
    }
    case "TASK_COMMENT_REMOVE": {
      const { id } = action.payload;
      return _.omit(state, id);
    }
    default:
      return state;
  }
};

const tasks = (state = {}, action) => {
  switch (action.type) {
    case "TASK_ADD": {
      const { task } = action.payload;
      return { ...state, [task.id]: task };
    }
    case "TASK_REMOVE": {
      const { id } = action.payload;
      return _.omit(state, id);
    }
    default:
      return state;
  }
};

export default combineReducers({
  comments,
  tasks,
});

/////// ACTIONS
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

const addTaskComment = (comment) => ({
  type: "TASK_COMMENT_ADD",
  payload: {
    comment,
  },
});

const removeTaskComment = (id) => ({
  type: "TASK_COMMENT_REMOVE",
  payload: {
    id,
  },
});
