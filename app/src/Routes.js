import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Repositories from "./pages/Repositories";

export default () => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/Repositories" component={Repositories}>
        <Repositories />
      </Route>
    </Switch>
  );
};
