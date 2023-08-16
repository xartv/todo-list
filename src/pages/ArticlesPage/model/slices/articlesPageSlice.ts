import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { StateSchema } from 'app/providers/StoreProvider';

import { ArticleEntity, ArticleView } from 'entities/Article';

import { getArticles } from '../actions/getArticles';
import { ArticlesPageSchema } from '../types/articlesPage';

const articlesAdapter = createEntityAdapter<ArticleEntity>({
  selectId: article => article.id,
});

export const getArticlesSelector = articlesAdapter.getSelectors<StateSchema>(
  state => state.articles || articlesAdapter.getInitialState(),
);

const articlesPageSlice = createSlice({
  name: 'articlesPageSlice',
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
    status: 'init',
    error: undefined,
    ids: [],
    entities: {},
    view: ArticleView.SMALL,
  }),
  reducers: {
    setView: (state, action) => {
      state.view = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(getArticles.pending, state => {
        state.status = 'loading';
      })
      .addCase(getArticles.fulfilled, (state, action) => {
        state.status = 'idle';
        articlesAdapter.setAll(state, action.payload);
      })
      .addCase(getArticles.rejected, (state, action) => {
        state.status = 'reject';
        state.error = action.payload;
      });
  },
});

export const { actions: articlesPageActions, reducer: articlesPageReducer } = articlesPageSlice;
