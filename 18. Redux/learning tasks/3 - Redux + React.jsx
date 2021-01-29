/* App.jsx
Write a realization for a simple text input: when text changes, it appears under the input form. Add Reset button to clear the form. 
*/

//////// SHOWCASE ON CODEPEN: https://codepen.io/lazy_ocean/pen/rNWNGqZ

import { combineReducers, createStore } from "redux";
import ReactDOM from "react-dom";
import React from "react";

/////////// ACTIONS
const updateText = (text) => ({
  type: "INPUT",
  payload: {
    text,
  },
});

const resetText = () => ({
  type: "RESET",
  payload: {},
});

////////// REDUCERS
const text = (state = "", action) => {
  switch (action.type) {
    case "INPUT": {
      const { text } = action.payload;
      return text;
    }
    case "RESET":
      return "";
    default:
      return state;
  }
};

const reducers = combineReducers({
  text,
});

/////////// COMPONENT
const App = ({ text = "", dispatch, updateText, resetText }) => {
  const handleChange = (e) => {
    dispatch(updateText(e.target.value));
  };
  const handleReset = () => {
    dispatch(resetText());
  };
  return (
    <div>
      <form>
        <input type="text" value={text} onChange={handleChange} />
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>
      <div>{text}</div>
    </div>
  );
};

//////// RENDERING
const store = createStore(reducers);

const render = (text) => {
  ReactDOM.render(
    <App
      dispatch={store.dispatch}
      text={text}
      updateText={updateText}
      resetText={resetText}
    />,
    document.getElementById("container")
  );
};

store.subscribe(() => {
  const { text } = store.getState();
  render(text);
});

render("meow");
