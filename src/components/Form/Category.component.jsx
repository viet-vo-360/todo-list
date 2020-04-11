import React from "react";
import { Select, Col } from "antd";
import { categories } from "../../utils/constants/CATEGORIES";

const { Option } = Select;

export const Category = ({ setCategory }) => (
  <Col>
    <Select
      id="task-category"
      showSearch
      style={{ width: 200, marginLeft: '10px' }}
      placeholder="Select a category"
      optionFilterProp="children"
      onChange={(_, category) => setCategory(category)}
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      {categories.length > 0 &&
        categories.map((category, i) => {
          return <Option value={category.value}>{category.title}</Option>;
        })}
    </Select>
  </Col>
);
