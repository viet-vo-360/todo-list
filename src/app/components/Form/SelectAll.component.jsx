import React, { useState } from "react";
import { connect } from "react-redux";
import { Checkbox } from "antd";
import { checkAllItem } from "../../../utils/redux/action";

const SelectAll = ({checkAllItem}) => {
  const [checkAll, setCheckAll] = useState(false);
  function onSelectAllChange() {
    setCheckAll(!checkAll);
    checkAllItem({isChecked: !checkAll});
  }

  return (
    <Checkbox id="ckb-all" onChange={onSelectAllChange} checked={checkAll}>
      Select All
    </Checkbox>
  );
};

export default connect(null, { checkAllItem })(SelectAll);

