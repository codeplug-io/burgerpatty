import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import classes from "./checkout-classes.css";

const checkoutSummary = props => {
  return (
    <div className={classes.checkoutSummary}>
      <h1>hmm! Yummy.. just a click away, Enjoy.</h1>
      <div style={{ width: "100%", height: "300px", margin: "auto" }}>
        <Burger
          ingredients={
            props.ingredients
              ? props.ingredients
              : { salad: 0, bacon: 0, cheese: 0, meat: 0 }
          }
        />
        <Button btnType="Danger" click={props.cancel}>
          CANCEL
        </Button>
        <Button btnType="Success" click={props.continue}>
          CONTINUE
        </Button>
      </div>
    </div>
  );
};

export default checkoutSummary;
