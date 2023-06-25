import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { addTodo, deleteTodo, fetchTodos, toggleComplete } from '../actions/todoActions';
import { TodoListReducerSchema } from '../types/todoListReducerSchema';

export const initialState: TodoListReducerSchema = {
  todos: [],
  error: null,
};

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      if (action.payload) {
        state.todos = action.payload;
      }
    });
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    });
    builder.addCase(addTodo.fulfilled, (state, action) => {
      state.todos.push(action.payload);
    });
    builder.addCase(toggleComplete.fulfilled, (state, action) => {
      const toggledTodo = state.todos.find(todo => todo.id === action.payload);

      if (toggledTodo) {
        toggledTodo.completed = !toggledTodo?.completed;
      }
    });
    builder.addMatcher(isRejected, (state, action: AnyAction) => {
      state.error = action.payload;
    });
  },
});

function isRejected(action: AnyAction): action is PayloadAction {
  return action.type.endsWith('/rejected');
}

export default todoListSlice.reducer;
