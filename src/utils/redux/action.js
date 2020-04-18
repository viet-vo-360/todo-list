import {
  ADD_TODO,
  COMPLETE_TODO,
  COMPLETE_SELECTED_ITEM,
  DELETE_TODO,
  DELETE_SELECTED_ITEM,
  CHECK_ITEM,
  CHECK_ALL_ITEM,
  EDIT_TODO,
} from "./actionTypes";

export const addTodo = (content) => ({
  type: ADD_TODO,
  payload: content,
});

export const completeTodo = (key) => ({
  type: COMPLETE_TODO,
  payload: key,
});

export const completeSelectedTodo = (selectedRowKeys) => ({
  type: COMPLETE_SELECTED_ITEM,
  payload: selectedRowKeys,
});

export const deleteTodo = (key) => ({
  type: DELETE_TODO,
  payload: key,
});

export const deleteSelectedTodo = (selectedRowKeys) => ({
  type: DELETE_SELECTED_ITEM,
  payload: selectedRowKeys,
});

export const checkItem = (content) => ({
  type: CHECK_ITEM,
  payload: content,
});

export const checkAllItem = (content) => ({
  type: CHECK_ALL_ITEM,
  payload: content,
});

export const editTodo = (content) => ({
  type: EDIT_TODO,
  payload: content,
});
