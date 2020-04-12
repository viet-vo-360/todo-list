import React, { useContext, useState } from 'react';
import { TodoContext } from '../../App';
import { Popconfirm } from 'antd';
import { Button } from 'antd';

export const DeleteBySelected = () => {
  const [, dispatchTodos] = useContext(TodoContext);

  return (
    <Popconfirm
      title="Are you sure you want to delete?"
      onConfirm={() => {
        dispatchTodos({ type: 'DELETE_SELECTED_ITEM', payload: '' });
      }}
    ><Button href="#delete"
        className="btn-delete"
        type="primary"
        danger
        style={{ width: '300px' }}
      >
        Delete item selected
      </Button>
    </Popconfirm>
  );
};
