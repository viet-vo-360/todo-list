import React from "react";
import { Complete } from "../../components/Complete/Complete.component";
import { Delete } from "../../components/Delete/Delete.component";
import { Title } from "../../components/Title/Title.component";
import { SelectAll, Select } from "../../components/Form/Select.component";
export const FORM_COLUMNS = [
  {
    title: <SelectAll />,
    dataIndex: "select",
    key: "select",
    render: (text, record) => {
      return <Select record={record}>{text}</Select>;
    },
  },

  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    render: (text, record) => {
      return <Title record={record}>{text}</Title>;
    },
  },

  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    render: (text, record) => {
      return <Title record={record}>{text}</Title>;
    },
  },

  {
    title: "Category",
    dataIndex: "category",
    key: "category",
    render: (text, record) => {
      return <Title record={record}>{text}</Title>;
    },
  },

  {
    title: "Action",
    key: "action",
    dataIndex: "action",
    render: (text, record) => {
      return (
        <>
          <Complete record={record} />
          <Delete record={record} />
        </>
      );
    },
  },
];
