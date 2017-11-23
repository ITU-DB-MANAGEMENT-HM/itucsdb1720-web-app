import { call, put, take } from "redux-saga/effects";

import { actions, tokenStorageLabel } from "../../constants";
import { axios } from "../../utils";

const {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAIL,
  LOGIN,
  LOGIN_FAIL,
  LOGOUT,
  LOGIN_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS
} = actions.user;

export default function* loginFlow() {
  let isLoginFired = false;
  while (true) {
    console.log("listening login and logout actions...");

    if (localStorage.getItem(tokenStorageLabel) && !isLoginFired) {
      yield take(FETCH_USER);

      try {
        const res = yield call(axios.get, "admins/me");
        yield put({
          type: FETCH_USER_SUCCESS,
          payload: res.data
        });
      } catch (e) {
        yield put({
          type: FETCH_USER_FAIL,
          payload: { errorMessage: "" }
        });
        continue;
      }
    } else if (!isLoginFired) {
      const action = yield take(LOGIN);
      console.log("login action fired...");
      try {
        const res = yield call(axios.post, "admins/login", {
          username: action.username,
          password: action.password
        });

        yield put({
          type: LOGIN_SUCCESS,
          payload: { token: res.data.id }
        });

        const resAdmin = yield call(axios.get, "admins/me");

        isLoginFired = true;

        yield put({
          type: FETCH_USER_SUCCESS,
          payload: resAdmin.data
        });

        console.log("logged in successfully...");
      } catch (e) {
        const errorMessage = e.response
          ? e.response.data.error.message
          : "check internet connection!.";
        yield put({
          type: LOGIN_FAIL,
          payload: { errorMessage }
        });
        console.log("login failed...", "error: ", e);
        continue;
      }
    }

    yield take(LOGOUT);

    console.log("logout action fired...");
    try {
      yield call(axios.post, "admins/logout");

      isLoginFired = false;

      yield put({ type: LOGOUT_SUCCESS });
      console.log("logged out successfully...");
    } catch (e) {
      const errorMessage = e.response
        ? e.response.data.error.message
        : "check internet connection!.";
      yield put({
        type: LOGOUT_FAIL,
        payload: { errorMessage }
      });
      console.log("logout failed...", "error: ", e.message);
    }
  }
}
