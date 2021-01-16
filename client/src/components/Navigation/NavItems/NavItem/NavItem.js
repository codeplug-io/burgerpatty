import React from "react";
import classes from "./navItem-style.css";
import { NavLink } from "react-router-dom";

const navItem = props => (
  <li className={classes.NavigationItem}>
    <NavLink
      to={props.link}
      exact={props.exact}
      activeClassName={classes.active}
    >
      {props.children}
    </NavLink>
  </li>
);

export default navItem;
// className={props.active ? classes.active : null}
