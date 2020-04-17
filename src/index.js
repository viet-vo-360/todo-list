import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import App from './app/app';
import configureStore from "./utils/redux/store";
import { FORM_INITIAL_STATE } from "./app/constants/INITIAL_STATE";
import { LOCAL_STORAGE_STATE } from "./app/constants/LOCAL_STORAGE";

const localState = localStorage.getItem(LOCAL_STORAGE_STATE);
const initialTodos = localState != null ? { todos: JSON.parse(localState) } : FORM_INITIAL_STATE;

const store = configureStore(initialTodos);

const Application = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

const root = document.querySelector('#root');

render(<Application />, root);
