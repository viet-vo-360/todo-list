import React, { useReducer, createContext } from 'react';
import { Table, Row, Col } from 'antd';

import 'antd/dist/antd.css';
import './App.css';

import { TodoForm } from './components/Form/Form.component';
import { todoReducer } from './utils/functions/formReducer';

import { FORM_INITIAL_STATE } from './utils/constants/INITIAL_STATE';
import { FORM_COLUMNS } from './utils/constants/FORM_COLUMNS';

export const TodoContext = createContext();

const App = () => {
  const [todos, dispatchTodos] = useReducer(todoReducer, FORM_INITIAL_STATE);
  const pageSize = 5;
  const currentPage = Math.ceil(todos.length / pageSize);
  const tablePagination = {
    pageSizeOptions: ['5', '10', '15'],
    defaultPageSize: pageSize,
    current: currentPage,
    showSizeChanger: true,
    showQuickJumper: true
  };

  return (
    <TodoContext.Provider value={[todos, dispatchTodos]}>
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={24} lg={20} xl={20}>
          <Table dataSource={todos} columns={FORM_COLUMNS} pagination={tablePagination} />
        </Col>
      </Row>
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <TodoForm />
        </Col>
      </Row>
    </TodoContext.Provider>
  );
};
export default App;
