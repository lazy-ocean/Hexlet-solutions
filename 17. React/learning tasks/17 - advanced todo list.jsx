/* Todo.jsx
Write a realization for a small todo app: this time make two categories: finished tasks and active, and user should be able to move active to finished and vice versa on click on task. Finished task gets overcrossed.
Work with backend:
--- GET /tasks - get all tasks.
Response: [{"id":1,"text":"asdf","state":"finished"},{"id":2,"text":"asdasd","state":"active"}]
--- POST /tasks - create a new task
Request: {"text": "new task"}
Response: {"id":4,"text":"new task","state":"active"}
--- PATCH /tasks/:id/finish - mark task as finished
Response: {"id":1,"text":"asdf","state":"finished"}
-- PATCH /tasks/:id/activate - mark finished task as active
Response: {"id":1,"text":"asdf","state":"active"}
*/

/////////// SHOWCASE ON CODEPEN: https://codepen.io/lazy_ocean/pen/bGwZPqp

import axios from "axios";
import React from "react";
import update from "immutability-helper";
import ReactDOM from "react-dom";

class Item extends React.Component {
  render() {
    const { task, id, state, onClick } = this.props;
    return (
      <div className="row" key={id}>
        <div className="col-1">{id}</div>
        <div className="col">
          {state === "active" ? (
            <a href="#" className="todo-task" onClick={onClick(id, state)}>
              {task}
            </a>
          ) : (
            <s>
              <a href="#" className="todo-task" onClick={onClick(id, state)}>
                {task}
              </a>
            </s>
          )}
        </div>
      </div>
    );
  }
}

class TodoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "", tasks: [] };
  }
  handleChange = (e) => {
    e.preventDefault();
    const target = e.target;
    const value = target.value;
    this.setState({
      input: value,
    });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    let newTask = { text: this.state.input };
    let response = await axios.post("/tasks", newTask);
    this.setState({
      input: "",
      tasks: [response.data, ...this.state.tasks],
    });
  };
  async componentDidMount() {
    let currTasks = await axios.get("/tasks");
    this.setState({
      tasks: currTasks.data || [],
    });
  }
  handleClick = (id, state) => async (e) => {
    e.preventDefault();
    let updatedTask =
      state === "finished"
        ? await axios.patch(`/tasks/${id}/activate`)
        : await axios.patch(`/tasks/${id}/finish`);
    const updatedTasks = update(this.state.tasks, {
      $apply: (x) =>
        x.map((item) => {
          return item.id !== id ? item : updatedTask.data;
        }),
    });
    this.setState({
      tasks: updatedTasks,
    });
  };
  render() {
    let allTasks = this.state.tasks;
    let activeTasks, finishedTasks;
    if (allTasks.length) {
      activeTasks = allTasks.filter((task) => task.state === "active");
      finishedTasks = allTasks.filter((task) => task.state === "finished");
    }

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
                value={this.state.input}
                required
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
        {allTasks.length && activeTasks.length ? (
          <div className="todo-active-tasks">
            {activeTasks.map((task) => (
              <Item
                task={task.text}
                id={task.id}
                key={task.id}
                state={task.state}
                onClick={this.handleClick}
              />
            ))}
          </div>
        ) : null}
        {allTasks.length && finishedTasks.length ? (
          <div className="todo-finished-tasks">
            {finishedTasks.map((task) => (
              <Item
                task={task.text}
                id={task.id}
                key={task.id}
                state={task.state}
                onClick={this.handleClick}
              />
            ))}
          </div>
        ) : null}
      </div>
    );
  }
}

ReactDOM.render(<TodoBox />, document.getElementById("container"));
