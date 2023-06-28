import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';

import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

import { todoListReducer } from 'entities/Todo/model/slice/todoListSlice';
import { userReducer } from 'entities/User/model/slice/userSlice';

import { StateSchema } from './StateSchema';

export const createReduxStore = (initialState?: StateSchema) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    todos: todoListReducer,
    users: userReducer,
    login: loginReducer,
  };

  return configureStore<StateSchema>({
    reducer: rootReducers,
    devTools: import.meta.env.DEV,
    preloadedState: initialState,
  });
};

const store = createReduxStore();

export type AppDispatch = typeof store.dispatch;
