import React from "react";
import Loadable from "react-loadable";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../../utils/redux/store";

export const Home = Loadable({
  loader: () => import("./Home"),
  loading: () => null,
  modules: ["Home"],
});

export const Detail = Loadable({
  loader: () => import("./Detail"),
  loading: () => null,
  modules: ["Detail"],
});

export default () => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route
          exact
          path={"/"}
          render={({ match, history }) => (
            <Home history={history} routeName="home" match={match} />
          )}
        />
        <Route
          exact
          path={"/detail/:id"}
          render={({ match, history }) => (
            <Detail history={history} routeName="detail" match={match} />
          )}
        />
      </Switch>
    </ConnectedRouter>
  );
};
