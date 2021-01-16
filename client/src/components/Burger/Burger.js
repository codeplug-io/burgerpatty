import React from "react";
// import { withRouter } from "react-router-dom";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import style from "./burger-style";
import Radium, { StyleRoot } from "radium";

const burger = props => {
  //
  let transformedIngredient = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        // console.log(
        //   "trying to grab the index of each ingr by mapping an empty array"
        // );

        return <BurgerIngredient type={igKey} key={igKey + i} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedIngredient.length === 0) {
    transformedIngredient = <p>click button below to add ingredients</p>;
  }

  ////

  return (
    <StyleRoot>
      <div style={style.Burger}>
        <BurgerIngredient type="bread-top" />
        {transformedIngredient}
        <BurgerIngredient type="bread-bottom" />
      </div>
    </StyleRoot>
  );
};

export default Radium(burger);
// export default withRouter(burger);
