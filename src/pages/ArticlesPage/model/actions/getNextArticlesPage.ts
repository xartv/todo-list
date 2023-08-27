import { createAsyncThunk } from '@reduxjs/toolkit';

import { CustomThunkApi } from 'app/providers/StoreProvider';

import {
  getArticlesPageHasMore,
  getArticlesPageNum,
  getArticlesPageStatus,
} from '../selectors/getArticlesPageViewSelector';
import { articlesPageActions } from '../slices/articlesPageSlice';

import { getArticles } from './getArticles';

export const getNextArticlesPage = createAsyncThunk<void, void, CustomThunkApi<string>>(
  'articleDetails/getNextArticlesPage',
  async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi;

    const hasMore = getArticlesPageHasMore(getState());
    const page = getArticlesPageNum(getState());
    const isLoading = getArticlesPageStatus(getState()) === 'loading';

    if (hasMore && !isLoading) {
      dispatch(articlesPageActions.setPage(page + 1));
      dispatch(
        getArticles({
          page: page + 1,
        }),
      );
    }
  },
);
