import React from 'react';
import { Col, Checkbox } from 'antd';

export const Important = ({ setImportant }) => (
  <Col id='checkbox-important-task'>
    <Checkbox onChange={(e) => setImportant(e.target.checked)}>Is important!</Checkbox>
  </Col>
);
