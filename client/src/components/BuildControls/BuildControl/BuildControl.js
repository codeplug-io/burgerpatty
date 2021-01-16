import React from "react";
// import style from "./control-style";
// import Radium from "radium";
import classes from "./control-style.css";

const buildControl = props => {
  // console.log(props.disable);/
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button
        className={classes.Less}
        disabled={props.disable}
        onClick={props.remove}
      >
        Less
      </button>
      <button key={1} className={classes.More} onClick={props.add}>
        More
      </button>
    </div>
  );
};

export default buildControl;
