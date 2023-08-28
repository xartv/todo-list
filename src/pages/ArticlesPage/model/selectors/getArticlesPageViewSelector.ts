import { StateSchema } from 'app/providers/StoreProvider';

export const getArticlesPageStatus = (state: StateSchema) => state.articles?.status;
export const getArticlesPageViewSelector = (state: StateSchema) => state.articles?.view;
export const getArticlesPageLimit = (state: StateSchema) => state.articles?.limit || 9;
export const getArticlesPageNum = (state: StateSchema) => state.articles?.page || 1;
export const getArticlesPageHasMore = (state: StateSchema) => state.articles?.hasMore;
export const getArticlesPageInited = (state: StateSchema) => state.articles?._inited;
