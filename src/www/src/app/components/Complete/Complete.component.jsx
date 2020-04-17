import React, { useState } from "react";
import { connect } from "react-redux";
import { completeTodo } from "../../../utils/redux/action";
import { Button } from "antd";

const Complete = ({ record, completeTodo }) => {
  const [hidden, setHidden] = useState(
    record.completed === "true" ? true : false
  );
  return (
    <div style={{ display: "inline", marginRight: "5px" }}>
      {hidden ? null : (
        <Button
          href="#complete"
          className="btn-complete"
          type="primary"
          style={{ width: "100px" }}
          onClick={() => {
            setHidden(true);
            completeTodo({key: record.key})
          }}
        >
          {hidden ? "" : "Complete"}
        </Button>
      )}
    </div>
  );
};

export default connect(null, { completeTodo })(Complete);
