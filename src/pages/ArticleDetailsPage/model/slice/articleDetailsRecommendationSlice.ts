import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { StateSchema } from 'app/providers/StoreProvider';

import { ArticleEntity } from 'entities/Article';

import { getArticleRecommendations } from '../actions/getArticleRecommendations';
import { RecommendationsSchema } from '../types/recommendationsSchema';

const recommendationsAdapter = createEntityAdapter<ArticleEntity>({
  selectId: article => article.id,
});

export const getArticleRecommendationsSelector = recommendationsAdapter.getSelectors<StateSchema>(
  state => state.articleDetails?.recommendations || recommendationsAdapter.getInitialState(),
);

const articleDetailsRecommendationSlice = createSlice({
  name: 'articleDetailsRecommendationSlice',
  initialState: recommendationsAdapter.getInitialState<RecommendationsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getArticleRecommendations.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(getArticleRecommendations.fulfilled, (state, action) => {
        state.isLoading = false;
        recommendationsAdapter.setAll(state, action.payload);
      })
      .addCase(getArticleRecommendations.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articleDetailsRecommendationReducer } = articleDetailsRecommendationSlice;
