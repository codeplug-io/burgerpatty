import React, { Component } from "react";
import Logo from "../../Logo/Logo";
import NavItems from "../NavItems/NavItems";
import classes from "./sideDrawer-style.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/auxi";
import burgerLogo from "../../../assets/images/burgerLogo.png";

let ATTACHED_CLASSES = [classes.SideDrawer, classes.Close];

class SideDrawer extends Component {
  //
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.open === !nextProps.open;
  }
  //
  UNSAFE_componentWillUpdate() {
    /*trying to fix animation glitches on reload....
    i used this.props.open as the condition, it didnt work
    but when i changed it to !this.props.open it work,
    TODO: Still have to check why it worked*/
    if (!this.props.open) {
      return (ATTACHED_CLASSES = [classes.SideDrawer, classes.Open]);
    }
    ATTACHED_CLASSES = [classes.SideDrawer, classes.CloseAnime];
  }
  //
  render() {
    //...

    return (
      <Aux>
        <Backdrop show={this.props.open} clicked={this.props.close} />
        <div className={ATTACHED_CLASSES.join(" ")}>
          <div className={classes.Logo}>
            <Logo src={burgerLogo} alt="burgerLogo" />
          </div>
          <nav>
            <NavItems isAuth={this.props.isAuth} />
          </nav>
        </div>
      </Aux>
    );
  }
}

export default SideDrawer;
