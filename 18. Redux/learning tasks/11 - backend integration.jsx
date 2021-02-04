/* todoBackend.jsx
Write a realization for an asynchronous todo-app that posts and gets tasks from backend and also have an option to delete a task.
*/

///// PRESET BACKEND ROUTES
const host = "";
const routes = {
  tasksUrl: () => [host, "tasks"].join("/"), // get tasks list
  taskUrl: (id) => [host, "tasks", id].join("/"),
};

/////////////// ACTIONS
import axios from "axios";
import { createAction } from "redux-actions";

const fetchTasksRequest = createAction("TASKS_FETCH_REQUEST");
const fetchTasksSuccess = createAction("TASKS_FETCH_SUCCESS");
const fetchTasksFailure = createAction("TASKS_FETCH_FAILURE");

const removeTaskRequest = createAction("TASK_REMOVE_REQUEST");
const removeTaskSuccess = createAction("TASK_REMOVE_SUCCESS");
const removeTaskFailure = createAction("TASK_REMOVE_FAILURE");

const addTaskSuccess = createAction("TASK_ADD_SUCCESS");

const addTask = (task) => async (dispatch) => {
  try {
    const url = routes.tasksUrl();
    const response = await axios.post(url, { task });
    dispatch(addTaskSuccess({ task }));
  } catch (e) {
    throw e;
  }
};

const removeTask = ({ id }) => async (dispatch) => {
  dispatch(removeTaskRequest());
  try {
    const url = routes.taskUrl(id);
    const response = await axios.delete(url);
    dispatch(removeTaskSuccess({ id }));
  } catch (e) {
    dispatch(removeTaskFailure());
    throw e;
  }
};

const fetchTasks = () => async (dispatch) => {
  dispatch(fetchTasksRequest());
  try {
    const url = routes.tasksUrl();
    const response = await axios.get(url);
    dispatch(fetchTasksSuccess({ tasks: response.data }));
  } catch (e) {
    dispatch(fetchTasksFailure());
    throw e;
  }
};

////////// REDUCERS
import _ from "lodash";
import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import { reducer as formReducer } from "redux-form";

const taskRemovingState = handleActions(
  {
    [actions.removeTaskRequest]() {
      return "requested";
    },
    [actions.removeTasksFailure]() {
      return "failed";
    },
    [actions.removeTasksSuccess](state, { payload: { id } }) {
      const { byId, allIds } = state;
      return {
        byId: _.omit(byId, id),
        allIds: _.without(allIds, id),
      };
    },
  },
  "none"
);

const tasksFetchingState = handleActions(
  {
    [actions.fetchTasksRequest]() {
      return "requested";
    },
    [actions.fetchTasksFailure]() {
      return "failed";
    },
    [actions.fetchTasksSuccess]() {
      return "finished";
    },
  },
  "none"
);

const tasks = handleActions(
  {
    [actions.fetchTasksSuccess](state, { payload }) {
      return {
        byId: _.keyBy(payload.tasks, "id"),
        allIds: payload.tasks.map((t) => t.id),
      };
    },
    [actions.addTaskSuccess](state, { payload: { task } }) {
      const { byId, allIds } = state;
      return {
        byId: { ...byId, [task.id]: task },
        allIds: [task.id, ...allIds],
      };
    },
    [actions.removeTaskSuccess](state, { payload: { id } }) {
      const { byId, allIds } = state;
      return {
        byId: _.omit(byId, id),
        allIds: _.without(allIds, id),
      };
    },
  },
  { byId: {}, allIds: [] }
);

const reducers = combineReducers({
  taskRemovingState,
  tasksFetchingState,
  tasks,
  form: formReducer,
});

////////// NEW TASK FORM
import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, SubmissionError } from "redux-form";
import _ from "lodash";

const actionCreators = {
  addTask: actions.addTask,
};

const NewTaskForm = ({
  addTask,
  reset,
  handleSubmit,
  submitting,
  pristine,
  error,
}) => {
  const onSubmit = async (value) => {
    let { text } = value;
    const task = { text, id: _.uniqueId() };
    try {
      addTask(task);
    } catch (e) {
      throw new SubmissionError({ _error: e.message });
    }
    reset();
  };
  return (
    <form className="form-inline" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group mx-3">
        <Field name="text" required component="input" type="text" />
      </div>
      <input
        type="submit"
        disabled={pristine || submitting}
        className="btn btn-primary btn-sm"
        value="Add"
      />
      {error && <div className="ml-3">{error}</div>}
    </form>
  );

  // END
};

const ConnectedNewTaskForm = connect(null, actionCreators)(NewTaskForm);
const Form = reduxForm({
  form: "newTask",
})(ConnectedNewTaskForm);

//////////////// TASKS
import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  const {
    tasksFetchingState,
    tasks: { byId, allIds },
  } = state;
  const tasks = allIds.map((id) => byId[id]);
  return { tasks, tasksFetchingState };
};

const actionCreators = {
  removeTask: actions.removeTask,
};

const TasksC = ({ removeTask, tasks, tasksFetchingState }) => {
  const handleRemoveTask = (id) => () => {
    removeTask({ id });
  };

  if (tasksFetchingState === "requested") {
    return (
      <div className="spinner-border m-3" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
  if (tasksFetchingState === "failed") {
    return <span>Please, reload page!</span>;
  }

  if (tasks.length === 0) {
    return null;
  }
  return (
    <div className="mt-3">
      <ul className="list-group">
        {tasks.map(({ id, text }) => (
          <li key={id} className="list-group-item d-flex">
            <span className="mr-auto">{text}</span>
            <button
              title="remove"
              type="button"
              data-test="task-remove"
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
};
const Tasks = connect(mapStateToProps, actionCreators)(TasksC);

/////////// RENDER
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";

const App = () => (
  <div className="col-5">
    <Form />
    <Tasks />
  </div>
);

const store = createStore(
  reducers,
  compose(
    // BEGIN (write your solution here)
    applyMiddleware(thunk)
  )
);

store.dispatch(fetchTasks());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("container")
);
