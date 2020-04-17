import React from "react";
import { connect } from "react-redux";
import { Table, Row, Col } from "antd";
import { FORM_COLUMNS } from "../../constants/FORM_COLUMNS";
import { VISIBILITY_FILTERS } from "../../constants/VISIBILITY_FILTERS";
import { getTodosByVisibilityFilter } from "../../../utils/redux/reducers/selectors";
import TodoForm from "../../components/Form/Form.component";
import CompleteBySelected from "../../components/Complete/CompleteBySelected.component";
import DeleteBySelected from "../../components/Delete/DeleteBySelected.component";

const mapStateToProps = (state) => {
  const { visibilityFilter } = state;
  const todos = getTodosByVisibilityFilter(state, visibilityFilter);
  return { todos };
};

const TodoList = ({ todos }) => {
  const pageSize = 5;
  const currentPage = Math.ceil(todos.length / pageSize);
  const tablePagination = {
    pageSizeOptions: ["5", "10", "15"],
    defaultPageSize: pageSize,
    current: currentPage,
    showSizeChanger: true,
    showQuickJumper: true,
  };
  return (
    <>
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
    </>
  );
};
export default connect(mapStateToProps)(TodoList);
