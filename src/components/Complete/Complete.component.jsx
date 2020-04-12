import React, { useContext, useState } from 'react';
import { TodoContext } from '../../App';
import { Button } from 'antd';

export const Complete = ({ record }) => {
  const [, dispatchTodos] = useContext(TodoContext);
  const [hidden, setHidden] = useState(record.completed === "true" ? true : false);
  return (
    <div style={{ display: 'inline', marginRight: '5px'}}>
      {
        hidden ? (null) :
          (
            <Button href="#complete"
              className="btn-complete"
              type="primary"
              style={{width: '100px'}}
              onClick={
                () => {
                  setHidden(true);
                  dispatchTodos({ type: 'COMPLETE_TODO', payload: record.key });
                }
              }
            >
              {hidden ? '' : 'Complete'}
            </Button >
          )
      }
    </div>
  )
};
