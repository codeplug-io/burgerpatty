import React from "react";
import classes from "./title-style.css";

const title = props => {
  return (
    <div className={classes.TitleContainer}>
      <div className={classes.Title}>
        <div className={classes.TitleBig}>{props.title}</div>
        <div className={classes.TitleSmall}>{props.children}</div>
      </div>
    </div>
  );
};

export default title;
