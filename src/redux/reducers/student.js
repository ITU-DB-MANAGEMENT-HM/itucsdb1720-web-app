import apis from "../api";
import { reducerFactory } from "../../utils";

import { actions, tokenStorageLabel } from "../../constants";

const {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  FETCH_USER,
  FETCH_USER_FAIL,
  FETCH_USER_SUCCESS,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT,
  LOGIN
} = actions.user;

const initialState = {
  // User
  user: {},
  isLoggedIn: false,
  loginIsLoading: false,
  fetchUserIsLoading: false,
  // Courses
  courses: [],
  searchCourses: [],
  // Studygroup
  studygroups: {},
};

const actionReducers = {
  [LOGIN]: (state, payload) => {
    return { ...state, loginIsLoading: true };
  },
  [LOGIN_SUCCESS]: (state, payload) => {
    localStorage.setItem(tokenStorageLabel, payload.token);
    return { ...state, isLoggedIn: true, loginIsLoading: false };
  },
  [LOGIN_FAIL]: (state, payload) => {
    return { ...state, isLoggedIn: false, error: payload.errorMessage, loginIsLoading: false };
  },
  [LOGOUT]: (state, payload) => {
    return { ...state, loginIsLoading: true };
  },
  [LOGOUT_SUCCESS]: (state, payload) => {
    localStorage.removeItem(tokenStorageLabel);
    return { ...state, isLoggedIn: false, loginIsLoading: false };
  },
  [LOGOUT_FAIL]: (state, payload) => {
    return { ...state, isLoggedIn: true, error: payload.errorMessage, loginIsLoading: false };
  },
  [FETCH_USER]: (state, payload) => {
    return { ...state, fetchUserIsLoading: true };
  },
  [FETCH_USER_SUCCESS]: (state, payload) => {
    return { ...state, user: payload, isLoggedIn: true, fetchUserIsLoading: false };
  },
  [FETCH_USER_FAIL]: (state, payload) => {
    localStorage.removeItem(tokenStorageLabel);
    return { ...state, user: {}, isLoggedIn: false, fetchUserIsLoading: false };
  }
};

export default reducerFactory(initialState, actionReducers, apis.students);
