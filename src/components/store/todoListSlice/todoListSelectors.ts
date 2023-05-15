import { RootState } from "../../../store/store";

export const getTodosSelector = (state: RootState) => state.todoListReducer.todos;
