import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import App from "./app/app";
import configureStore from "./utils/redux/store";
import { FORM_INITIAL_STATE } from "./app/constants/INITIAL_STATE";

var mock = [
  {
    key: "00f39f80-628b-4679-b443-ce75afe81bac",
    title: "Mock 1",
    date: "15/04/2020",
    category: "Work",
    completed: "false",
    isImportant: true,
    isChecked: false,
    dataIndex: 0,
  },
  {
    key: "00s39w88-789s-9534-c796-ce75afef1erw",
    title: "Mock 2",
    date: "15/04/2020",
    completed: "false",
    category: "Shopping",
    isImportant: false,
    isChecked: false,
    dataIndex: 0,
  },
  {
    key: "00s39w88-789s-9534-c796-ce75afef1erw",
    title: "Mock 2",
    date: "15/04/2020",
    completed: "false",
    category: "Shopping",
    isImportant: false,
    isChecked: false,
    dataIndex: 0,
  },
  {
    key: "00s39w88-789s-9534-c796-ce75afef1erw",
    title: "Mock 2",
    date: "15/04/2020",
    completed: "false",
    category: "Shopping",
    isImportant: false,
    isChecked: false,
    dataIndex: 0,
  },
  {
    key: "00s39w88-789s-9534-c796-ce75afef1erw",
    title: "Mock 2",
    date: "15/04/2020",
    completed: "false",
    category: "Shopping",
    isImportant: false,
    isChecked: false,
    dataIndex: 0,
  },
]
const store = configureStore(mock);

const Application = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

const root = document.querySelector("#root");

render(<Application />, root);
