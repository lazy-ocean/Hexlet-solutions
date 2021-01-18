/* Buttons.jsx
Write a React component that has two buttons ("+" and "-") and a log: 
- every click on + or - increments or decrements some value (starting with 0) and adds a line on the log with the new value as a button content (click on + => adding <button type="button" class="list-group-item list-group-item-action">1</button>).
- click on log button deletes the line and affects next increment-decrement values.
*/

///// SHOWCASE ON CODEPEN - https://codepen.io/lazy_ocean/pen/zYKeREd
import React from "react";
import ReactDOM from "react-dom";
import _ from "lodash";

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currNum: 0,
      items: false,
    };
  }
  removeItem = (id) => (e) => {
    e.preventDefault();
    let updatedItems = this.state.items.filter((item) => item.id !== id);
    if (!updatedItems.length) updatedItems = false;
    this.setState({ items: updatedItems });
  };
  decrement = (e) => {
    e.preventDefault();
    let newNum = this.state.items[0] ? this.state.items[0].value - 1 : -1;
    let newItem = { id: _.uniqueId(), value: newNum };
    this.setState({
      items: [newItem, ...(this.state.items || [])],
      currNum: newNum,
    });
  };
  increment = (e) => {
    e.preventDefault();
    let newNum = this.state.items[0] ? this.state.items[0].value + 1 : 1;
    let newItem = { id: _.uniqueId(), value: newNum };
    this.setState({
      items: [newItem, ...(this.state.items || [])],
      currNum: newNum,
    });
  };

  render() {
    return (
      <div>
        <div className="btn-group" role="group">
          <button
            type="button"
            className="btn hexlet-inc"
            onClick={this.increment}
          >
            +
          </button>
          <button
            type="button"
            className="btn hexlet-dec"
            onClick={this.decrement}
          >
            -
          </button>
        </div>
        {this.state.items.length && (
          <div className="list-group">
            {this.state.items.map((item) => (
              <button
                type="button"
                className="list-group-item list-group-item-action"
                onClick={this.removeItem(item.id)}
                key={_.uniqueId()}
              >
                {item.value}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<Component />, document.getElementById("container"));
