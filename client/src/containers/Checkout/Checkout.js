import React, { PureComponent } from "react";
import { withRouter, Route, Redirect } from "react-router-dom";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";
// import Spinner from "../../components/UI/Spinner/Spinner";
//REDUX
import { connect } from "react-redux";
// import * as actionCreators from "../../store/actions/index";

class Checkout extends PureComponent {
  // UNSAFE_componentWillMount() {
  //   this.props.onInitPurchase().then(() => {
  //
  //   });
  // }

  // UNSAFE_componentWillMount() {
  //   // const query = new URLSearchParams(this.props.location.search);
  //   // const ingredients = {};
  //   // let price = 0;
  //   // for (let param of query.entries()) {
  //   //   //['salad', '1']
  //   //   if (param[0] === "price") {
  //   //     price = param[1];
  //   //   } else {
  //   //     ingredients[param[0]] = +param[1];
  //   //   }
  //   // }
  //   //
  //   // this.setState({ ingredients: ingredients, totalPrice: price });
  // }

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };
  checkoutContinueHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    let summary = <Redirect to="/" />;

    // if (this.props.ingr) {
    // }

    if (this.props.ingr) {
      const purchasedRedirect = this.props.purchased ? (
        <Redirect to="/" />
      ) : null;
      summary = (
        <div>
          {purchasedRedirect}{" "}
          <CheckoutSummary
            cancel={this.checkoutCancelledHandler}
            continue={this.checkoutContinueHandler}
            ingredients={this.props.ingr}
          />
          <Route
            path={this.props.match.path + "/contact-data"}
            component={ContactData}
          />
        </div>
      );
    }
    return <div>{summary}</div>;
  }
}

const mapStateToProps = state => {
  return {
    ingr: state.bugBuild.ingredients,
    purchased: state.order.purchased
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     onInitPurchase: () => dispatch(actionCreators.purchaseInit())
//   };
// };
export default connect(mapStateToProps)(withRouter(Checkout));
// ingredients={this.props.location.state}
// <Route
//   path={this.props.match.path + "/contact-data"}
//   render={props => (
//     <ContactData
//       price={this.props.price}
//       ingredients={this.props.ingredients}
//       {...props}
//     />
//   )}
// />
