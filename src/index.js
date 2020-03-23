import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import axios from "axios";
import "semantic-ui-css/semantic.min.css";

axios.defaults.baseURL = "https://newsroom-team-1.herokuapp.com/api";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
