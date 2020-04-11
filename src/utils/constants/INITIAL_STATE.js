import { v4 as uuidv4 } from "uuid";

export const FORM_INITIAL_STATE = [
  {
    key: uuidv4(),
    title: "Do Housecleaning",
    date: "2020-04-15",
    category: "Work",
    completed: "false",
    dataIndex: 0,
    checkbox: {
      isChecked: false,
    },
  },
  {
    key: uuidv4(),
    title: "Go to the supermarket",
    date: "2020-04-20",
    completed: "false",
    category: "Shopping",
    dataIndex: 0,
    checkbox: {
      isChecked: true,
    },
  },
];
