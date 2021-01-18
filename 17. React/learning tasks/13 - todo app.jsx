/* TodoApp.jsx
Realize a simple todo app: user can add and remove tasks.
*/

////////// SHOWCASE ON CODEPEN: https://codepen.io/lazy_ocean/pen/JjRxZBv

import _ from "lodash";
import React from "react";
import ReactDOM from "react-dom";

class Item extends React.Component {
  render() {
    const { task, onRemove } = this.props;
    return (
      <div>
        <div className="row">
          <div>
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={onRemove(task)}
            >
              -
            </button>
          </div>
          <div className="col-10">{task}</div>
        </div>
        <hr />
      </div>
    );
  }
}

class TodoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: _.uniqueId(), value: "Pet a cat" },
        { id: _.uniqueId(), value: "Feed a cat" },
      ],
      task: "",
    };
  }
  handleRemove = (value) => (e) => {
    e.preventDefault();
    const newItems = this.state.items.filter((item) => item.value !== value);
    this.setState({ items: newItems });
  };
  handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    this.setState({
      task: value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let newTask = { id: _.uniqueId(), value: this.state.task };
    this.setState({
      task: "",
      items: [newTask, ...(this.state.items || [])],
    });
  };
  render() {
    return (
      <div>
        <div className="mb-3">
          <form
            className="todo-form form-inline mx-3"
            onSubmit={this.handleSubmit}
          >
            <div className="form-group">
              <input
                type="text"
                value={this.state.task}
                required=""
                id="task"
                className="form-control mr-3"
                onChange={this.handleChange}
                placeholder="I am going..."
              />
            </div>
            <button type="submit" className="btn btn-primary">
              add
            </button>
          </form>
        </div>
        {this.state.items &&
          this.state.items.map((i) => (
            <Item onRemove={this.handleRemove} task={i.value} key={i.id} />
          ))}
      </div>
    );
  }
}

ReactDOM.render(<TodoBox />, document.getElementById("container"));
