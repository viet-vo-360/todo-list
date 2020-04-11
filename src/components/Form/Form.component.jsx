import React, { useState, useContext } from "react";
import { Button, Form, Row, Typography } from "antd";

import { openNotification } from "../../utils/functions/openNotification";

import { Calendar } from "./Calendar.component";
import { FormInput } from "./FormInput.component";
import { Category } from "./Category.component";
import { Important } from "./Important.component";

import { TodoContext } from "../../App";

const { Title } = Typography;

export const TodoForm = (props) => {
  // Could replace useState with useReducer but I decided to keep things simple
  const [form, setForm] = useState();
  const [date, setDate] = useState();
  const [isImportant, setImportant] = useState();
  const [category, setCategory] = useState();
  const [, dispatchTodos] = useContext(TodoContext);
  const [existedError, setExistedError] = useState(false);

  const hasDate = date ? true : false;
  const hasCategory = category ? true : false;

  const formSubmit = () => {
    if (form && date && category && form.length >= 5) {
      if (props.todos.filter(e => e.title === form && e.date === date && e.category === category.value && e.completed === 'false').length === 0) {
        dispatchTodos({ type: "ADD_TODO", payload: [form, date, category, isImportant] });
        setExistedError(false);
      } else {
        setExistedError(true);
      }
    } else {
      openNotification("bottomLeft", "Title must be a minimum of 5 letters");
    }
  };

  return (
    <>
      <Form onFinish={formSubmit}>
        <Title data-testid="todo" level={4}>
          Add TODO item
        </Title>
        <Row type="flex" justify="center">
          <FormInput data-testid="todo" setForm={setForm} />
          {form && form.length >= 5 ? (
            <>
              <Calendar setDate={setDate} />
              <Category setCategory={setCategory} />
              <Important setImportant={setImportant}/>
            </>
          ) : null}
          {form && form.length < 5 ? (
            <Title className="TitleLength" type="danger" level={4}>
              Length must be more than 5
            </Title>
          ) : existedError ? (
            <Title className="TitleLength" type="danger" level={4}>
              Task is duplicated
            </Title>
          ): (null)}
        </Row>
        <Row>
          <Button type="primary" id="btn-add-task" htmlType="submit" block disabled={!hasDate || !hasCategory}>
            Add TODO
          </Button>
        </Row>
      </Form>
    </>
  );
};
