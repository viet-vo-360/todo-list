import { VISIBILITY_FILTERS } from "../../../app/constants/VISIBILITY_FILTERS";

export const getTodosState = (store) => store.todos;

export const getTodoById = (store, id) => {
  const todoItems = getTodos(store);
  return todoItems.filter((item) => item.key === id);
};

export const getTodos = (store) => getTodosState(store);

export const getTodosByVisibilityFilter = (store, visibilityFilter) => {
  const allTodos = getTodos(store);
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
    && e.completed === 'false').length !== 0
};
