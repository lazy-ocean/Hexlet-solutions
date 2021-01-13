/* progressbar.jsx
Write a realization for a static Bootstrap's progress bar that takes current position as a prop.
 */

///////// SHOWCASE ON CODEPEN: https://codepen.io/lazy_ocean/pen/ExgOYxL
import React from "react";
import ReactDOM from "react-dom";

class Progress extends React.Component {
  render() {
    const percentage = this.props.percentage;
    const divStyle = {
      width: `${percentage}%`,
    };
    return (
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin="0"
          aria-valuemax="100"
          aria-label="progressbar"
          style={divStyle}
        ></div>
      </div>
    );
  }
}

ReactDOM.render(
  <Progress percentage={40} />,
  document.getElementById("container")
);
