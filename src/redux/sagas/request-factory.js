import { call, put, takeEvery } from "redux-saga/effects";
import { axios } from "../../utils";

const requestFactory = (method, endpoint, trigger, success, fail) => {
  function* reqListener(action) {
    let data,
      param = "",
      cb = null;

    if (action.payload) {
      if (action.payload.param) {
        param = "/" + action.payload.param;
      }

      data = action.payload.data;

      cb = action.payload.callback;
    }

    try {
      const response = yield call(axios[method], endpoint + param, data);
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
