import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleCommentsIsLoading = (state: StateSchema) => state.articleDetails?.comments?.isLoading;
export const getArticleCommentsError = (state: StateSchema) => state.articleDetails?.comments?.error;
