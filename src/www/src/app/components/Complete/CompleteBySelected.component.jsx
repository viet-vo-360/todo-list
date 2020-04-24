import React from "react";
import { connect } from "react-redux";
import { completeSelectedTodo } from "../../../utils/redux/action";
import { Button } from "antd";

const CompleteBySelected = ({completeSelectedTodo, selectedRowKeys}) => {
  return (
    <>
      <div style={{ display: "inline", marginRight: "5px" }}>
        <Button
          href="#complete"
          className="btn-complete"
          type="primary"
          style={{ width: "300px" }}
          onClick={() => completeSelectedTodo({selectedRowKeys})}
        >
          Complete item selected
        </Button>
      </div>
    </>
  );
};

export default connect(null, { completeSelectedTodo })(CompleteBySelected);
