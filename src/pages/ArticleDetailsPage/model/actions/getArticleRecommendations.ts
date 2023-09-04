import { createAsyncThunk } from '@reduxjs/toolkit';

import { CustomThunkApi } from 'app/providers/StoreProvider';

import { ArticleEntity } from 'entities/Article';

export const getArticleRecommendations = createAsyncThunk<ArticleEntity[], void, CustomThunkApi<string>>(
  'articlesPage/getArticleRecommendations',
  async (_, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
      const response = await extra.api.get<ArticleEntity[]>('/articles', {
        params: {
          _limit: 4,
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
