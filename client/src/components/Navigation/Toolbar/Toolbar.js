import React from "react";
import classes from "./toolbar-style.css";
import LogoLink from "../../Logo/LogoLink";
import NavItems from "../NavItems/NavItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import burgerLogo from "../../../assets/images/burgerLogo.png";

const toolbar = props => (
  <header className={classes.Toolbar}>
    <DrawerToggle open={props.open}>
      <div></div>
      <div></div>
      <div></div>
    </DrawerToggle>
    <div className={classes.Logo}>
      <LogoLink href="/" src={burgerLogo} alt="BurgerMe" />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavItems isAuth={props.isAuth} />
    </nav>
  </header>
);

export default toolbar;
