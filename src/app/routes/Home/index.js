import React, { useState } from "react";
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
  const [selectedRowKeys, setSelectedRowKeys] = useState();
  const [currentPage, setCurrentPage] = useState(
    Math.ceil(todos.length / pageSize)
  );

  const onSelectChange = (selectedRowKeys) => {
    setSelectedRowKeys(selectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const tablePagination = {
    pageSize: pageSize,
    defaultCurrent: 1,
    current: currentPage,
    hideOnSinglePage: true,
  };

  const handlePagination = (pagination) => {
    const { current } = pagination;
    setCurrentPage(current);
  };

  var notCompleteSelected, itemSelected;
  if (selectedRowKeys && selectedRowKeys.length > 0) {
    itemSelected = todos.filter(item => selectedRowKeys.includes(item.key));
    notCompleteSelected = itemSelected.filter(item => !item.completed);

  }
  return (
    <>
      {todos.length > 0 && (
        <Row type="flex" justify="center">
          <Col xs={24} sm={24} md={24} lg={20} xl={20}>
            <Table
              rowClassName={(record) =>
                record.isImportant ? "important-task" : ""
              }
              rowSelection={rowSelection}
              dataSource={todos}
              columns={FORM_COLUMNS}
              pagination={tablePagination}
              onChange={handlePagination}
            />
          </Col>
        </Row>
      )}
      {itemSelected && itemSelected.length > 0 && (
        <Row type="flex" justify="right">
          <Col xs={24} sm={24} md={24} lg={20} xl={20}>
            { notCompleteSelected && notCompleteSelected.length > 0 && (
              <CompleteBySelected selectedRowKeys={ selectedRowKeys } />
            )}
            <DeleteBySelected selectedRowKeys={ selectedRowKeys } />
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
