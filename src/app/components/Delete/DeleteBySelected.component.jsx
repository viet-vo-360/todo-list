import React from 'react';
import { connect } from "react-redux";
import { deleteSelectedTodo } from "../../../utils/redux/action";
import { Popconfirm, Button } from 'antd';

const DeleteBySelected = ({deleteSelectedTodo}) => {
  return (
    <Popconfirm
      title="Are you sure you want to delete?"
      onConfirm={() => {
        deleteSelectedTodo()
      }}
    ><Button href="#delete"
        className="btn-delete"
        type="primary"
        danger
        style={{ width: '300px' }}
      >
        Delete item selected
      </Button>
    </Popconfirm>
  );
};

export default connect(null, { deleteSelectedTodo })(DeleteBySelected);
