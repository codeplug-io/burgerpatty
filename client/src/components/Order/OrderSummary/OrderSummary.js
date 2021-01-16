import React, { Component } from "react";
import Aux from "../../../hoc/auxi";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  // UNSAFE_componentWillUpdate() {
  //   console.log("[OrderSummary] WillUpdate");
  // }

  render() {
    //
    const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
      return (
        <li key={igKey + this.props.ingredients[igKey]}>
          <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
          {this.props.ingredients[igKey]}
        </li>
      );
    });
    ///
    return (
      <Aux>
        <h3>Your Order</h3>
        <p>1 burger with the following incredients: </p>
        <ul>{ingredientSummary}</ul>
        <p>
          Total Amount:{" "}
          <strong style={{ color: "green" }}>
            $ {this.props.price.toFixed(2)}
          </strong>
        </p>
        <p>Continue to checkout..</p>
        <Button click={this.props.cancelSubmit} btnType="Danger">
          CANCEL
        </Button>
        <Button click={this.props.continue} btnType="Success">
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
