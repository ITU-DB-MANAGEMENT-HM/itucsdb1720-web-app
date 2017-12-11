import { call, put, takeEvery } from "redux-saga/effects";
import { axios } from "../../utils";

const supplant = function (str, o) {
  if (!o) return str;
  return str.replace(/{([^{}]*)}/g,
      function (a, b) {
          var r = o[b];
          return typeof r === 'string' || typeof r === 'number' ? r : a;
      }
  );
};

const requestFactory = (method, endpoint, trigger, success, fail) => {
  function* reqListener(action) {
    let data,
      params = null,
      cb = null,
      queryStr = "";

    if (action.payload) {
      const {query} = action.payload;
      if (query) {
        const queryKeys = Object.keys(query);
        queryStr = "?" + queryKeys.reduce((acc, label, key) => queryKeys.length - 1 === key ? `${label}=${query[label]}` : `${label}=${query[label]}&`, "");
      }
      params = action.payload.params;
      data = action.payload.data;
      cb = action.payload.callback;
    }

    try {
      const response = yield call(axios[method], supplant(endpoint, params) + queryStr, data);
      console.log(endpoint, response);
      yield put({ type: success, payload: { data: response.data } });

      if (cb) cb();
    } catch (e) {
      console.log(e);
      yield put({ type: fail, payload: { error: "error!" } });
    }
  }

  function* watcher() {
    yield takeEvery(trigger, reqListener);
  }

  return watcher();
};

export default requestFactory;
