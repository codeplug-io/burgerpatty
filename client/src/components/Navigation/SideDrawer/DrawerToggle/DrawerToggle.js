import React from "react";
import classes from "./drawer-style.css";

const drawerToggle = props => (
  <div className={classes.DrawerToggle} onClick={props.open}>
    {props.children}
  </div>
);

export default drawerToggle;
