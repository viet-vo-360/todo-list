import React, { useState, useContext } from "react";
import { Checkbox } from "antd";
import { TodoContext } from "../../App";
export const SelectAll = () => {
  const [checkAll, setCheckAll] = useState(false);
  const [, dispatchTodos] = useContext(TodoContext);

  function onSelectAllChange() {
    dispatchTodos({ type: 'CHECK_ALL', payload: '', isChecked: !checkAll });
    setCheckAll(!checkAll);
  }

  return (
    <Checkbox id="ckb-all" onChange={onSelectAllChange} checked={checkAll}>
      Select All
    </Checkbox>
  );
};

export const Select = ({ record }) => {
  // const [checked, setChecked] = useState(record);
  const [, dispatchTodos] = useContext(TodoContext);

  function onSelectChange() {
    // checked.isChecked = !checked.isChecked;
    // setChecked({...checked, isChecked : !checked.isChecked});
    dispatchTodos({ type: 'CHECK_TODO', payload: record.key, isChecked: !record.isChecked });
  }

  return (
    <Checkbox
      className="ckb-item"
      checked={record.isChecked}
      onChange={onSelectChange}
    ></Checkbox>
  );
};
