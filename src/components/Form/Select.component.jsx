import React, { useState } from "react";
import { Checkbox } from "antd";

export const SelectAll = () => {
  const [checkAll, setCheckAll] = useState(false);

  function onSelectAllChange() {
    setCheckAll(!checkAll);
  }

  return (
    <Checkbox id="ckb-all" onChange={onSelectAllChange} checked={checkAll}>
      Select All
    </Checkbox>
  );
};

export const Select = ({ record }) => {
  const [checked, setChecked] = useState(record);

  function onSelectChange() {
    checked.isChecked = !checked.isChecked;
    setChecked({ ...checked, isChecked: !checked.isChecked });
  }

  return (
    <Checkbox
      className="ckb-item"
      checked={record.isChecked}
      onChange={onSelectChange}
    ></Checkbox>
  );
};
