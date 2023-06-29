import { AnyAction, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { CombinedState } from 'redux';

import { LoginSchema } from 'features/AuthByUsername/model/types/loginSchema';

import { TodoListReducerSchema } from 'entities/Todo/model/types/todoListReducerSchema';
import { UserSchema } from 'entities/User/model/types/UserSchema';

export interface StateSchema {
  todos: TodoListReducerSchema;
  users: UserSchema;
  login?: LoginSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}
