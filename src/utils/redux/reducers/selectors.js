import { VISIBILITY_FILTERS } from "../../../app/constants/VISIBILITY_FILTERS";
import { LOCAL_STORAGE_STATE } from "../../../app/constants/LOCAL_STORAGE";

export const getTodosState = (store) => { 
  var localState = localStorage.getItem(LOCAL_STORAGE_STATE);

  if (localState == null) {
    localStorage.setItem(LOCAL_STORAGE_STATE, JSON.stringify(store.todos));
    return store.todos;
  };

  return JSON.parse(localState);
};

export const getTodoById = (store, id) => {
  const todoItems = getTodos(store);
  return todoItems.filter((item) => item.key === id);
};

export const getTodos = (store) => getTodosState(store);

export const getTodosByVisibilityFilter = (state, visibilityFilter) => {
  const allTodos = state.todos;
  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.COMPLETED:
      return allTodos.filter((todo) => todo.completed);
    case VISIBILITY_FILTERS.INCOMPLETE:
      return allTodos.filter((todo) => !todo.completed);
    case VISIBILITY_FILTERS.ALL:
    default:
      return allTodos;
  }
};

export const isDuplicatedTask = (todos, todoItem) => {
  return todos.filter(
    e => e.key !== todoItem.key
    && e.title === todoItem.title
    && e.date === todoItem.date
    && e.category === todoItem.category
    && !e.completed).length !== 0
};
