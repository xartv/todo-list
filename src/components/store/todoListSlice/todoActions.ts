import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Todo } from "../../../types";
import { getTodosSelector } from "./todoListSelectors";
import { AppDispatch, RootState } from "../../../store/store";

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async (_, thunkApi) => {
    try {
      const response = await axios.get<Todo[]>("http://localhost:3000/todos");

      return { todos: response.data };
    } catch {
      thunkApi.rejectWithValue("Something going wrong");
    }
  }
);

export const deleteTodo = createAsyncThunk<
  Todo[],
  number,
  { dispatch: AppDispatch; state: RootState }
>("todos/deleteTodo", async (id: number, thunkApi) => {
  await axios.delete(`http://localhost:3000/todos/${id}`);

  const state = thunkApi.getState();
  const todos = getTodosSelector(state);

  const filteredTodos = todos.filter((todo) => todo.id !== id);

  return filteredTodos;
});
