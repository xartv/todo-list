import { configureStore } from '@reduxjs/toolkit';

import todoListReducer from 'features/Todos/model/todoListSlice';

import { StateSchema } from './StateSchema';

export const createReduxStore = (initialState?: StateSchema) => {
  return configureStore<StateSchema>({
    reducer: {
      todoListReducer,
    },
    devTools: import.meta.env.DEV,
    preloadedState: initialState,
  });
};

const store = createReduxStore();

export type AppDispatch = typeof store.dispatch;
