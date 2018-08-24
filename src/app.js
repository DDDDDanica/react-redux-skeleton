import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { ROUTES } from "constant";
import { default as User } from "./pages/user/User";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path={`${ROUTES.USER}`} component={User} />
      </Switch>
    );
  }
}

export default App;
