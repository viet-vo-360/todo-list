import { v4 as uuidv4 } from "uuid";

export const FORM_INITIAL_STATE = [
  {
    key: uuidv4(),
    title: "Do Housecleaning",
    date: "2020-04-15",
    category: "Work",
    completed: "false",
    isImportant: true,
    isChecked: false,
    dataIndex: 0,
  },
  {
    key: uuidv4(),
    title: "Go to the supermarket",
    date: "2020-04-20",
    completed: "false",
    category: "Shopping",
    isImportant: false,
    isChecked: false,
    dataIndex: 0,
  },
];
