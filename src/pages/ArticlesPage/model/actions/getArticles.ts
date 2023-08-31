import { createAsyncThunk } from '@reduxjs/toolkit';

import { CustomThunkApi } from 'app/providers/StoreProvider';

import { ArticleEntity } from 'entities/Article';

import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';

import {
  getArticlesPageLimit,
  getArticlesPageNum,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
} from '../selectors/getArticlesPageViewSelector';

interface GetArticlesProps {
  replace?: boolean;
}

export const getArticles = createAsyncThunk<ArticleEntity[], GetArticlesProps, CustomThunkApi<string>>(
  'articlesPage/getArticles',
  async (_, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    const limit = getArticlesPageLimit(thunkApi.getState());
    const order = getArticlesPageOrder(thunkApi.getState());
    const sort = getArticlesPageSort(thunkApi.getState());
    const search = getArticlesPageSearch(thunkApi.getState());
    const page = getArticlesPageNum(thunkApi.getState());

    try {
      addQueryParams({
        sort,
        search,
        order,
      });
      const response = await extra.api.get<ArticleEntity[]>('/articles', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page,
          _sort: sort,
          _order: order,
          q: search,
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
