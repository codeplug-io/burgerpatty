import React from "react";
import Auxi from "../../hoc/auxi";

const cockpit = props => {
  let title;
  if (props.title) {
    title = props.title;
  } else {
    title = "rendering component person ";
  }
  return (
    <Auxi>
      <h1>{title}</h1>
      <button onClick={props.toggleShow} className="persons-button">
        alter cards
      </button>
    </Auxi>
  );
};

export default cockpit;
