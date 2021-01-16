import React from "react";
import Radium from "radium";
import style from "./controls-style";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./controls-style.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const buildControls = props => {
  // console.log(props.disabled);
  return (
    <div style={style.BuildControls}>
      <p>
        current price: <strong>$ {props.price.toFixed(2)}</strong>
      </p>
      {controls.map(ctrl => {
        return (
          <BuildControl
            key={ctrl.label + 1}
            label={ctrl.label}
            add={() => props.addIngredient(ctrl.type) && props.purchase()}
            remove={() => props.removeIngredient(ctrl.type) && props.purchase()}
            disable={props.disabled[ctrl.type]}
          />
        );
      })}
      {props.isAuth ? (
        <button
          className={classes.OrderButton}
          onClick={props.submitOrder}
          disabled={!props.purchasable}
        >
          Order
        </button>
      ) : null}
      {props.isAuth ? null : (
        <button className={classes.OrderButtonGreen} onClick={props.login}>
          Get Started
        </button>
      )}
    </div>
  );
};

export default Radium(buildControls);
