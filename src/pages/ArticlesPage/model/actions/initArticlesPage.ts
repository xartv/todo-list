import { createAsyncThunk } from '@reduxjs/toolkit';

import { CustomThunkApi } from 'app/providers/StoreProvider';

import { ArticleSortField } from 'entities/Article';

import { SortOrder } from 'shared/types/globalTypes';

import { getArticlesPageInited } from '../selectors/getArticlesPageViewSelector';
import { articlesPageActions } from '../slices/articlesPageSlice';

import { getArticles } from './getArticles';

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, CustomThunkApi<string>>(
  'articleDetails/initArticlesPage',
  async (searchParams, { dispatch, getState }) => {
    const inited = getArticlesPageInited(getState());

    if (inited) return;

    const orderFromUrl = searchParams.get('order');
    const sortFromUrl = searchParams.get('sort');
    const searchFromUrl = searchParams.get('search');

    dispatch(articlesPageActions.initView());
    if (orderFromUrl) dispatch(articlesPageActions.setOrder(orderFromUrl as SortOrder));
    if (sortFromUrl) dispatch(articlesPageActions.setSort(sortFromUrl as ArticleSortField));
    if (searchFromUrl) dispatch(articlesPageActions.setSearch(searchFromUrl));

    dispatch(getArticles({}));
  },
);
