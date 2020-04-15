import React, { useState } from "react";
import { connect } from "react-redux";
import { Checkbox } from "antd";
import { checkItem } from "../../utils/redux/action";

const Select = ({ record, children, checkItem }) => {
  const [checked, setChecked] = useState(record);

  function onSelectChange() {
    setChecked({ ...checked, isChecked: !checked.isChecked });
    checkItem({ key: record.key, isChecked: !checked.isChecked });
  }

  return (
    <Checkbox
      className="ckb-item"
      checked={checked.isChecked}
      onChange={onSelectChange}
    ></Checkbox>
  );
};

export default connect(null, { checkItem })(Select);
