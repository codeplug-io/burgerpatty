import React, { Component } from "react";
import Input from "../../components/UI/Input/Input";
import classes from "./auth-classes.css";
import * as actionCreator from "../../store/actions/index";
import { connect } from "react-redux";
import Spinner from "../../components/UI/Spinner/Spinner";
import Aux from "../../hoc/auxi";
import { Redirect } from "react-router-dom";

class Auth extends Component {
  //
  state = {
    controls: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "YourEmailAdderess@example.com"
        },
        value: "",
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        touched: false
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "Password",
          placeholder: "Password"
        },
        value: "",
        validation: {
          required: true,
          minLength: 6
        },
        valid: false,
        touched: false
      }
    },
    isSignup: true,
    formIsValid: false
  };
  //
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
  loginHandler = event => {
    event.preventDefault();
    this.props.onAuth(
      this.state.controls.email.value,
      this.state.controls.password.value,
      this.state.isSignup
    );
  };
  //
  inputChangedHandler = (event, controlName) => {
    // console.log(event.target.value);
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
        valid: this.checkValidity(
          event.target.value,
          this.state.controls[controlName].validation
        ),
        touched: true
      }
    };
    //
    this.setState({ controls: updatedControls });
  };
  //
  switchAuthModeHandler = event => {
    event.preventDefault();
    this.setState(prevState => {
      return { isSignup: !prevState.isSignup };
    });
  };
  render() {
    const formElementsArray = [];

    for (let key in this.state.controls) {
      //
      formElementsArray.push({
        id: key,
        config: this.state.controls[key]
      });
    }
    const input = formElementsArray.map(formElement => {
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
    });

    //ERROR MASSAGE
    let readableErrMsg;
    if (this.props.error) {
      switch (this.props.error.message) {
        case "EMAIL_EXISTS":
          readableErrMsg =
            "Email address is already in use, use a different one instead.";
          break;
        case "EMAIL_NOT_FOUND":
          readableErrMsg = "Email address is incorrect.";
          break;
        case "INVALID_PASSWORD":
          readableErrMsg =
            "Incorrect password, try phishing or using dictionary attacks";
          break;
        case "USER_DISABLED":
          readableErrMsg =
            "This account has been disabled by the administrator.";
          break;
        case "TOO_MANY_ATTEMPTS_TRY_LATER":
          readableErrMsg =
            "Too many attemps: ip blocked due to unusual activities, try agian later";
          break;
        default:
          readableErrMsg = null;
      }
    }

    let errorMessage = this.props.error ? (
      <p style={{ color: "red" }}>
        {readableErrMsg || this.props.error.message}
      </p>
    ) : null;

    //SPINNER OR FORM
    let form = this.props.loading ? (
      <Spinner />
    ) : (
      <Aux>
        <form>{input}</form>
        <button
          className={classes.OrderButton}
          disabled={this.state.formIsValid}
          onClick={this.loginHandler}
        >
          {this.state.isSignup ? "SIGNUP" : "LOGIN"}
        </button>
        <button
          className={classes.OrderButtonRed}
          onClick={this.switchAuthModeHandler}
          disabled={this.state.formIsValid}
        >
          Or {this.state.isSignup ? "Login" : "SignUp"}
        </button>
      </Aux>
    );

    let redirect;
    if (this.props.purchasable) {
      redirect = this.props.isAuth ? <Redirect to="/checkout" /> : null;
    } else {
      redirect = this.props.isAuth ? <Redirect to="/" /> : null;
    }

    return (
      <div className={classes.AuthData}>
        {errorMessage}
        {form}
        {redirect}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuth: state.auth.token !== null,
    purchasable: state.bugBuild.purchasable
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, isSignup) =>
      dispatch(actionCreator.auth(email, password, isSignup))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
