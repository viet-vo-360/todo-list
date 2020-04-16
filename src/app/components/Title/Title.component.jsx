import React from "react";
import { Link } from 'react-router-dom'
import { Typography } from "antd";

const { Paragraph } = Typography;

export default ({ record, children }) => {
  return (
    <Paragraph
      className={
        // Display text-decoration: line-through if TODO is completed (true)
        record.completed === true ? "true" : "false"
      }
    >
      {record.title !== children ? (
        children
      ) : (
        <Link className="link" to={`/detail/${record.key}`}>
          {children}
        </Link>
      )}
    </Paragraph>
  );
};
