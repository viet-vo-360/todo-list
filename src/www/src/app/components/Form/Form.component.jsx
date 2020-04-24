import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../../../utils/redux/action";
import { Button, Form, Row, Typography } from "antd";

import { openNotification } from "../../../utils/functions/openNotification";

import { Calendar } from "./Calendar.component";
import { FormInput } from "./FormInput.component";
import { Category } from "./Category.component";
import { Important } from "./Important.component";

const { Title } = Typography;

const TodoForm = (props) => {
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [isImportant, setImportant] = useState(false);
  const [category, setCategory] = useState();
  const [existedError, setExistedError] = useState(false);

  const hasDate = date ? true : false;
  const hasCategory = category ? true : false;

  const formSubmit = () => {
    if (title && date && category && title.length >= 5) {
      if (props.todos.filter(e => e.title === title && e.date === date && e.category === category.value && !e.completed).length === 0) {
        props.addTodo({title, date, category, isImportant});
        setExistedError(false);

        // Clear values
        setTitle("");
        setDate(null);
        setImportant(false);
        setCategory(null);
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
          <FormInput data-testid="todo" setTitle={setTitle} value={title}/>
          {title && title.length >= 5 ? (
            <>
              <Calendar setDate={setDate} />
              <Category setCategory={setCategory} />
              <Important setImportant={setImportant}/>
            </>
          ) : null}
          {title && title.length < 5 ? (
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

export default connect(
  null,
  { addTodo }
)(TodoForm);
