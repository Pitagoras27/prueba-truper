import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../page/Home";
import Login from "./Login";

const About = () => <h1>About Us</h1>;

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
