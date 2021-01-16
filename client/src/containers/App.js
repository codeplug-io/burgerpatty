import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
// import { BrowserRouter, Route, withRouter } from "react-router-dom";
import "./App.css";
import Layout from "../components/Layout/Layout";
import BurgerBuilder from "./BurgerBuilder/BurgerBuilder";
import { StyleRoot } from "radium";
import style from "../components/Layout/layout-style.js";
import Checkout from "./Checkout/Checkout";
import Orders from "./Orders/Orders";
import Auth from "./Auth/Auth";
import Logout from "./Auth/Logout";
//Login
import { connect } from "react-redux";
import * as actionCreators from "../store/actions/index";

// import Cockpit from "../components/Cockpit/Cockpit";
// import WithClass from "../hoc/withClass";
//this file will hold future routing logic...
class App extends Component {
  componentDidMount() {
    this.props.onTryAutoLogin();
  }
  // componentDidMount() {
  //   setTimeout(() => {
  //     alert(
  //       "Delish Offer! make your orders and get em doubled, expires tomorrow."
  //     );
  //   }, 6000);
  // }
  render() {
    let title = "Relevant Title Name Space";
    return (
      <BrowserRouter>
        <StyleRoot>
          <Layout>
            <div style={style.query}>
              {this.props.isAuth ? (
                <Route path="/checkout" component={Checkout} />
              ) : null}
              {this.props.isAuth ? (
                <Route path="/orders" component={Orders} />
              ) : null}
              <Route path="/auth" component={Auth} />
              {this.props.isAuth ? (
                <Route path="/logout" component={Logout} />
              ) : null}
              <Route
                path="/"
                exact
                render={props => <BurgerBuilder title={title} {...props} />}
              />
              <Redirect to="/" />
            </div>
          </Layout>
        </StyleRoot>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoLogin: () => dispatch(actionCreators.checkAuthState())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
//FIXING ERRORS WITH Connect and Routing
// import { BrowserRouter, Route, withRouter } from "react-router-dom";
// export default withRouter(
//   connect(
//     null,
//     mapDispatchToProps
//   )(App)
// );
//Mine didnt break because i didnt wrap my app in index.js with <BrowserRouter />
//still locking out to see if there are unknown/undetectable behaviors in the Route paths
