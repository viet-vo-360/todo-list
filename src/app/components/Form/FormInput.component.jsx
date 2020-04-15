import React from 'react';
import { Col, Form, Input } from 'antd';
import { TagsOutlined } from '@ant-design/icons';

export const FormInput = ({setTitle}) => (
  <Col xs={24} sm={24} md={24} lg={12} xl={12}>
    <Form.Item label="Title">
      <Input
        prefix={
          <TagsOutlined /> // Icon
        }
        id="task-tilte"
        onChange={e => {
          setTitle(e.target.value);
        }}
      />
    </Form.Item>
  </Col>
);
