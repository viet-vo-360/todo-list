import React, { useReducer, createContext, useState } from "react";
import { Table, Row, Col } from "antd";

import "antd/dist/antd.css";
import "./App.css";

import { TodoForm } from "./components/Form/Form.component";
import { todoReducer } from "./utils/functions/formReducer";

import { FORM_INITIAL_STATE } from "./utils/constants/INITIAL_STATE";
import { FORM_COLUMNS } from "./utils/constants/FORM_COLUMNS";

import { CompleteBySelected } from "./components/Complete/CompleteBySelected.component";
import { DeleteBySelected } from "./components/Delete/DeleteBySelected.component";

export const TodoContext = createContext();

const App = () => {
  const [todos, dispatchTodos] = useReducer(todoReducer, FORM_INITIAL_STATE);
  const pageSize = 5;
  const currentPage = Math.ceil(todos.length / pageSize);
  const tablePagination = {
    pageSizeOptions: ["5", "10", "15"],
    defaultPageSize: pageSize,
    current: currentPage,
    showSizeChanger: true,
    showQuickJumper: true,
  };
  console.log("todos", todos);
  return (
    <TodoContext.Provider value={[todos, dispatchTodos]}>
      {todos.length > 0 && (
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
      {todos.length > 0 && todos.filter((item) => item.isChecked).length > 0 && (
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
