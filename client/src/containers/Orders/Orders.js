import React, { Component } from "react";
import Order from "../../components/Order/Order";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Spinner from "../../components/UI/Spinner/Spinner";
// REDUX
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/index";

class Orders extends Component {
  // state = {
  //   orders: [],
  //   loading: true
  // };
  // UNSAFE_componentWillMount() {
  componentDidMount() {
    this.props.onFetchOrder(this.props.token, this.props.userId);
    // axios
    //   .get("/orders.json")
    //   .then(res => {
    //     const fetchedOrders = [];
    //     for (let key in res.data) {
    //       fetchedOrders.push({ ...res.data[key], id: key });
    //     }
    //     this.setState({ loading: false, orders: fetchedOrders });
    //   })
    //   .catch(error => {
    //     this.setState({ loading: false });
    //   });
  }

  render() {
    let orders = <Spinner />;
    // console.log(this.props.order);
    // console.log();
    if (this.props.error) {
      orders = <p>Can't fetch orders. try again </p>;
    } else {
      if (this.props.orders.length > 0) {
        orders = this.props.orders.map(order => {
          return (
            <Order
              key={order.id}
              ingredients={order.ingredients}
              price={order.price}
            />
          );
        });
      } else {
        orders = (
          <p>
            Oops! Orders are empty for now, make some orders and come back
            later.{" "}
          </p>
        );
      }
    }

    // if (!this.props.loading) {
    //   orders = this.props.orders.map(order => {
    //     return (
    //       <Order
    //         key={order.id}
    //         ingredients={order.ingredients}
    //         price={order.price}
    //       />
    //     );
    //   });
    // }
    return <div>{orders}</div>;
  }
}
const mapStateToProps = state => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
    error: state.order.error,
    token: state.auth.token,
    userId: state.auth.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchOrder: (token, userId) =>
      dispatch(actionCreators.fetchOrder(token, userId))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Orders, axios));
