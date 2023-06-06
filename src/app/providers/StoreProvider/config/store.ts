import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from "../../../../widgets/TodoList/model/todoListSlice";

export const store = configureStore({
  reducer: {
    todoListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
