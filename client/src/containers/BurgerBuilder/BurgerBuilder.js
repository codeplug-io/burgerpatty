import React, { Component } from "react";
//REDUX
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/index";

import Aux from "../../hoc/auxi";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Order/OrderSummary/OrderSummary";
import Title from "../../components/UI/Title/Title";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import axios from "../../axios-orders";

//

export class BurgerBuilder extends Component {
  state = {
    purchasing: false
  };

  //
  componentDidMount() {
    // console.log(this.props);
    // this.props.onInitializeIngredients();
  }

  //
  UNSAFE_componentWillMount() {
    this.props.onInitializeIngredients();
    //componentDidMount
    // console.log(this.props);
    // axios
    //   .get("/ingredients.json")
    //   .then(res => {
    //     // res.data
    //     this.setState({ ingredients: res.data });
    //     // { salad: 0, bacon: 0, cheese: 0, meat: 0 }
    //     this.setState({ loading: false });
    //   })
    //   .catch(error => {
    //     // this.setState({ error: true });
    //     // console.log(error);
    //     this.setState({ loading: false });
    //   });
    // this.setState({ loading: false });
  }
  //

  addIngredientHandler = type => {
    //   //ingredients
    //   const oldCount = this.state.ingredients[type];
    //   const updatedCount = oldCount + 1;
    //   const updatedIngredient = {
    //     ...this.state.ingredients
    //   };
    //   updatedIngredient[type] = updatedCount;
    //   //totalPrice
    //   const priceAdded = INGREDIENT_PRICES[type];
    //   const oldPrice = this.state.totalPrice;
    //   const newPrice = oldPrice + priceAdded;
    //
    //   this.setState({ ingredients: updatedIngredient, totalPrice: newPrice });
    //   //
    //   this.updatedPurchaseHandler(updatedIngredient);
  };
  //
  removeIngredientHandler = type => {
    //   //ingredients
    //   const oldCount = this.state.ingredients[type];
    //
    //   if (oldCount <= 0) {
    //     return;
    //   }
    //
    //   const deductCount = oldCount - 1;
    //   const deductedIngredient = {
    //     ...this.state.ingredients
    //   };
    //   deductedIngredient[type] = deductCount;
    //   //totalPrice
    //   const priceDeducted = INGREDIENT_PRICES[type];
    //   const oldPrice = this.state.totalPrice;
    //   const newPrice = oldPrice - priceDeducted;
    //
    //   this.setState({ ingredients: deductedIngredient, totalPrice: newPrice });
    //   //
    //   this.updatedPurchaseHandler(deductedIngredient);
  };
  //
  updatedPurchaseHandler = ingredients => {
    //
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    // console.log(Object.keys(ingredients).map(igKey => ingredients[igKey]));
    // this.setState({ purchaseable: sum > 0 });

    //REDUX
    return sum > 0;
    //use as
    // this.updatedPurchaseHandler(this.props.ingr) returns boolean of true or false
    //or manage in redux
  };
  //
  submitOrderHandler = () => {
    this.setState(prevState => {
      return { purchasing: !prevState.purchasing };
    });
  };
  //
  continueHandler = () => {
    // alert("you can continue");
    // this.setState({ loading: true });
    // const order = this.state.ingredients;
    // const order = {
    //   ingredients: this.state.ingredients,
    //   price: this.state.totalPrice.toFixed(2)
    // customer: {
    //   name: "Godwin Micheals",
    //   address: {
    //     street: "Teststreet 1",
    //     zipCode: "41351",
    //     country: "germany"
    //   },
    //   email: "godwinmicheals81@gmail.com"
    // },
    // deliveryMethod: "fastest"
    // };

    // axios
    //   .post("/orders.json", order)
    //   .then(res => {
    //     // console.log(res);
    //     this.setState({ loading: false, purchasing: false });
    //   })
    //   .catch(error => {
    //     this.setState({ loading: false, purchasing: false });
    //     // console.log(error + ":)");
    //   });
    //
    // const queryParams = [];
    // for (let i in this.state.ingredients) {
    //   queryParams.push(
    //     encodeURIComponent(i) +
    //       "=" +
    //       encodeURIComponent(this.state.ingredients[i])
    //   );
    // }
    // queryParams.push("price=" + this.state.totalPrice.toFixed(2));
    // const queryString = queryParams.join("&");
    // this.props.history.push("/checkout", this.state.ingredients)
    // this.props.history.push({
    //   pathname: "/checkout",
    //   search: "?" + queryString
    // });
    //REDUX
    this.props.onInitPurchase();
    this.props.history.push("/checkout");
    //
  };
  //
  loginHandler = () => {
    this.props.history.push("/auth");
  };

  render() {
    //
    const disabledInfo = {
      ...this.props.ingr
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    //
    //set title name here
    let title;
    let pageTitle = "Burger";
    if (pageTitle) {
      title = pageTitle;
    } else {
      title = this.props.title;
    }
    //
    //when ingredient is null
    let orderSummary;
    // let burger = this.state.error ? (
    //   <p>Oops! can't fetch the ingredients.. try again later</p>
    // ) : (
    //   <Spinner />
    // );
    let burger = this.props.error ? (
      <p>Oops! can't fetch the ingredients.. try again later</p>
    ) : (
      <Spinner />
    );
    if (this.props.ingr) {
      burger = (
        <Aux>
          <Burger ingredients={this.props.ingr} />
          <BuildControls
            addIngredient={this.props.onIngredientsAdded}
            removeIngredient={this.props.onIngredientsRemoved}
            disabled={disabledInfo}
            price={this.props.price}
            purchase={this.props.onPurchasable}
            purchasable={this.props.purchasable}
            submitOrder={this.submitOrderHandler}
            isAuth={this.props.isAuth}
            login={this.loginHandler}
          />
        </Aux>
      );
      // purchase={this.updatedPurchaseHandler(this.props.ingr)}
      orderSummary = (
        <OrderSummary
          ingredients={this.props.ingr}
          cancelSubmit={this.submitOrderHandler}
          continue={this.continueHandler}
          price={this.props.price}
        />
      );
    }
    // if (this.state.loading) {
    //   orderSummary = <Spinner />;
    // }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          cancelSubmit={this.submitOrderHandler}
        >
          {orderSummary}
        </Modal>
        <Title title={title}>patty</Title>
        {burger}
      </Aux>
    );
  }
}
const mapStateToProps = state => {
  return {
    ingr: state.bugBuild.ingredients,
    price: state.bugBuild.totalPrice,
    purchasable: state.bugBuild.purchasable,
    error: state.bugBuild.error,
    isAuth: state.auth.token !== null
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onIngredientsAdded: ingName =>
      dispatch(actionCreators.addIngredient(ingName)),
    onIngredientsRemoved: ingName =>
      dispatch(actionCreators.removeIngredient(ingName)),
    onInitializeIngredients: () =>
      dispatch(actionCreators.initializeIngredients()),
    onInitPurchase: () => dispatch(actionCreators.purchaseInit()),
    onPurchasable: () => dispatch(actionCreators.purchasable())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));
