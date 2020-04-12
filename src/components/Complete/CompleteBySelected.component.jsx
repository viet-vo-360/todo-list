import React, { useContext, useState } from "react";
import { TodoContext } from "../../App";
import { Button } from "antd";

export const CompleteBySelected = () => {
  const [, dispatchTodos] = useContext(TodoContext);
  const [hidden, setHidden] = useState(false);
  return (
    <div style={{ display: "inline", marginRight: "5px" }}>
      <Button
        href="#complete"
        className="btn-complete"
        type="primary"
        style={{ width: "300px" }}
        onClick={() => {
          setHidden(true);
          dispatchTodos({ type: "COMPLETE_SELECTED_ITEM", payload: "" });
        }}
      >
        Complete item selected
      </Button>
    </div>
  );
};
