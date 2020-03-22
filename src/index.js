import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import axios from "axios";
import configureStore from "./state/store/configureStore";
import "semantic-ui-css/semantic.min.css";

axios.defaults.baseURL = "https://newsroom-team-1.herokuapp.com/api";
const store = configureStore();
window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
