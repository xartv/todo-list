import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleDataSelector = (state: StateSchema) => state.article?.data;

export const getArticleErrorSelector = (state: StateSchema) => state.article?.error;

export const getArticleStatusSelector = (state: StateSchema) => state.article?.status;
