import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';

import { todoListReducer } from 'entities/Todo/model/slice/todoListSlice';
import { userReducer } from 'entities/User/model/slice/userSlice';

import { createReducerManager } from './reducerManager';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    todos: todoListReducer,
    users: userReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: import.meta.env.DEV,
    preloadedState: initialState,
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

const store = createReduxStore();

export type AppDispatch = typeof store.dispatch;
