import React, { Component } from "react";
import classes from "./contactData-classes.css";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";
// REDUX
import { connect } from "react-redux";
import withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler";
import * as actionCreators from "../../../store/actions/creators/order";

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "YourName@example.com"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Street Name"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      postalCode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Zip Code"
        },
        value: "",
        validation: {
          required: true,
          minLength: 5,
          maxLenght: 5
        },
        valid: false,
        touched: false
      },
      lga: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "LGA"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "cheapest", displayValue: "Cheapest" }
          ]
        },
        value: "fastest",
        valid: true,
        validation: {}
      }
    },
    formIsValid: false
  };
  // loading: false,
  checkValidity(value, rules) {
    let isValid = true;
    if (rules.required) {
      // value.trim() to remove white spaces/ isValid
      isValid = value.trim() !== "" && isValid;
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    return isValid;
  }
  //
  orderHandler = event => {
    event.preventDefault();
    // alert("you can continue");
    // this.setState({ loading: true });
    // const order = this.state.ingredients;
    const formData = {};
    for (let formElementIdentifier in this.state.orderForm) {
      // console.log(formElementIdentifier);
      formData[formElementIdentifier] = this.state.orderForm[
        formElementIdentifier
      ].value;
    }
    //
    const order = {
      ingredients: this.props.ingr,
      price: this.props.price.toFixed(2),
      orderData: formData,
      userId: this.props.userId,
      token: this.props.token
    };
    this.props.onOrderBurgerStart(order, this.props.token);
    // axios
    //   .post("/orders.json", order)
    //   .then(res => {
    //     // console.log(res);
    //     this.setState({ loading: false });
    //     this.props.history.push("/");
    //   })
    //   .catch(error => {
    //     this.setState({ loading: false });
    //     console.log(error + ":)");
    //   });
  };
  //
  inputChangedHandler = (event, inputIdentifier) => {
    // console.log(event.target.value);
    const updatedOrderForm = { ...this.state.orderForm };
    const updatedFormElement = { ...updatedOrderForm[inputIdentifier] };
    //
    updatedFormElement.value = event.target.value;
    //
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );

    //
    updatedFormElement.touched = true;
    //
    let formIsValid = true;
    for (let inputIdentifier in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
    }

    updatedOrderForm[inputIdentifier] = updatedFormElement;
    this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid });
  };

  render() {
    // console.log(this.props.token);
    //
    const fromElementsArray = [];

    for (let key in this.state.orderForm) {
      //
      // console.log(this.state.orderForm[key].elementConfig);
      fromElementsArray.push({
        id: key,
        config: this.state.orderForm[key]
      });
    }
    // console.log(fromElementsArray[0].config.value);
    //
    let formContact;
    formContact = (
      <form onSubmit={this.orderHandler}>
        {fromElementsArray.map(formElement => {
          // console.log(formElement);
          return (
            <Input
              key={formElement.id}
              touched={formElement.config.touched}
              shouldValidate={formElement.config.validation}
              invalid={!formElement.config.valid}
              elementType={formElement.config.elementType}
              elementConfig={formElement.config.elementConfig}
              value={formElement.config.value}
              changed={event => this.inputChangedHandler(event, formElement.id)}
            />
          );
        })}

        <button
          className={classes.OrderButton}
          disabled={!this.state.formIsValid}
        >
          ORDER
        </button>
      </form>
    );
    // if (this.state.loading) {
    //   formContact = <Spinner />;
    // }
    if (this.props.loading) {
      formContact = <Spinner />;
    }

    return (
      <div className={classes.ContactData}>
        <h4>Contact information</h4>
        {formContact}
        <h4>Billing information</h4>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ingr: state.bugBuild.ingredients,
    price: state.bugBuild.totalPrice,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onOrderBurgerStart: (orderData, token) =>
      dispatch(actionCreators.purchaseBurger(orderData, token))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(ContactData, axios));
// <Button btnType="Success" >
//   ORDER
// </Button>
//<Input type="text" name="name" placeholder="delivery method" />
//the default behavior of a button inside a form when cliked is to reload the page
// onClick argument to fix this we use event.prevent.default()
