import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import store from "./redux/store";
// import registerServiceWorker from "./registerServiceWorker";
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <LocaleProvider locale={enUS}>
        <App />
      </LocaleProvider>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// registerServiceWorker();
