import { AnyAction, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { CombinedState } from 'redux';

import { CommentsSchema } from 'pages/ArticleDetailsPage';
import { ArticlesPageSchema } from 'pages/ArticlesPage';

import { PageSchema } from 'widgets/Page';

import { LoginSchema } from 'features/AuthByUsername';
import { AddNewCommentSchema } from 'features/Comments/AddNewComment';

import { ArticleScheme } from 'entities/Article';
import { ProfileSchema } from 'entities/Profile';
import { TodoListReducerSchema } from 'entities/Todo';
import { UserSchema } from 'entities/User';

import { AppDispatch } from './store';

export interface StateSchema {
  todos: TodoListReducerSchema;
  users: UserSchema;
  page: PageSchema;
  login?: LoginSchema;
  profile?: ProfileSchema;
  article?: ArticleScheme;
  articles?: ArticlesPageSchema;
  articleComments?: CommentsSchema;
  addNewComment?: AddNewCommentSchema;
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
}

export interface CustomThunkApi<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  dispatch: AppDispatch;
  state: StateSchema;
}
