import { createAsyncThunk } from '@reduxjs/toolkit';

import { CustomThunkApi } from 'app/providers/StoreProvider';

import { CommentEntity } from 'entities/Comment';

export const getCommentsById = createAsyncThunk<CommentEntity[], string | undefined, CustomThunkApi<string>>(
  'articleDetails/getCommentsById',
  async (articleId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    if (!articleId) {
      return rejectWithValue('error');
    }

    try {
      const response = await extra.api.get<CommentEntity[]>('/comments', {
        params: {
          articleId,
          _expand: 'user',
        },
      });

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);
