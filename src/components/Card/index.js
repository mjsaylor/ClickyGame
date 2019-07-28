import React from 'react';
import "./style.css"

function Card(props) {
  return (
    <div className="Card" onClick={props.onClick}>
      <img src={props.image} id={props.imageId} className="Card-img" alt={props.name} />
    </div>
  );
}

export default Card;