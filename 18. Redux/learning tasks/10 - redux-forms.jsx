/* redux-forms.jsx
Realize the same logic using redux-forms library.
*/

import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

///////////// FORM

const mapStateToProps = () => {
  const props = {};
  return props;
};

const actionCreators = {
  addTask: actions.addTask,
};

const NewTaskForm = ({ addTask, reset, handleSubmit }) => {
  const onSubmit = (value) => {
    let { text } = value;
    const task = { text, id: _.uniqueId() };
    addTask({ task });
    reset();
  };

  return (
    <form className="form-inline" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group mx-3">
        <Field name="text" required component="input" type="text" />
      </div>
      <input type="submit" className="btn btn-primary btn-sm" value="Add" />
    </form>
  );
};

const ConnectedNewTaskForm = connect(
  mapStateToProps,
  actionCreators
)(NewTaskForm);

const Form = reduxForm({
  form: "newTask",
})(ConnectedNewTaskForm);

///////// REDUCERS
const tasks = handleActions(
  {
    [actions.addTask](state, { payload: { task } }) {
      const { byId, allIds } = state;
      return {
        byId: { ...byId, [task.id]: task },
        allIds: [task.id, ...allIds],
      };
    },
    [actions.removeTask](state, { payload: { id } }) {
      const { byId, allIds } = state;
      return {
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
  },
  { byId: {}, allIds: [] }
);

const reducers = combineReducers({
  tasks,
  form: formReducer,
});
