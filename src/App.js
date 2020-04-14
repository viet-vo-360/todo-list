import React, { useReducer, createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

export const TodoContext = createContext();

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/detail/{id}">
          <Detail />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
