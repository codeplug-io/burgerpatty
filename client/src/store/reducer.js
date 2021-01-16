import { combineReducers } from "redux";

import * as reducer from "./reducers/index";
// import Reducer from './reducer/';
// import Reducer from './reducer/';

const allReducers = combineReducers({
  bugBuild: reducer.burgerBuilderReducer,
  order: reducer.orderReducer,
  auth: reducer.authReducer
});

export default allReducers;
