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
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    },
    toggleComplete: (state, action: PayloadAction<number>) => {
      const newTodos = state.todos.map((todo) => {
            if (todo.id === action.payload) {
              return {
                title: todo.title,
                id: todo.id,
                completed: !todo.completed,
              };
            }
      
            return todo;
          });
      
      state.todos = newTodos;
    }
  },
});

export const { addTodo, deleteTodo, toggleComplete } = todoListSlice.actions;
export default todoListSlice.reducer;
