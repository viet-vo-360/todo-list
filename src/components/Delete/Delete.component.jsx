import React, { useContext, useState } from 'react';
import { TodoContext } from '../../App';
import { Popconfirm } from 'antd';
import { Button } from 'antd';

export const Delete = ({ record }) => {
  const [, dispatchTodos] = useContext(TodoContext);

  return (
    <Popconfirm
      title="Are you sure you want to delete?"
      onConfirm={() => {
        dispatchTodos({ type: 'DELETE_TODO', payload: record.key });
      }}
    >
      <Button href="#delete"
        className="btn-delete"
        type="primary"
        danger
        style={{ width: '100px' }}
      >
        Delete
      </Button>
    </Popconfirm>
  );
};
