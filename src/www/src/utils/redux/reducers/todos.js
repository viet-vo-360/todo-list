import { v4 as uuidv4 } from "uuid";
import { openNotification } from "../../functions/openNotification";
import {
  ADD_TODO,
  COMPLETE_TODO,
  COMPLETE_SELECTED_ITEM,
  DELETE_TODO,
  DELETE_SELECTED_ITEM,
  CHECK_ITEM,
  CHECK_ALL_ITEM,
  EDIT_TODO,
} from "../actionTypes";
const initialState = [];

export default (state = initialState, action) => {
  const { key, title, date, category, isImportant, isChecked, selectedRowKeys } = action.payload || {};

  switch (action.type) {
    case ADD_TODO:
      openNotification("bottomLeft", "TODO added");

      const todoItem = {
        key: uuidv4(),
        title: title,
        date: date,
        category: category.value,
        completed: false,
        isChecked: false,
        isImportant: isImportant,
      };
      return state.concat(todoItem);

    case COMPLETE_TODO:
      openNotification("bottomLeft", "TODO completed");
      return state.map((todo) => {
        if (todo.key === key) {
          return {
            ...todo,
            completed: true,
          };
        } else {
          return todo;
        }
      });
    case COMPLETE_SELECTED_ITEM:
      var completeSelectedItem = state.filter((item) => selectedRowKeys.includes(item.key));

      if (completeSelectedItem.length > 0) {
        completeSelectedItem.map((item) => {
          var objIndex = state.findIndex((obj) => obj.key === item.key);
          state[objIndex].completed = true;
        });
      }
      return [...state];

    case DELETE_TODO:
      openNotification("bottomLeft", "TODO deleted");
      return [...state.filter((item) => item.key !== key)];

    case DELETE_SELECTED_ITEM:
      state = state.filter((item) => !selectedRowKeys.includes(item.key));
      return state;

    case CHECK_ITEM:
      var objIndex = state.findIndex((obj) => obj.key === key);
      if (objIndex !== -1) {
        state[objIndex].isChecked = isChecked;
      }
      return [...state];

    case CHECK_ALL_ITEM:
      return state.map((item) => {
        item.isChecked = isChecked;
        return item;
      });
    case EDIT_TODO:
      openNotification("bottomLeft", "TODO edited");
      var objIndex = state.findIndex((obj) => obj.key === key);
      if (objIndex !== -1) {
        state[objIndex].title = title;
        state[objIndex].date = date;
        state[objIndex].category = category;
        state[objIndex].isImportant = isImportant;
      }
      return [...state];
    default:
      return state;
  }
};
