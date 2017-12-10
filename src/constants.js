export const errors = {};

export const DATE_FORMAT = "MMM Do YY";

export const actions = {
  user: {
    LOGIN: "USER_LOGIN",
    LOGIN_SUCCESS: "LOGIN_SUCCESS",
    LOGIN_FAIL: "LOGIN_FAIL",

    LOGOUT: "USER_LOGOUT",
    LOGOUT_SUCCESS: "USER_LOGOUT_SUCCESS",
    LOGOUT_FAIL: "USER_LOGOUT_FAIL",

    FETCH_USER: "FETCH_USER",
    FETCH_USER_SUCCESS: "FETCH_USER_SUCCESS",
    FETCH_USER_FAIL: "FETCH_USER_FAIL"
  },
  students: {
    FETCH: "FETCH_STUDENTS",
    FETCH_FAIL: "FETCH_FAIL_STUDENTS",
    FETCH_SUCCESS: "FETCH_SUCCESS_STUDENTS"
  },
  lecturers:{
    FETCH: "FETCH_LECTURERS",
    FETCH_FAIL: "FETCH_FAIL_LECTURERS",
    FETCH_SUCCESS: "FETCH_SUCCESS_LECTURERS"
  }
};

export const tokenStorageLabel = "itunder-token";
export const apiUrl = "https://itucsdb1720.herokuapp.com";
