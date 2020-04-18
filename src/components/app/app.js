import React from "react";
import { Route, Switch } from "react-router-dom";
import AppHeader from "../app-header";
import AppFooter from "../app-footer";
import { MainPage, UsersStatisticPage, ChartsPage } from "../pages";

import "./app.css";

const App = () => {
  return (
    <main role="main">
      <AppHeader />
      <Switch>
        {/* <Route path="/" component={MainPage} exact /> */}
        <Route path="/" component={UsersStatisticPage} />
        <Route path="/charts" component={ChartsPage} />
      </Switch>
      <AppFooter />
    </main>
  );
};

export default App;
