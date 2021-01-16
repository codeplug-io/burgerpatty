import React, { Component } from "react";
import Aux from "../../hoc/auxi";
// import withClass from "../../hoc/withClass";
import Radium from "radium";
import style from "./layout-style.js";
// import { classConcat } from "../../assets/functions";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
//REDUX
import { connect } from "react-redux";
//NB: style={} will always overide className={} by default css rules
class Layout extends Component {
  state = {
    showSidedrawer: false
  };

  toggleSidedrawerHandler = () => {
    // const changeShow = this.state.showSidedrawer;
    this.setState(prevState => {
      return { showSidedrawer: !prevState.showSidedrawer };
    });
  };

  render() {
    //
    // console.log(this.state.showSidedrawer);
    // console.log(this.props.isAuth);
    return (
      <Aux>
        <Toolbar
          open={this.toggleSidedrawerHandler}
          isAuth={this.props.isAuth}
        />
        <SideDrawer
          open={this.state.showSidedrawer}
          close={this.toggleSidedrawerHandler}
          isAuth={this.props.isAuth}
        />
        <main style={style.content}>{this.props.children}</main>
      </Aux>
    );
  }
}
const mapStateToProps = state => {
  return {
    isAuth: state.auth.token !== null
  };
};

export default connect(mapStateToProps)(Radium(Layout));
// export default Layout;
//className={classConcat([classes.hoverEffect, classes.blue])}
// [{color: "blue"},  { fontWeight: "bold"  }]
//[color:"blue", fontWeight: "bold"]
