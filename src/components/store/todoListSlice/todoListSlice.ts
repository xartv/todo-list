import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Todo } from "../../../types";

interface TodoListState {
  todos: Todo[];
}

const initialState: TodoListState = {
  todos: [],
};

export const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
  },
});

export const { addTodo } = todoListSlice.actions;
export default todoListSlice.reducer;
