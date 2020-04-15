import React, { useState } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { Form, Input, Button, DatePicker, Select, Checkbox } from "antd";
import {
  ArrowLeftOutlined,
  EditOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { categories } from "../../constants/CATEGORIES";
import { getTodoById } from "../../../utils/redux/reducers/selectors";
import { editTodo } from "../../../utils/redux/action";

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
  const todoItem = getTodoById(state, ownProps.match.params.id)[0];
  return { todoItem };
};

const Detail = ({ todoItem, editTodo }) => {
  let itemFound = todoItem;
  const dateFormat = "DD/MM/YYYY";
  const [editMode, setEditMode] = useState(false);
  const [isImportant, setIsImportant] = useState(todoItem.isImportant);
  const onFinish = (values) => {
    editTodo({
      ...values,
      key: todoItem.key,
      isImportant,
      date: values.date.format(dateFormat),
      isChecked: todoItem.isChecked
    });
  };

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
            <a className="link" href="/">
              <ArrowLeftOutlined /> Back
            </a>
          </Form.Item>
          <Form.Item
            label="Task title"
            name="title"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input disabled={!editMode} />
          </Form.Item>

          <Form.Item
            label="Date"
            name="date"
            rules={[{ required: true, message: "Please pick day!" }]}
          >
            <DatePicker
              id="task-date-picker"
              style={{ width: "100%" }}
              format={dateFormat}
              disabled={!editMode}
            />
          </Form.Item>
          <Form.Item label="Category">
            <Input.Group compact>
              <Form.Item
                style={{ width: "70%" }}
                name="category"
                rules={[{ required: true, message: "Please choose category!" }]}
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
              <Button type="primary" htmlType="submit" disabled={!editMode}>
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
