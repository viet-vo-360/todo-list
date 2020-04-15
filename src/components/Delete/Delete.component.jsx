import React, { useContext, useState } from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../../utils/redux/action";
import { Popconfirm as Confirm, Button } from "antd";

const Delete = ({ record, deleteTodo }) => {
  return (
    <Confirm
      title="Are you sure you want to delete?"
      onConfirm={() => {
        deleteTodo({key : record.key});
      }}
    >
      <Button
        href="#delete"
        className="btn-delete"
        type="primary"
        danger
        style={{ width: "100px" }}
      >
        Delete
      </Button>
    </Confirm>
  );
};

export default connect(null, { deleteTodo })(Delete);
