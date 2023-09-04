import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleecommendations = (state: StateSchema) => state.articleDetails?.recommendations;

export const getArticleecommendationsIsLoading = (state: StateSchema) => getArticleecommendations(state)?.isLoading;
export const getArticleecommendationsError = (state: StateSchema) => getArticleecommendations(state)?.error;
