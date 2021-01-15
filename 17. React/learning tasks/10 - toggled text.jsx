/* Collapse.jsx
Write Collapse component that on click toggles the content of the card and hides on repeated click.
The initial state (show: true/false) and the hidden text are in props.
*/

////////// SHOWCASE ON CODEPEN: https://codepen.io/lazy_ocean/pen/dypwMeL

import React from "react";
import ReactDOM from "react-dom";
import cn from "classnames";

class Collapse extends React.Component {
  static defaultProps = {
    opened: true,
    text: "Hidden text",
  };
  constructor(props) {
    super(props);
    this.state = { opened: this.props.opened };
  }
  showText = () => {
    let { opened } = this.state;
    this.setState({ opened: !opened });
  };
  render() {
    let { text } = this.props;
    let { opened } = this.state;
    let classList = cn({
      collapse: true,
      show: opened,
    });
    return (
      <div>
        <p>
          <a className="btn btn-primary" href="#" onClick={this.showText}>
            Link with href
          </a>
        </p>
        <div className={classList}>
          <div className="card card-body">{text}</div>
        </div>
      </div>
    );
  }
}
const text = "Hidden text";
ReactDOM.render(<Collapse text={text} />, document.getElementById("container"));
