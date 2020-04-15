import React from "react";
import { Typography, Anchor } from "antd";

const { Paragraph } = Typography;
const { Link } = Anchor;

export const Title = (data) => {
  return (
    <Paragraph
      className={
        // Display text-decoration: line-through if TODO is completed (true)
        data.record.completed === true ? "true" : "false"
      }
    >
      {data.record.title !== data.children ? (
        data.children
      ) : (
        <a className="link" href={`/detail/${data.record.key}`}>{data.children}</a>
      )}
    </Paragraph>
  );
};
