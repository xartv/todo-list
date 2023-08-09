import { createSlice } from '@reduxjs/toolkit';

import { getArticleById } from '../actions/articleActions';
import { ArticleScheme } from '../types/articleScheme';

export const initialState: ArticleScheme = {
  data: undefined,
  status: 'init',
  error: undefined,
};

export const articleSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getArticleById.pending, state => {
      state.status = 'loading';
    });
    builder.addCase(getArticleById.fulfilled, (state, action) => {
      state.status = 'idle';
      state.data = action.payload;
    });
    builder.addCase(getArticleById.rejected, (state, action) => {
      state.status = 'reject';
      state.error = action.payload;
    });
  },
});

export const { reducer: articleReducer } = articleSlice;
