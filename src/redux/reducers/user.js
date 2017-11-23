import { actions, tokenStorageLabel } from "../../constants";

const {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  FETCH_ADMIN_FAIL,
  FETCH_ADMIN_SUCCESS,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL
} = actions.user;

const initialState = {
  admin: {},
  isLoggedIn: false,
  error: "",
  isLoading: false
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      // set local storage token.
      localStorage.setItem(tokenStorageLabel, payload.token);
      return { ...state, isLoggedIn: true };
    case LOGIN_FAIL:
      return { ...state, isLoggedIn: false, error: payload.errorMessage };
    case LOGOUT_SUCCESS:
      // remove the token.
      localStorage.removeItem(tokenStorageLabel);
      return { ...state, isLoggedIn: false };
    case LOGOUT_FAIL:
      // remove the token.
      return { ...state, isLoggedIn: true, error: payload.errorMessage };
    case FETCH_ADMIN_SUCCESS:
      return { ...state, admin: payload, isLoggedIn: true };
    case FETCH_ADMIN_FAIL:
      localStorage.removeItem(tokenStorageLabel);
      return { ...state, admin: {}, isLoggedIn: false };
    default:
      return state;
  }
};
