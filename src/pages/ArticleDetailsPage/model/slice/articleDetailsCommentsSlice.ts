import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StateSchema } from 'app/providers/StoreProvider';

import { CommentEntity } from 'entities/Comment';

import { getCommentsById } from '../actions/getCommentsById';
import { CommentsSchema } from '../types/commentsSchema';

const commentsAdapter = createEntityAdapter<CommentEntity>({
  selectId: comment => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  state => state.articleComments || commentsAdapter.getInitialState(),
);

const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsCommentsSlice',
  initialState: commentsAdapter.getInitialState<CommentsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getCommentsById.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(getCommentsById.fulfilled, (state, action: PayloadAction<CommentEntity[]>) => {
        state.isLoading = false;
        commentsAdapter.setAll(state, action.payload);
      })
      .addCase(getCommentsById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;
