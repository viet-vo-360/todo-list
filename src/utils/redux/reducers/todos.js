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
import { LOCAL_STORAGE_STATE } from "../../../app/constants/LOCAL_STORAGE";

const initialState = [];

const saveStateToLocalStorage = (state) => {
  // remove checked state
  state = state.map(item => {
    item.isChecked = false;
    return item;
  })

  // save to local storage
  localStorage.setItem(LOCAL_STORAGE_STATE, JSON.stringify(state));
}

export default (state = initialState, action) => {
  const { key, title, date, category, isImportant, isChecked } =
    action.payload || {};

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

      state = state.concat(todoItem);
      saveStateToLocalStorage(state);
      return state;

    case COMPLETE_TODO:
      openNotification("bottomLeft", "TODO completed");
      state = state.map((todo) => {
        if (todo.key === key) {
          return {
            ...todo,
            completed: true,
          };
        } else {
          return todo;
        }
      });
      saveStateToLocalStorage(state);
      return state;

    case COMPLETE_SELECTED_ITEM:
      var seletedItem = state.filter((item) => item.isChecked === true);

      if (seletedItem.length > 0) {
        seletedItem.map((item) => {
          var objIndex = state.findIndex((obj) => obj.key === item.key);
          state[objIndex].completed = true;
        });
      }

      saveStateToLocalStorage(state);
      return state;

    case DELETE_TODO:
      openNotification("bottomLeft", "TODO deleted");
      state = state.filter((item) => item.key !== key);

      saveStateToLocalStorage(state);
      return state;

    case DELETE_SELECTED_ITEM:
      var state = state.filter((item) => item.isChecked !== true);

      saveStateToLocalStorage(state);
      return state;

    case CHECK_ITEM:
      state = state.map((item) => {
        if (item.key === key) {
          item.isChecked = isChecked;
        }
        return item;
      });
      return state;

    case CHECK_ALL_ITEM:
      state = state.map((item) => {
        item.isChecked = isChecked;
        return item;
      });
      return state;
    case EDIT_TODO:
      openNotification("bottomLeft", "TODO edited");
      var objIndex = state.findIndex((obj) => obj.key === key);
      if (objIndex !== -1) {
        state[objIndex].title = title;
        state[objIndex].date = date;
        state[objIndex].category = category;
        state[objIndex].isImportant = isImportant;
      }
      saveStateToLocalStorage(state);
      return state;

    default:
      return state;
  }
};
