import React from "react";
import {
  Form,
  Input,
  Button,
  DatePicker,
  Select,
  Checkbox,
  Anchor,
  Space,
} from "antd";
import {
  ArrowLeftOutlined,
  EditOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { categories } from "../../utils/constants/CATEGORIES";

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
const Detail = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Form
        {...layout}
        style={{ marginTop: "20px" }}
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item {... achorLayout}>
          <a class="link" href="#back">
            <ArrowLeftOutlined /> Back
          </a>
        </Form.Item>
        <Form.Item label="Task title">
          <Input />
        </Form.Item>

        <Form.Item label="Date">
          <DatePicker id="task-date-picker" style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item label="Category">
          <Input.Group compact>
            <Form.Item style={{ width: "70%" }}>
              <Select
                id="task-category"
                showSearch
                placeholder="Select a category"
                optionFilterProp="children"
                style={{ width: "100%" }}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                {categories.length > 0 &&
                  categories.map((category, i) => {
                    return (
                      <Option value={category.value}>{category.title}</Option>
                    );
                  })}
              </Select>
            </Form.Item>
            <Form.Item style={{ marginLeft: "20px" }}>
              <Checkbox>Is important!</Checkbox>
            </Form.Item>
          </Input.Group>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Space>
            <Button>
              <EditOutlined /> Edit
            </Button>
            <Button type="primary">
              <CheckCircleOutlined /> Save
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Detail;
