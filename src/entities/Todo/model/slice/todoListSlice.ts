import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { addTodo, deleteTodo, fetchTodos, toggleComplete } from '../actions/todoActions';
import { TodoListReducerSchema } from '../types/todoListReducerSchema';

export const initialState: TodoListReducerSchema = {
  list: [],
  error: null,
};

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      if (action.payload) {
        state.list = action.payload;
      }
    });
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      state.list = state.list.filter(todo => todo.id !== action.payload);
    });
    builder.addCase(addTodo.fulfilled, (state, action) => {
      state.list.push(action.payload);
    });
    builder.addCase(toggleComplete.fulfilled, (state, action) => {
      const toggledTodo = state.list.find(todo => todo.id === action.payload);

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

export const { reducer: todoListReducer } = todoListSlice;
