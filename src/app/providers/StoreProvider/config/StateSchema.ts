import { NavigateFunction } from 'react-router-dom';
import { AnyAction, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { CombinedState } from 'redux';

import { CommentsSchema } from 'pages/ArticleDetailsPage/model/types/commentsSchema';

import { LoginSchema } from 'features/AuthByUsername/model/types/loginSchema';

import { ArticleScheme } from 'entities/Article';
import { ProfileSchema } from 'entities/Profile';
import { TodoListReducerSchema } from 'entities/Todo/model/types/todoListReducerSchema';
import { UserSchema } from 'entities/User/model/types/UserSchema';

import { AppDispatch } from './store';

export interface StateSchema {
  todos: TodoListReducerSchema;
  users: UserSchema;
  login?: LoginSchema;
  profile?: ProfileSchema;
  article?: ArticleScheme;
  articleComments?: CommentsSchema;
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

export interface ThunkExtraArg {
  api: AxiosInstance;
  navigate?: NavigateFunction;
}

export interface CustomThunkApi<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  dispatch: AppDispatch;
  state: StateSchema;
}
