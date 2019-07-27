import React from 'react';
import "./style.css"

function Card(props) {
  return (
    <div className="Card">
      <img src={props.image} className="Card-img" alt={props.name} />
    </div>
  );
}

export default Card;