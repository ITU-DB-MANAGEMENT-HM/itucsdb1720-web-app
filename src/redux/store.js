import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import reducers from "./reducers";
import rootSaga from "./sagas";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default (() => {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = applyMiddleware(sagaMiddleware);

  const store = createStore(reducers, composeEnhancers(middlewares));

  sagaMiddleware.run(rootSaga);

  return store;
})();
