import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/app";
import ErrorBoundry from "./components/error-boundry";
import UserstoreService from "./services/userstore-service";
import { UserstoreServiceProvider } from "./components/userstore-service-context";

import store from "./store";

const userstoreService = new UserstoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <UserstoreServiceProvider value={userstoreService}>
        <Router>
          <App />
        </Router>
      </UserstoreServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById("root")
);
