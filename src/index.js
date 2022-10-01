import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { reducers } from "./redux";
import thunk from "redux-thunk";
import "antd/dist/antd.css";

//creating university Store, applying MiddleWare...
const universityStore = createStore(reducers, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={universityStore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
