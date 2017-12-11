import _axios from "axios";
import { tokenStorageLabel, apiUrl } from "./constants";

export const axios = _axios.create({
  baseURL: apiUrl,
  timeout: 15000,
  responseType: "json"
});

axios.interceptors.request.use(
  config => {
    // TODO
    config.headers.token = "9A5D5BD56BA74DB484F86D07554C637FA4B803B3A196435B8AB5AF723F24DE50";
    return config;
  },
  error =>
    // Do something with request error
    Promise.reject(error)
);

export const reducerFactory = (initialState, reducerMethods, apis) => {
  const actionReducers = reducerMethods || {};
  apis &&
    apis.forEach(api => {
      actionReducers[api.success] = api.successMethod;
      actionReducers[api.fail] = api.failMethod;
    });
  return (state = initialState, action) => {
    const { type, payload } = action;

    const reducerMethod = actionReducers[type];
    // console.log("hello", reducerMethod && reducerMethod(state, payload, initialState));
    return reducerMethod && typeof reducerMethod === "function"
      ? reducerMethod(state, payload, initialState)
      : state;
  };
};

export const isEmpty = prop =>
  prop === null ||
  prop === undefined ||
  (prop.hasOwnProperty("length") && prop.length === 0) ||
  (prop.constructor === Object && Object.keys(prop).length === 0);

export const camelToSpaces = s =>
  s.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase());
