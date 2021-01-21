/* IncrementingButtons.jsx
Using React hooks, write a component for some number of buttons: click on every button results in incrementing its value by one and the last pressed button has 'btn-success' Bootsrap class (all other - 'btn-primary')
*/

///////////// SHOWCASE ON CODEPEN: https://codepen.io/lazy_ocean/pen/PoGgdwz

import React from "react";
import { useImmer } from "use-immer";
import cn from "classnames";
import _ from "lodash";
import ReactDOM from "react-dom";

const Buttons = (props) => {
  const { count = 3 } = props;
  const initButtonsState = {
    active: null,
    values: _.times(count, _.constant(0)),
  };
  const [state, updateState] = useImmer(initButtonsState);
  const increment = (index) => () => {
    updateState((state) => {
      state.active = index;
      state.values[index] += 1;
    });
  };

  return (
    <>
      {state.values.map((btn, i) => (
        <button
          key={i}
          onClick={increment(i)}
          className={cn({
            btn: true,
            "btn-primary": state.active !== i,
            "btn-success": state.active === i,
            "m-1": true,
          })}
          type="button"
        >
          {state.values[i]}
        </button>
      ))}
    </>
  );
};

ReactDOM.render(<Buttons count={5} />, document.getElementById("container"));
