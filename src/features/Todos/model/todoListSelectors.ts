import { RootState } from "src/app/providers/StoreProvider/config/store";

export const getTodosSelector = (state: RootState) =>
  state.todoListReducer.todos;
