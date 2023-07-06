import { createAsyncThunk } from '@reduxjs/toolkit';

import { CustomThunkApi } from 'app/providers/StoreProvider';

import { getTodosSelector } from '../selectors/getTodosSelector/getTodosSelector';
import { TodoEntity } from '../types/TodoEntity';

export const fetchTodos = createAsyncThunk<TodoEntity[], undefined, CustomThunkApi<string>>(
  'todos/fetchTodos',
  async (_, thunkApi) => {
    const {
      extra: { api },
      rejectWithValue,
    } = thunkApi;
    try {
      const response = await api.get<TodoEntity[]>('/todos');

      return response.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue("Can't fetch todos. Server error");
    }
  },
);

export const deleteTodo = createAsyncThunk<number, number, CustomThunkApi<string>>(
  'todos/deleteTodo',
  async (id: number, thunkApi) => {
    const {
      extra: { api },
      rejectWithValue,
    } = thunkApi;
    try {
      await api.delete(`/todos/${id}`);

      return id;
    } catch (error) {
      console.error(error);
      return rejectWithValue("Can't delete todo. Server error");
    }
  },
);

export const addTodo = createAsyncThunk<TodoEntity, TodoEntity, CustomThunkApi<string>>(
  'todos/addTodo',
  async (todo: TodoEntity, thunkApi) => {
    const {
      extra: { api },
      rejectWithValue,
    } = thunkApi;
    try {
      await api.post(`/todos/`, todo);

      return todo;
    } catch (error) {
      console.error(error);
      return rejectWithValue("Can't add todo. Server error");
    }
  },
);

export const toggleComplete = createAsyncThunk<number, number, CustomThunkApi<string>>(
  'todos/toggleComplete',
  async (id, thunkApi) => {
    const {
      getState,
      extra: { api },
      rejectWithValue,
    } = thunkApi;
    try {
      const state = getState();
      const todos = getTodosSelector(state);

      const toggledTodo = todos.find(todo => todo.id === id);

      await api.patch(`/todos/${id}`, {
        completed: !toggledTodo?.completed,
      });

      return id;
    } catch (error) {
      console.error(error);
      return rejectWithValue("Can't toggle todo. Server error");
    }
  },
);
