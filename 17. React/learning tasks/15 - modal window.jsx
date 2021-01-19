/* Modal.jsx
Write a realization for a modal window.
You have initial code for its use - class Component. Build Modal accordingly.
*/

////////// SHOWCASE ON CODEPEN: https://codepen.io/lazy_ocean/pen/JjRzXyO

import cn from "classnames";
import React from "react";
import ReactDOM from "react-dom";

//////////////// MODAL
const Header = (props) => {
  const { toggle } = props;
  return (
    <div className="modal-header">
      <div className="modal-title">{props.children}</div>
      <button
        type="button"
        className="close"
        data-dismiss="modal"
        aria-label="Close"
        onClick={toggle}
      >
        <span aria-hidden="true">×</span>
      </button>
    </div>
  );
};
const Body = (props) => <p className="modal-body">{props.children}</p>;
const Footer = (props) => <p className="modal-footer">{props.children}</p>;

class Modal extends React.Component {
  static Header = Header;
  static Body = Body;
  static Footer = Footer;

  render() {
    let { isOpen } = this.props;
    let style = {
      display: isOpen ? "block" : "none",
    };
    let classList = cn({
      modal: true,
      fade: isOpen,
      show: isOpen,
    });
    return (
      <div className={classList} style={style} role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

////////////// PRESET COMPONENT
class Component extends React.Component {
  state = { modal: false };

  toggle = (e) => {
    e.preventDefault();

    this.setState({
      modal: !this.state.modal,
    });
  };

  render() {
    return (
      <div>
        <button
          type="button"
          className="modal-open-button btn btn-danger"
          onClick={this.toggle}
        >
          Open
        </button>
        <Modal isOpen={this.state.modal}>
          <Modal.Header toggle={this.toggle}>Modal title</Modal.Header>
          <Modal.Body>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </Modal.Body>
          <Modal.Footer>
            <button
              type="button"
              className="modal-close-button btn btn-default"
              onClick={this.toggle}
            >
              Cancel
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

ReactDOM.render(<Component />, document.getElementById("container"));
