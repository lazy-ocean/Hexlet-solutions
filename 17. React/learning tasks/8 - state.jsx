/* BtnGroup.jsx
Write a BtnGroup component that renders two buttons: click on one makes it active and the other one inactive.
*/

////// SHOWCASE ON CODEPEN: https://codepen.io/lazy_ocean/pen/rNMQvmL
import ReactDOM from "react-dom";
import React from "react";
import cn from "classnames";

class BtnGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
  }

  selectLeft = () => this.setActive("left");
  selectRight = () => this.setActive("right");

  setActive = (active) => {
    this.setState({ active });
  };

  render() {
    const sharedClass = {
      btn: true,
      "btn-secondary": true,
    };
    return (
      <div>
        <button
          type="button"
          className={cn({
            ...sharedClass,
            ...{ active: this.state.active === "left" },
          })}
          onClick={this.selectLeft}
        >
          Left
        </button>
        <button
          type="button"
          className={cn({
            ...sharedClass,
            ...{ active: this.state.active === "right" },
          })}
          onClick={this.selectRight}
        >
          Right
        </button>
      </div>
    );
  }
}

ReactDOM.render(<BtnGroup />, document.getElementById("container"));
