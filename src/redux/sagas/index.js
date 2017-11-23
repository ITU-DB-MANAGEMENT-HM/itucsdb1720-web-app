import { all } from "redux-saga/effects";

import apis from "../api";
import requestFactory from "./request-factory";
import loginFlow from "./login";

const apiSagas = Object.keys(apis).reduce((acc, k) => {
  return [
    ...apis[k].map(({ endpoint, method, trigger, success, fail }) =>
      requestFactory(method, endpoint, trigger, success, fail)
    ),
    ...acc
  ];
}, []);

// Register the sagas in here.
function* rootSaga() {
  yield all([...apiSagas, loginFlow()]);
}

export default rootSaga;
