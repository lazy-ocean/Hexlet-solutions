/* Card.jsx
Write Card component that takes title and text props.
*/
import React from "react";
import ReactDOM from "react-dom";

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">{this.props.title}</h4>
          <p className="card-text">{this.props.text}</p>
        </div>
      </div>
    );
  }
}

const title = "Title";
const text = "Description";

ReactDOM.render(
  <Card title={title} text={text} />,
  document.getElementById("container")
);
