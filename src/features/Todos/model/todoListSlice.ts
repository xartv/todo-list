import { AnyAction, PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Todo } from 'src/entities/Todo/model/types';

import { fetchTodos, deleteTodo, addTodo, toggleComplete } from './todoActions';

interface TodoListState {
  todos: Todo[];
  error: string | null;
}

const initialState: TodoListState = {
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
