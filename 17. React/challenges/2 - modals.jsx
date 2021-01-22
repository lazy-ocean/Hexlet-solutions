/* Notepad.jsx
Write a simple notepad that is able to add notes, edit it and remove it.
*/

////////// SHOWCASE ON CODEPEN: https://codepen.io/lazy_ocean/pen/dypEvMB

import React, { useState, useEffect, useRef } from "react";
import { useImmer } from "use-immer";
import getModal from "./modals/index.js";
import _ from "lodash";
import { useFormik } from "formik";
import ReactDOM from "react-dom";

const App = () => {
  const [addModal, openAddModal] = useState(false);
  const [renameModal, openRenameModal] = useState(false);
  const [removeModal, openRemoveModal] = useState(false);
  const [tasks, editTasks] = useState([]);
  const handleChange = (value, instr, init = null) => {
    switch (instr) {
      case "add":
        editTasks([value, ...tasks]);
        openAddModal(false);
        break;
      case "remove":
        editTasks(tasks.filter((task) => task !== value));
        openRemoveModal(false);
        break;
      case "rename":
        editTasks(tasks.map((task) => (task !== init ? task : value)));
        openRenameModal(false);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="mb-3">
        <button
          type="button"
          data-testid="item-add"
          className="btn btn-secondary"
          onClick={() => openAddModal(true)}
        >
          add
        </button>
      </div>
      {tasks.map((task) => (
        <div key={_.uniqueId()}>
          <span className="mr-3">{task}</span>
          <button
            type="button"
            className="border-0 btn-link mr-3 p-0"
            data-testid="item-rename"
            onClick={() => openRenameModal(task)}
          >
            rename
          </button>
          <button
            type="button"
            className="border-0 btn-link p-0"
            data-testid="item-remove"
            onClick={() => openRemoveModal(task)}
          >
            remove
          </button>
        </div>
      ))}
      {addModal && (
        <Add
          onAdd={(value) => handleChange(value, "add")}
          onClose={() => openAddModal(false)}
        />
      )}
      {removeModal && (
        <Remove
          onRemove={() => handleChange(removeModal, "remove")}
          onClose={() => openRemoveModal(false)}
        />
      )}
      {renameModal && (
        <Rename
          onRename={(value) => handleChange(value, "rename", renameModal)}
          init={renameModal}
          onClose={() => openRenameModal(false)}
        />
      )}
    </>
  );
};

const Add = (props) => {
  let [value, setValue] = useState("");
  let { onAdd, onClose } = props;
  let ref = useRef();
  useEffect(() => {
    ref.current.focus();
  }, []);
  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <div className="modal-title h4">Add</div>
          <button className="close" type="button" onClick={onClose}>
            <span aria-hidden="true">×</span>
            <span className="sr-only">Close</span>
          </button>
        </div>
        <div className="modal-body">
          <form onSubmit={() => onAdd(value)}>
            <div className="form-group">
              <input
                className="form-control"
                ref={ref}
                data-testid="input-body"
                name="body"
                required
                onChange={(e) => setValue(e.target.value)}
                value={value}
              />
            </div>
            <input className="btn btn-primary" type="submit" value="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

const Remove = (props) => {
  let { onRemove, onClose } = props;
  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <div className="modal-title h4">Remove</div>
          <button className="close" type="button" onClick={() => onClose()}>
            <span aria-hidden="true">×</span>
            <span className="sr-only">Close</span>
          </button>
        </div>
        <div className="modal-body">
          <form onSubmit={onRemove}>
            <div className="form-group">
              <input className="btn btn-danger" type="submit" value="remove" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const Rename = (props) => {
  let { init, onRename, onClose } = props;
  let ref = useRef();
  useEffect(() => {
    ref.current.focus();
    ref.current.select();
  }, []);
  const formik = useFormik({
    initialValues: {
      body: init,
    },
    onSubmit: (values) => {
      onRename(values.body);
    },
  });
  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <div className="modal-title h4">Rename</div>
          <button className="close" type="button" onClick={() => onClose()}>
            <span aria-hidden="true">×</span>
            <span className="sr-only">Close</span>
          </button>
        </div>
        <div className="modal-body">
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <input
                ref={ref}
                className="form-control"
                data-testid="input-body"
                name="body"
                required
                value={formik.values.body}
                onChange={formik.handleChange}
              />
            </div>
            <input className="btn btn-primary" type="submit" value="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("container"));
