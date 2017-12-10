import apis from "../api";
import { reducerFactory } from "../../utils";

import { actions, tokenStorageLabel } from "../../constants";

const {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  FETCH_USER_FAIL,
  FETCH_USER_SUCCESS,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL
} = actions.user;

const initialState = {
  // this is the shape of the data.
  user: {},
  isLoggedIn: false,
  error: "",
  isLoading: false,
  courses: [],
  studygroups: {}
};

const actionReducers = {
  [LOGIN_SUCCESS]: (state, payload) => {
    localStorage.setItem(tokenStorageLabel, payload.token);
    return { ...state, isLoggedIn: true };
  },
  [LOGIN_FAIL]: (state, payload) => {
    return { ...state, isLoggedIn: false, error: payload.errorMessage };
  },
  [LOGOUT_SUCCESS]: (state, payload) => {
    localStorage.removeItem(tokenStorageLabel);
    return { ...state, isLoggedIn: false };
  },
  [LOGOUT_FAIL]: (state, payload) => {
    return { ...state, isLoggedIn: true, error: payload.errorMessage };
  },
  [FETCH_USER_SUCCESS]: (state, payload) => {
    return { ...state, user: payload, isLoggedIn: true };
  },
  [FETCH_USER_FAIL]: (state, payload) => {
    localStorage.removeItem(tokenStorageLabel);
    return { ...state, user: {}, isLoggedIn: false };
  }
};

export default reducerFactory(initialState, actionReducers, apis.students);
