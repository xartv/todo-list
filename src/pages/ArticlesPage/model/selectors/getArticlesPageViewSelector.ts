import { StateSchema } from 'app/providers/StoreProvider';

export const getArticlesPageViewSelector = (state: StateSchema) => state.articles?.view;
