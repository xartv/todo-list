import { createAsyncThunk } from '@reduxjs/toolkit';

import { CustomThunkApi } from 'app/providers/StoreProvider';

import { ArticleEntity } from '../types/articleTypes';

export const getArticleById = createAsyncThunk<ArticleEntity, string, CustomThunkApi<string>>(
  'article/getArticleById',
  async (articleId, thunkApi) => {
    const {
      extra: { api },
      rejectWithValue,
    } = thunkApi;
    try {
      const response = await api.get<ArticleEntity>(`/articles/${articleId}`, {
        params: {
          _expand: 'user',
        },
      });

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue("Can't fetch article. Server error");
    }
  },
);
