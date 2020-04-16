import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import moment from "moment";
import { Form, Input, Button, DatePicker, Select, Checkbox } from "antd";
import {
  ArrowLeftOutlined,
  EditOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { categories } from "../../constants/CATEGORIES";
import { getTodoById, getTodosState, isDuplicatedTask } from "../../../utils/redux/reducers/selectors";
import { editTodo } from "../../../utils/redux/action";
import { successMessage, titleLengthErrorMessage, duplicateErrorMessage } from "../../constants/VALIDATION_MESSAGES";
import { useHistory } from "react-router-dom";

const { Option } = Select;

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 6 },
};

const achorLayout = {
  wrapperCol: { offset: 1, span: 4 },
};

const tailLayout = {
  wrapperCol: { offset: 6, span: 4 },
};

const mapStateToProps = (state, ownProps) => {
  const todos = getTodosState(state);
  const todoItem = getTodoById(state, ownProps.match.params.id)[0];
  return { todoItem, todos };
};

const Detail = ({ todoItem, editTodo, todos }) => {
  let itemFound = todoItem;
  const dateFormat = "DD/MM/YYYY";
  const [editMode, setEditMode] = useState(false);
  const [enableSaveButton, setEnableSaveButton] = useState(false);
  const history = useHistory();
  const [isImportant, setIsImportant] = useState(todoItem.isImportant);

  const onFinish = (values) => {
    editTodo({
      ...values,
      key: todoItem.key,
      isImportant,
      date: values.date.format(dateFormat),
      isChecked: todoItem.isChecked
    });
    setEditMode(false);
    history.push("/");
  };

  const checkDuplicatedTask = (result, checkedAttr) => {
    let checkedTask = {
      key: todoItem.key,
      title: title.value,
      category: category.value,
      date: date.value
    };

    checkedTask = { ...checkedTask, ...checkedAttr };

    if (isDuplicatedTask(todos, checkedTask)) {
      result = duplicateErrorMessage;
    }

    if (result.validateStatus === 'success' && result.errorMsg === null) {
      clearAllErrorMessages(result);
      setEnableSaveButton(true); // enable save button
    } else {
      setEnableSaveButton(false); // disable save button
    }

    return result;
  };

  const clearAllErrorMessages = (result) => {
    setTitle({ ...result, value: title.value });
    setDate({ ...result, value: date.value });
    setCategory({ ...result, value: category.value });
  };

  const validateTaskTitle = (title) => {
    let result = successMessage;

    if (title.length < 5) {
      result = titleLengthErrorMessage;
    };

    result = checkDuplicatedTask(result, { title: title });

    return result;
  };

  const validateCategory = (category) => {
    let result = successMessage;
    result = checkDuplicatedTask(result, { category: category });

    return result;
  };

  const validateDate = (date) => {
    let result = successMessage;
    result = checkDuplicatedTask(result, { date: date });

    return result;
  };

  const onTitleChange = (title) => {
    setTitle({ ...validateTaskTitle(title), value: title });
  };

  const onCategoryChange = (category) => {
    setCategory({ ...validateCategory(category), value: category });
  };

  const onDateChange = (date) => {
    var convertDate = moment(date).format(dateFormat);
    setDate({ ...validateDate(convertDate), value: convertDate });
  };

  const [title, setTitle] = useState({
    value: todoItem.title
  });

  const [date, setDate] = useState({
    value: todoItem.date
  });

  const [category, setCategory] = useState({
    value: todoItem.category
  });

  return (
    <div>
      {!itemFound ? (
        <h1>This item isn't existed in todo list</h1>
      ) : (
        <Form
          {...layout}
          style={{ marginTop: "20px" }}
          name="edit-item"
          onFinish={onFinish}
          initialValues={{
            ...todoItem,
            date: moment(todoItem.date, dateFormat),
            isImportant: isImportant,
            checked: isImportant ? "checked" : "",
          }}
        >
          <Form.Item {...achorLayout}>
            <Link className="link" to="/">
              <ArrowLeftOutlined /> Back
            </Link>
          </Form.Item>
          <Form.Item
            label="Task title"
            name="title"
            validateStatus={title.validateStatus}
            help={title.errorMsg}
          >
            <Input disabled={!editMode} onChange={e => onTitleChange(e.target.value)} value={title.value}/>
          </Form.Item>

          <Form.Item
            label="Date"
            name="date"
            rules={[{ required: true, message: "Please pick a date!" }]}
            validateStatus={date.validateStatus}
            help={date.errorMsg}
          >
            <DatePicker
              id="task-date-picker"
              style={{ width: "100%" }}
              format={dateFormat}
              disabled={!editMode}
              value={date.value}
              onChange={onDateChange}
            />
          </Form.Item>
          <Form.Item label="Category">
            <Input.Group compact>
              <Form.Item
                style={{ width: "70%" }}
                name="category"
                rules={[{ required: true, message: "Please choose category!" }]}
                validateStatus={category.validateStatus}
                help={category.errorMsg}
              >
                <Select
                  id="task-category"
                  showSearch
                  placeholder="Select a category"
                  optionFilterProp="children"
                  style={{ width: "100%" }}
                  disabled={!editMode}
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                  onChange={onCategoryChange}
                  value={category.value}
                >
                  {categories.length > 0 &&
                    categories.map((category, i) => {
                      return (
                        <Option key={i} value={category.value}>
                          {category.title}
                        </Option>
                      );
                    })}
                </Select>
              </Form.Item>
              <Form.Item
                style={{ marginLeft: "20px" }}
                name="isImportant"
                valuePropName="checked"
              >
                <Checkbox
                  onChange={() => setIsImportant(!isImportant)}
                  disabled={!editMode}
                >
                  Is important!
                </Checkbox>
              </Form.Item>
            </Input.Group>
          </Form.Item>
          <Form.Item {...tailLayout}>
            <div>
              <Button
                style={{ marginRight: "10px" }}
                onClick={() => setEditMode(true)}
                disabled={editMode}
              >
                <EditOutlined /> Edit
              </Button>
              <Button type="primary" htmlType="submit" disabled={!editMode || !enableSaveButton}>
                <CheckCircleOutlined /> Save
              </Button>
            </div>
          </Form.Item>
        </Form>
      )}
    </div>
  );
};

export default connect(mapStateToProps, { editTodo })(Detail);
