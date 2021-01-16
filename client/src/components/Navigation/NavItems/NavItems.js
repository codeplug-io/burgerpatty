import React from "react";
import classes from "./navItems-style.css";
import NavItem from "./NavItem/NavItem";

// import {connect} from 'redux';

const navItems = props => {
  return (
    <ul className={classes.NavigationItems}>
      <NavItem link="/" exact>
        Burger Builder
      </NavItem>
      {props.isAuth ? <NavItem link="/orders">Orders</NavItem> : null}
      {props.isAuth ? (
        <NavItem link="/logout">Logout</NavItem>
      ) : (
        <NavItem link="/auth">Login</NavItem>
      )}
    </ul>
  );
};

//outsourcing links in their individual component
export default navItems;
