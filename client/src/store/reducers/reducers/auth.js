import * as actionTypes from "../../actions/index";
import { updateObject } from "../../utility";

const initialState = {
  tokenId: null,
  userId: null,
  username: null,
  email: null,
  error: null,
  loading: false
};

const authStart = (state, action) => {
  return updateObject(state, { error: null, loading: true });
};
//
const authSuccess = (state, action) => {
  return updateObject(state, {
    tokenId: action.tokenId,
    userId: action.userId,
    username: action.username,
    email: action.email,
    error: null,
    loading: false
  });
};
//
const authFail = (state, action) => {
  return updateObject(state, { error: action.error, loading: false });
};
//LOGOUT
const logout = (state, action) => {
  return updateObject(state, { tokenId: null, userId: null });
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    //
    case actionTypes.AUTH_START:
      return authStart(state, action);
    //
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    //
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    //
    case actionTypes.LOGOUT:
      return logout(state, action);
    default:
      return state;
  }
};

export default authReducer;
