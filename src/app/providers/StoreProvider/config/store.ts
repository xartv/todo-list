import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from "src/features/Todos/model/todoListSlice";

export const store = configureStore({
  reducer: {
    todoListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
