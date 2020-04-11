import React from 'react';
import { Col, DatePicker, Form } from 'antd';

export const Calendar = ({setDate}) => (
  <Col>
    <Form.Item className="CalendarLabel" label="Select a date" >
      <DatePicker id="task-date-picker" onChange={(_, dateString) => setDate(dateString)} />
    </Form.Item>
  </Col>
);
