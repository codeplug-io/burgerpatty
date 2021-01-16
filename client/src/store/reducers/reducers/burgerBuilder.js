import * as actionTypes from "../../actions/index";

// {
//   salad: 0,
//   bacon: 0,
//   cheese: 0,
//   meat: 0
// }
const initialState = {
  ingredients: null,
  totalPrice: 4,
  purchasable: false,
  loading: false,
  error: false
};
//not using purchasable yet tho
const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3
};
const checkPurchaseable = ingredients => {
  const sum = Object.keys(ingredients)
    .map(igKey => {
      return ingredients[igKey];
    })
    .reduce((sum, el) => {
      return sum + el;
    }, 0);

  return sum > 0;
};

//
export const burgerBuilderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
      };
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
      };
    case actionTypes.SET_INGREDIENTS:
      // ingredients: action.ingredients
      // for positioning
      return {
        ...state,
        ingredients: {
          salad: action.ingredients.salad,
          bacon: action.ingredients.bacon,
          cheese: action.ingredients.cheese,
          meat: action.ingredients.meat
        },
        totalPrice: 4,
        error: false,
        purchasable: false
      };
    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return {
        ...state,
        error: true
      };
    case actionTypes.PURCHASABLE:
      return {
        ...state,
        purchasable: checkPurchaseable(state.ingredients)
      };
    default:
      return state;
  }
};

// {
//     ingredients: null,
//     totalPrice: 4,
//     purchaseable: false,
//     purchasing: false,
//     loading: false,
//     error: false
//   }
// const sum = Object.keys(ingredients)
//   .map(igKey => {
//     return ingredients[igKey];
//   })
//   .reduce((sum, el) => {
//     return sum + el;
//   }, 0);
// // console.log(Object.keys(ingredients).map(igKey => ingredients[igKey]));
// // this.setState({ purchaseable: sum > 0 });
//
// //REDUX
// return sum > 0;
