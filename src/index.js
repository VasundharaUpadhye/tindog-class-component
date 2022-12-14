import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { AppRoutes } from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Provider store={store}>
    <AppRoutes>
      <App />
    </AppRoutes>
  </Provider>,
  document.getElementById("root")
);
