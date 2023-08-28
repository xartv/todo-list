import { createAsyncThunk } from '@reduxjs/toolkit';

import { CustomThunkApi } from 'app/providers/StoreProvider';

import { ArticleEntity } from 'entities/Article';

import { getArticlesPageLimit } from '../selectors/getArticlesPageViewSelector';

interface getArticlesProps {
  page?: number;
}

export const getArticles = createAsyncThunk<ArticleEntity[], getArticlesProps, CustomThunkApi<string>>(
  'articlesPage/getArticles',
  async ({ page = 1 }, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    const limit = getArticlesPageLimit(thunkApi.getState());

    try {
      const response = await extra.api.get<ArticleEntity[]>('/articles', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page,
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
