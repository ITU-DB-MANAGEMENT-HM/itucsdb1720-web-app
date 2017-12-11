import _axios from "axios";
import { tokenStorageLabel, apiUrl } from "./constants";

export const axios = _axios.create({
  baseURL: apiUrl,
  timeout: 10000,
  responseType: "json"
});

axios.interceptors.request.use(
  config => {
    // Do something before request is sent
    config.headers.token = localStorage.getItem(tokenStorageLabel);
    return config;
  },
  error =>
    // Do something with request error
    Promise.reject(error)
);

const endOfApi = (method, name) => (state, payload) => method({...state, apiIsLoading: {...state.apiIsLoading, [name]: false}}, payload);

export const reducerFactory = (initialState, reducerMethods, apis) => {
  initialState = {...initialState, apiErrors: {}, apiIsLoading: {}}
  const actionReducers = reducerMethods || {};
  apis &&
    apis.forEach(api => { 
      initialState.apiIsLoading[api.name] = false;
      initialState.apiErrors[api.name] = "";
      actionReducers[api.trigger] = (state, payload) => {
        return {...state, apiIsLoading: {...state.apiIsLoading, [api.name]: true}}
      };
      
      actionReducers[api.success] = endOfApi(api.successMethod, api.name);
      actionReducers[api.fail] = endOfApi(api.failMethod, api.name);
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
