import ReactDOM from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./app";
import Header from "../src/pages/header/Header";
import "./index.scss";
import STORE from "./store";

ReactDOM.render(
  <Provider store={STORE}>
    <BrowserRouter>
      <div className="absolute app">
        <Header />
        <div className="app-body">
          <App />
        </div>
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector(".app")
);
