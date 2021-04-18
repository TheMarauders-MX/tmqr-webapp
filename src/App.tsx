import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import HomeScreen from "./screens/Home/HomeScreen";
import { createBrowserHistory } from "history";
import "./theme/styles.scss";
import RegisterScreen from "@screens/Home/RegisterScreen";

function App() {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <RegisterScreen />
        </Route>
        <Route exact path="/home">
          <HomeScreen />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
