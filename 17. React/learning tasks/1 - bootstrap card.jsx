/* Card.jsx
Write a realization for the Bootstrap's card component using React in Card.jsx. Export it to index.jsx and render it inside the DOM element with id #container.
*/

//////// SHOWCASE ON CODEPEN https://codepen.io/lazy_ocean/pen/bGwmgKO

import React from "react";
import ReactDOM from "react-dom";

///////////////// CARD.JSX
export default class Card extends React.Component {
  render() {
    const crd = (
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Card title</h4>
          <p className="card-text">
            Some quick example text to build on the card
          </p>
          <button type="button" className="btn btn-primary">
            Go somewhere
          </button>
        </div>
      </div>
    );
    return crd;
  }
}

//////////////// INDEX.JSX
import Card from "./Card.jsx";

const mountNode = document.getElementById("container");
ReactDOM.render(<Card />, mountNode);
