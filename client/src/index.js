import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
//REDUX-STORE
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import allReducers from "./store/reducer";
//MIDDLEWARE
// // //custom
import logger from "./middlewares/logger";
// // //auto
import thunk from "redux-thunk";

//REDUX CHROME EXTECTION
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//STORE INITIALIzaTION
const store = createStore(
  allReducers,
  composeEnhancers(applyMiddleware(logger, thunk))
);
// const store = createStore(allReducers, /*__REACTDEVTOOL__*/);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
