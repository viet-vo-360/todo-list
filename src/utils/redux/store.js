import { applyMiddleware, compose, createStore } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import rootReducer from "./reducers";

export const history = createBrowserHistory();

// export default createStore(rootReducer, FORM_INITIAL_STATE);
export default function configureStore(preloadedState) {
  const store = createStore(
    rootReducer(history),
    preloadedState,
    compose(applyMiddleware(routerMiddleware(history)))
  );

  return store;
}
