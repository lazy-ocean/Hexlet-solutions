/* getCard.jsx
Write a function that takes an object with title and/or text and returns ready for rendering jsx of Bootstrap's card with title and text in the proper tags.
If no title or text specified, these tags should not be rendered. If there're no text AND title, return null.
getCard({ title: 'hi', text: 'how are you?' }) =>
// <div className="card">
//   <div className="card-body">
//     <h4 className="card-title">hi</h4>
//     <p className="card-text">how are you?</p>
//   </div>
// </div>
*/
import React from "react";

const getCard = ({ title, text }) => {
  return title || text ? (
    <div className="card">
      <div className="card-body">
        {title ? <h4 className="card-title">{title}</h4> : false}
        {text ? <p className="card-text">{text}</p> : false}
      </div>
    </div>
  ) : null;
};
