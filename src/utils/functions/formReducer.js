import { v4 as uuidv4 } from 'uuid';
import { openNotification } from './openNotification';

export function todoReducer(state, action) {
  const [title, date, category] = action.payload;

  switch (action.type) {
    case 'ADD_TODO':
      openNotification('bottomLeft', 'TODO added');
      return state.concat({
        title: title,
        date: date,
        category: category.value,
        key: uuidv4(),
        completed: 'false',
        isChecked: 'false'
      });
    case 'COMPLETE_TODO':
      openNotification('bottomLeft', 'TODO completed');
      return state.map((todo) => {
        if (todo.key === action.payload || todo.isChecked === 'true') {
          return {
            ...todo,
            completed: 'true',
          };
        } else {
          return todo;
        }
      });
    case 'DELETE_TODO':
      openNotification('bottomLeft', 'TODO deleted');
      return state.filter((item) => item.key !== action.payload && item.isChecked !== 'true');
    case 'CHECKBOX_ON_CHANGE':
      return state.map((todo) => {
        if (action.payload.includes(todo.key)) {
          return {
            ...todo,
            isChecked: 'true',
          };
        } else {
          return {
            ...todo,
            isChecked: 'false',
          };
        }
      });
    default:
      openNotification('bottomLeft', 'An error has occured!');
      throw new Error();
  }
}
