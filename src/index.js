import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import store from "./redux/store";
import App from "./components/App";

render(
  <div>
    <Provider store={store}>
      <App />
    </Provider>
  </div>,
  document.getElementById("app")
);
