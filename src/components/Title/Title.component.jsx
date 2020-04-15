import React from "react";
import { Typography, Anchor } from "antd";

const { Paragraph } = Typography;
const { Link } = Anchor;

export const Title = ({ record, children }) => {
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
        <a className="link" href={`/detail/${record.key}`}>
          {children}
        </a>
      )}
    </Paragraph>
  );
};
