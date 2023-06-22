import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { AppDispatch } from 'app/providers/StoreProvider/config/store';

import { Todo } from 'entities/Todo/model/types';

import { getTodosSelector } from './todoListSelectors';

export const fetchTodos = createAsyncThunk<Todo[], undefined, { rejectValue: string }>(
  'todos/fetchTodos',
  async (_, thunkApi) => {
    try {
      const response = await axios.get<Todo[]>('http://localhost:3000/todos');

      return response.data;
    } catch (error) {
      console.error(error);
      return thunkApi.rejectWithValue("Can't fetch todos. Server error");
    }
  },
);

export const deleteTodo = createAsyncThunk<number, number, { state: StateSchema; rejectValue: string }>(
  'todos/deleteTodo',
  async (id: number, thunkApi) => {
    try {
      await axios.delete(`http://localhost:3000/todos/${id}`);

      return id;
    } catch (error) {
      console.error(error);
      return thunkApi.rejectWithValue("Can't delete todo. Server error");
    }
  },
);

export const addTodo = createAsyncThunk<Todo, Todo, { dispatch: AppDispatch; state: StateSchema; rejectValue: string }>(
  'todos/addTodo',
  async (todo: Todo, thunkApi) => {
    try {
      await axios.post(`http://localhost:3000/todos/`, todo);

      return todo;
    } catch (error) {
      console.error(error);
      return thunkApi.rejectWithValue("Can't add todo. Server error");
    }
  },
);

export const toggleComplete = createAsyncThunk<number, number, { state: StateSchema; rejectValue: string }>(
  'todos/toggleComplete',
  async (id, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const todos = getTodosSelector(state);

      const toggledTodo = todos.find(todo => todo.id === id);

      await axios.patch(`http://localhost:3000/todos/${id}`, {
        completed: !toggledTodo?.completed,
      });

      return id;
    } catch (error) {
      console.error(error);
      return thunkApi.rejectWithValue("Can't toggle todo. Server error");
    }
  },
);
