import React from "react";
import Loadable from 'react-loadable';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const Home = Loadable({
  loader: () => import('./Home'),
  loading: () => null,
  modules: ['Home']
});

export const Detail = Loadable({
  loader: () => import('./Detail'),
  loading: () => null,
  modules: ['Detail']
});

export default ({props}) => {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"} render={({ match, history }) => <Home history={history} routeName="home" match={match} {...props} />} />
        <Route exact path={"/detail/:id"} render={({ match, history }) => <Detail history={history} routeName="detail" match={match} {...props} />} />
      </Switch>
    </Router>
  );
};
