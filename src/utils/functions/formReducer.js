import { v4 as uuidv4 } from "uuid";
import { openNotification } from "./openNotification";

export function todoReducer(state, action) {
  const [title, date, category, isImportant] = action.payload;

  switch (action.type) {
    case "ADD_TODO":
      openNotification("bottomLeft", "TODO added");
      return state.concat({
        title: title,
        date: date,
        category: category.value,
        key: uuidv4(),
        completed: "false",
        isChecked: false,
        isImportant: isImportant,
      });
    case "COMPLETE_TODO":
      openNotification("bottomLeft", "TODO completed");
      return state.map((todo) => {
        if (todo.key === action.payload) {
          return {
            ...todo,
            completed: "true",
          };
        } else {
          return todo;
        }
      });
    case "COMPLETE_SELECTED_ITEM":
      var seletedItem = state.filter((item) => item.isChecked === true);

      if (seletedItem.length > 0) {
        seletedItem.map((item) => {
          var objIndex = state.findIndex((obj) => obj.key === item.key);
          state[objIndex].completed = "true";
        });
      }

      return [...state];
    case "DELETE_TODO":
      openNotification("bottomLeft", "TODO deleted");
      return state.filter((item) => item.key !== action.payload);
    case "DELETE_SELECTED_ITEM":
      var selectedItem = state.filter((item) => item.isChecked === true);

      if (selectedItem.length > 0) {
        selectedItem.map((sItem) => {
          state = state.filter((item) => item.key !== sItem.key);
        });
        // state = state.filter((item) => selectedItem.indexOf(item));
      }
      return state;

    case "CHECK_TODO":
      var objIndex = state.findIndex((obj) => obj.key === action.payload);
      if (objIndex !== -1) {
        state[objIndex].isChecked = action.isChecked;
      }
      return [...state];
    case "CHECK_ALL":
      return state.map((item) => {
        item.isChecked = action.isChecked;
        return item;
      });
    default:
      openNotification("bottomLeft", "An error has occured!");
      throw new Error();
  }
}
