import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Todo } from "../../../types";
import { getTodosSelector } from "./todoListSelectors";
import { AppDispatch, RootState } from "../../../store/store";

export const fetchTodos = createAsyncThunk<
  Todo[],
  undefined,
  { rejectValue: string }
>("todos/fetchTodos", async (_, thunkApi) => {
  try {
    const response = await axios.get<Todo[]>("http://localhost:3000/todos");

    return response.data;
  } catch (e) {
    console.error(e);
    return thunkApi.rejectWithValue("Something going wrong");
  }
});

export const deleteTodo = createAsyncThunk<
  number,
  number,
  { state: RootState; rejectValue: string }
>("todos/deleteTodo", async (id: number, thunkApi) => {
  try {
    await axios.delete(`http://localhost:3000/todos/${id}`);

    return id;
  } catch (e) {
    console.error(e);
    return thunkApi.rejectWithValue("Oops");
  }
});

export const addTodo = createAsyncThunk<
  Todo,
  Todo,
  { dispatch: AppDispatch; state: RootState; rejectValue: string }
>("todos/addTodo", async (todo: Todo, thunkApi) => {
  try {
    await axios.post(`http://localhost:3000/todos/`, todo);

    return todo;
  } catch (e) {
    console.error(e);
    return thunkApi.rejectWithValue("Oops");
  }
});

export const toggleComplete = createAsyncThunk<
  number,
  number,
  { state: RootState; rejectValue: string }
>("todos/toggleComplete", async (id, thunkApi) => {
  try {
    const state = thunkApi.getState();
    const todos = getTodosSelector(state);

    const toggledTodo = todos.find(todo => todo.id === id);

    await axios.patch(`http://localhost:3000/todos/${id}`, {completed: !toggledTodo?.completed});

    return id;
  } catch (e) {
    console.error(e);
    return thunkApi.rejectWithValue("Oops");
  }
});
