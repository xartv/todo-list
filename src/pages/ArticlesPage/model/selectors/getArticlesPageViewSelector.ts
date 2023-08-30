import { StateSchema } from 'app/providers/StoreProvider';

import { ArticleSortField } from 'entities/Article';

export const getArticlesPageState = (state: StateSchema) => state.articles;

export const getArticlesPageStatus = (state: StateSchema) => getArticlesPageState(state)?.status;

export const getArticlesPageLimit = (state: StateSchema) => getArticlesPageState(state)?.limit || 9;
export const getArticlesPageNum = (state: StateSchema) => getArticlesPageState(state)?.page || 1;
export const getArticlesPageHasMore = (state: StateSchema) => getArticlesPageState(state)?.hasMore;
export const getArticlesPageInited = (state: StateSchema) => getArticlesPageState(state)?._inited;

export const getArticlesPageViewSelector = (state: StateSchema) => getArticlesPageState(state)?.view;
export const getArticlesPageOrder = (state: StateSchema) => getArticlesPageState(state)?.order ?? 'asc';
export const getArticlesPageSort = (state: StateSchema) =>
  getArticlesPageState(state)?.sort ?? ArticleSortField.CREATED;
export const getArticlesPageSearch = (state: StateSchema) => getArticlesPageState(state)?.search ?? '';
