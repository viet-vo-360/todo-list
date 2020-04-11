import React, { useContext, useState } from "react";
import { Checkbox as CheckboxComponent } from "antd";

export const Checkbox = ({ record }) => {
  const isChecked = record !== undefined && record.isChecked ? true : false;
  const [checked, setChecked] = useState(isChecked);
  function onChange(e) {
    setChecked(!checked);
  }
  return (
    <CheckboxComponent
      className="ckb-item"
      checked={checked}
      onChange={onChange}
    ></CheckboxComponent>
  );
};
