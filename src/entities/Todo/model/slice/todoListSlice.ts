import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TodoEntity } from 'entities/Todo/model/types/TodoEntity';

import { addTodo, deleteTodo, fetchTodos, toggleComplete } from '../actions/todoActions';

export interface TodoListState {
  todos: TodoEntity[];
  error: string | null;
}

export const initialState: TodoListState = {
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
