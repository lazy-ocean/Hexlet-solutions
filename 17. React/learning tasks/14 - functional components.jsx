/* Card.jsx
Write a Card component that is a structure of a Body, Title and Text:
<div class="card">
  <div class="card-body">
    <h4 class="card-title">Title</h4>
    <p class="card-text">Text</p>
  </div>
</div>
*/

/////////// SHOWCASE ON CODEPEN: https://codepen.io/lazy_ocean/pen/yLaweLx

import React from "react";
import ReactDOM from "react-dom";

const Title = (props) => <h4 className="card-title">{props.children}</h4>;
const Text = (props) => <p className="card-text">{props.children}</p>;
const Body = (props) => <div className="card-body">{props.children}</div>;

class Card extends React.Component {
  static Body = Body;
  static Title = Title;
  static Text = Text;

  render() {
    return <div className="card">{this.props.children}</div>;
  }
}
const dom = (
  <Card>
    <Card.Body>
      <Card.Title>Title</Card.Title>
      <Card.Text>Text</Card.Text>
    </Card.Body>
  </Card>
);

ReactDOM.render(dom, document.getElementById("container"));
