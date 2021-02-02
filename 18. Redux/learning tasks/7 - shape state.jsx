/* shapedState.jsx
Rework state according to these guildlines (https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape) and add "finished" task functionality: on click by task it's getting crossed out.
*/

////////////////////// SHOWCASE ON CODEPEN: https://codepen.io/lazy_ocean/pen/RwoPJwB

/////////// REDUCERS
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
      const { byId, allIds } = state;
      state.byId[id].state =
        state.byId[id].state === "active" ? "inactive" : "active";
      return { ...state };
    },
  },
  { byId: {}, allIds: [] }
);

const text = handleActions(
  {
    [actions.addTask]() {
      return "";
    },
    [actions.updateNewTaskText](_state, { payload }) {
      return payload.text;
    },
  },
  ""
);

export default combineReducers({
  tasks,
  text,
});

////////////// TASKS
const mapStateToProps = (state) => {
  const { tasks, text } = state;
  let { byId, allIds } = tasks;
  let t = [];
  Object.entries(byId).map(([key, info]) => {
    let { text, id, state } = info;
    state = !state ? "active" : state;
    t.push({ id: key, text: text, state });
  });
  const props = {
    tasks: t,
    text,
  };
  return props;
};

const actionCreators = {
  removeTask: actions.removeTask,
  toggleTaskState: actions.toggleTaskState,
};

const Tasks = ({ tasks, removeTask, toggleTaskState }) => {
  const handleRemoveTask = (id) => () => {
    removeTask({ id });
  };

  const handleToggleTaskState = (id) => () => {
    toggleTaskState({ id });
  };

  if (tasks.length === 0) {
    return null;
  }
  console.log(tasks);
  return (
    <div className="mt-3">
      <ul className="list-group">
        {tasks.map(({ id, text, state }) => (
          <li key={id} className="list-group-item d-flex">
            <span className="mr-auto">
              <a href="#" onClick={handleToggleTaskState(id)}>
                {state === "active" ? text : <s>{text}</s>}
              </a>
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
};

export default connect(mapStateToProps, actionCreators)(Tasks);
