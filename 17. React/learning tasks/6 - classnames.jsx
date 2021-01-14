/* Alerts.jsx
Write an Alert React component that has some text and changes according to its type (one of these: primary, secondary, success, danger, warning, info, light, dark).
Type is changed by adding proper class: class="alert alert-warning", "alert alert-light" and so on.
*/

////// SHOWCASE ON CODEPEN: https://codepen.io/lazy_ocean/pen/abmQyjL

import cn from "classnames";
import React from "react";
import ReactDOM from "react-dom";

class Alert extends React.Component {
  render() {
    const { type, text } = this.props;
    const alertClass = cn("alert", `alert-${type}`);
    return (
      <div className={alertClass} role="alert">
        {text}
      </div>
    );
  }
}

ReactDOM.render(
  <Alert type="warning" text="what is love?" />,
  document.getElementById("container")
);
