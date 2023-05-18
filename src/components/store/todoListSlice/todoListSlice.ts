import { createSlice } from "@reduxjs/toolkit";
import { Todo } from "../../../types";
import { fetchTodos, deleteTodo, addTodo, toggleComplete } from "./todoActions";

interface TodoListState {
  todos: Todo[];
}

const initialState: TodoListState = {
  todos: [],
};

export const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      if (action.payload) {
        state.todos = action.payload;
      }
    });
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      state.todos = action.payload;
    });
    builder.addCase(addTodo.fulfilled, (state, action) => {
      state.todos.push(action.payload);
    });
    builder.addCase(toggleComplete.fulfilled, (state, action) => {
      state.todos = action.payload;
    })
  },
});

export default todoListSlice.reducer;
