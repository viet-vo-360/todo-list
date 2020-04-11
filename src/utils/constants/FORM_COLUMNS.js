import React from 'react';

import { Complete } from '../../components/Complete/Complete.component';
import { Delete } from '../../components/Delete/Delete.component';
import { Title } from '../../components/Title/Title.component';
import { Checkbox } from '../../components/CheckBox/CheckBox.component';
import { Checkbox as CheckBoxAll} from "antd";

export const FORM_COLUMNS = [
  {
    title: <CheckBoxAll className="ckb-all"> Check All</CheckBoxAll>,
    dataIndex: 'checkbox',
    key: 'checkbox',
    render: (record) => {
      return <Checkbox record={record}></Checkbox>;
    },
  },

  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    render: (text, record) => {
      return <Title record={record}>{text}</Title>;
    },
  },

  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    render: (text, record) => {
      return <Title record={record}>{text}</Title>;
    },
  },

  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
    render: (text, record) => {
      return <Title record={record}>{text}</Title>;
    },
  },

  {
    title: 'Action',
    key: 'action',
    dataIndex: 'action',
    render: (record) => {
      return (
        <>
          <Complete record={record} />
          <Delete record={record} />
        </>
      );
    },
  },
];
