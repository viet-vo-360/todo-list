import { ADD_TODO, COMPLETE_TODO, COMPLETE_SELECTED_ITEM, DELETE_TODO, DELETE_SELECTED_ITEM } from "./actionTypes";

export const addTodo = (content) => ({
  type: ADD_TODO,
  payload: content
});

export const completeTodo = (key) => ({
  type: COMPLETE_TODO,
  payload: key
});

export const completeSelectedTodo = () => ({
  type: COMPLETE_SELECTED_ITEM,
  payload: ""
});

export const deleteTodo = (key) => ({
  type: DELETE_TODO,
  payload: key
});

export const deleteSelectedTodo = () => ({
  type: DELETE_SELECTED_ITEM,
  payload: ""
});
