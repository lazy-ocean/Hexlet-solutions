/* ListGroup.jsx
Write ListGroup component that renders argumented children as <ul><li> html list.
*/

////////// SHOWCASE ON CODEPEN: https://codepen.io/lazy_ocean/pen/eYdQyrB
import ReactDOM from "react-dom";
import React from "react";

class ListGroup extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <ul className="list-group">
        {React.Children.map(children, (child) => (
          <li className="list-group-item">{child}</li>
        ))}
      </ul>
    );
  }
}

const dom = (
  <ListGroup>
    <p>one</p>
    <p>two</p>
  </ListGroup>
);

ReactDOM.render(dom, document.getElementById("container"));
