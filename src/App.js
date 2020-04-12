import React, { useReducer, createContext, useState, useEffect } from "react";
import { Table, Row, Col } from "antd";

import "antd/dist/antd.css";
import "./App.css";

import { TodoForm } from "./components/Form/Form.component";
import { todoReducer } from "./utils/functions/formReducer";

import { FORM_INITIAL_STATE } from "./utils/constants/INITIAL_STATE";
import { FORM_COLUMNS } from "./utils/constants/FORM_COLUMNS";
import { SERVICE_URL } from "./utils/constants/SERVICE";

import { CompleteBySelected } from "./components/Complete/CompleteBySelected.component";
import { DeleteBySelected } from "./components/Delete/DeleteBySelected.component";

export const TodoContext = createContext();

const App = ({ useMockData }) => {
  const [todosData, setTodosData] = useState();
  const [todos, dispatchTodos] = useReducer(todoReducer, todosData);
  const pageSize = 5;
  const currentPage =  todos && todos.length > 0 ? Math.ceil(todos.length / pageSize) : 1;
  const tablePagination = {
    pageSizeOptions: ["5", "10", "15"],
    defaultPageSize: pageSize,
    current: currentPage,
    showSizeChanger: true,
    showQuickJumper: true,
  };
  console.log("todos", todos);
  useEffect(() => {
    // const controller = new AbortController();
    // const fetchData = () => {
    //   try {
    //     if (useMockData) {
    //       dispatchTodos({ type: "ADD_LIST_TODO", payload: FORM_INITIAL_STATE });
    //     } else {
    //       getJsonDataFromAPI(SERVICE_URL, dispatchTodos);
    //     }
    //   } catch (error) {
    //     console.error("Request was canceled via controller.abort");
    //     return;
    //   }
    // }

    // fetchData();
    // return () => {
    //   controller.abort();
    // }
    fetch(SERVICE_URL, {mode: 'no-cors'})
    .then((response) => response.json())
    .then((responseJson) => {
      console.log("responseJson", responseJson);
      dispatchTodos({ type: "ADD_LIST_TODO", payload: responseJson });
    })
    .catch((error) => {
      console.error(error);
    });
  }, []);
  return (
    <TodoContext.Provider value={[todos, dispatchTodos]}>
      {todos && todos.length > 0 && (
        <Row type="flex" justify="center">
          <Col xs={24} sm={24} md={24} lg={20} xl={20}>
            <Table
              rowClassName={(record) =>
                record.isImportant ? "important-task" : ""
              }
              dataSource={todos}
              columns={FORM_COLUMNS}
              pagination={tablePagination}
            />
          </Col>
        </Row>
      )}
      {todos && todos.length > 0 && todos.filter((item) => item.isChecked).length > 0 && (
        <Row type="flex" justify="right">
          <Col xs={24} sm={24} md={24} lg={20} xl={20}>
            <CompleteBySelected />
            <DeleteBySelected />
          </Col>
        </Row>
      )}
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <TodoForm todos={todos} />
        </Col>
      </Row>
    </TodoContext.Provider>
  );
};
export default App;

const getJsonDataFromAPI = (url, cb) => {
  fetch(url, {mode: 'no-cors'})
    .then((response) => response.json())
    .then((responseJson) => {
      cb({ type: "ADD_LIST_TODO", payload: responseJson });
    })
    .catch((error) => {
      console.error(error);
    });
};
