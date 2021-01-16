import * as actionTypes from "../index";
import axios from "axios";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};
//
export const authSuccess = (tokenId, userId, displayName, email) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    tokenId: tokenId,
    userId: userId,
    username: displayName,
    email: email
  };
};
// AuthData: authData
export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};
//logout
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate:");
  localStorage.removeItem("userId:");
  return {
    type: actionTypes.LOGOUT
  };
};

// ??ASYNC

export const auth = (email, password, isSignup) => {
  return dispatch => {
    // ...
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true
    };
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD4oYyBtzXpzWbr4kvS-wnwCbr_uS5Ubo4";
    if (!isSignup) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD4oYyBtzXpzWbr4kvS-wnwCbr_uS5Ubo4";
    }
    axios
      .post(url, authData)
      .then(res => {
        //expires in 5hrs
        const expirationDate = new Date(
          new Date().getTime() + res.data.expiresIn * 9000
        );

        localStorage.setItem("token:", res.data.idToken);
        localStorage.setItem("expirationDate:", expirationDate);
        localStorage.setItem("userId:", res.data.localId);
        console.log(localStorage.getItem("expirationDate:"));
        dispatch(
          authSuccess(
            res.data.idToken,
            res.data.localId,
            res.data.displayName,
            res.data.email
          )
        );
        dispatch(checkAuthTimeout(res.data.expiresIn));
      })
      .catch(error => {
        // console.log(error.response.data.error);
        dispatch(authFail(error.response.data.error));
      });
  };
};
//
export const checkAuthTimeout = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

//
export const checkAuthState = () => {
  return dispatch => {
    const token = localStorage.getItem("token:");
    if (!token) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate:"));
      if (expirationDate > new Date()) {
        const userId = localStorage.getItem("userId:");
        dispatch(authSuccess(token, userId));
        /*ERROR: newSec > expSec expirationDate.getSeconds() - new Date().getSeconds()*/
        dispatch(
          checkAuthTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          )
        );
      } else {
        dispatch(logout());
      }
    }
  };
};

// //GET USER DETAILS
// post(
//   "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=[API_KEY]",
//   idToken
// );
//REFRESH token: tho causes security vuln when user never logs out
// "https://securetoken.googleapis.com/v1/token?key=[API_KEY]", "grant_type=refresh_token&refresh_token='[data.REFRESH_TOKEN]'"
