import React, { Component } from "react";
import style from "./ingredient-style";
import PropTypes from "prop-types";

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case "bread-bottom":
        ingredient = <div style={style.BreadBottom}></div>;
        break;
      case "bread-top":
        ingredient = (
          <div style={style.BreadTop}>
            <div style={style.Seeds5}></div>
            <div style={style.Seeds4}></div>
            <div style={style.Seeds1}></div>
            <div style={style.Seeds6}></div>
            <div style={style.Seeds2}></div>
            <div style={style.Seeds3}></div>
          </div>
        );
        break;
      case "meat":
        ingredient = <div style={style.Meat}></div>;
        break;
      case "cheese":
        ingredient = <div style={style.Cheese}></div>;
        break;
      case "bacon":
        ingredient = <div style={style.Bacon}></div>;
        break;
      case "salad":
        ingredient = <div style={style.Salad}></div>;
        break;
      default:
        ingredient = null;
    }
    //
    return ingredient;
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredient;
