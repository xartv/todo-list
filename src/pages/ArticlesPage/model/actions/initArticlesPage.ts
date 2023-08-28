import { createAsyncThunk } from '@reduxjs/toolkit';

import { CustomThunkApi } from 'app/providers/StoreProvider';

import { getArticlesPageInited } from '../selectors/getArticlesPageViewSelector';
import { articlesPageActions } from '../slices/articlesPageSlice';

import { getArticles } from './getArticles';

export const initArticlesPage = createAsyncThunk<void, void, CustomThunkApi<string>>(
  'articleDetails/initArticlesPage',
  async (_, { dispatch, getState }) => {
    const inited = getArticlesPageInited(getState());

    if (inited) return;

    dispatch(articlesPageActions.initView());
    dispatch(getArticles({ page: 1 }));
  },
);
