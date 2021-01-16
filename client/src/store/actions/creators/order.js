import * as actionTypes from "../index";
import axios from "../../../axios-orders";

//SYNC
export const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData
  };
};

export const purchaseBurgerFailed = error => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAILED,
    error: error
  };
};

export const purchaseBurgerStart = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_START
  };
};

//when you load the cheackout page
export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT
  };
};
///////////////////ORDERS PAGE SYNC///////////////////////
export const fetchOrderSuccess = orders => {
  return {
    type: actionTypes.FETCH_ORDER_SUCCESS,
    orders: orders
  };
};
export const fetchOrderFailed = error => {
  return {
    type: actionTypes.FETCH_ORDER_FAILED,
    error: error
  };
};
export const fetchOrderStart = () => {
  return {
    type: actionTypes.FETCH_ORDER_START
  };
};

//ASYNC
export const purchaseBurger = (orderData, token) => {
  return dispatch => {
    dispatch(purchaseBurgerStart());

    axios
      .post("/orders.json?auth=" + token, orderData)
      .then(res => {
        dispatch(purchaseBurgerSuccess(res.data.name, orderData));
        // res.data.body || orderData
        // this.setState({ loading: false });
        // this.props.history.push("/");
      })
      .catch(error => {
        dispatch(purchaseBurgerFailed(error));
        // this.setState({ loading: false });
      });
  };
};

///////////////ORDERS PAGE ASYNC////
export const fetchOrder = (token, userId) => {
  return dispatch => {
    dispatch(fetchOrderStart());
    const queryParams =
      "?auth=" + token + '&orderBy="userId"&equalTo="' + userId + '"';
    axios
      .get("/orders.json" + queryParams)
      .then(res => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({ ...res.data[key], id: key });
        }
        dispatch(fetchOrderSuccess(fetchedOrders));
        // this.setState({ loading: false, orders: fetchedOrders });
      })
      .catch(error => {
        dispatch(fetchOrderFailed(error));
        // console.log(error);
        // this.setState({ loading: false });
      });
  };
};

// can pass this as an input from the contactData container
// this.props.history.push("/");
