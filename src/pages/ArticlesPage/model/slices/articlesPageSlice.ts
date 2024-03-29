import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StateSchema } from 'app/providers/StoreProvider';

import { ArticleEntity, ArticleSortField, ArticleType, ArticleView } from 'entities/Article';

import { LOCAL_STORAGE_ARTICLES_VIEW_KEY } from 'shared/const/globalConsts';
import { SortOrder } from 'shared/types/globalTypes';

import { getArticles } from '../actions/getArticles';
import { ArticlesPageSchema } from '../types/articlesPage';

const articlesAdapter = createEntityAdapter<ArticleEntity>({
  selectId: article => article.id,
});

export const getArticlesSelector = articlesAdapter.getSelectors<StateSchema>(
  state => state.articles || articlesAdapter.getInitialState(),
);

const articlesPageSlice = createSlice({
  name: 'articlesPageSlice',
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
    status: 'init',
    error: undefined,
    ids: [],
    entities: {},
    view: ArticleView.SMALL,
    page: 1,
    hasMore: true,
    limit: 9,
    order: 'asc',
    search: '',
    sort: ArticleSortField.CREATED,
    tab: ArticleType.ALL,
    _inited: false,
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(LOCAL_STORAGE_ARTICLES_VIEW_KEY, action.payload);
    },
    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setSort: (state, action: PayloadAction<ArticleSortField>) => {
      state.sort = action.payload;
    },
    initView: state => {
      const storageView = localStorage.getItem(LOCAL_STORAGE_ARTICLES_VIEW_KEY) as ArticleView;

      if (storageView) {
        state.view = storageView;
      }

      state.limit = storageView === ArticleView.BIG ? 4 : 9;
      state._inited = true;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setTab: (state, action: PayloadAction<ArticleType>) => {
      state.tab = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(getArticles.pending, (state, action) => {
        state.status = 'loading';
        if (action.meta.arg.replace) {
          articlesAdapter.removeAll(state);
        }
      })
      .addCase(getArticles.fulfilled, (state, action) => {
        state.status = 'idle';
        state.hasMore = action.payload.length >= state.limit;

        if (action.meta.arg.replace) {
          articlesAdapter.setAll(state, action.payload);
        } else {
          articlesAdapter.addMany(state, action.payload);
        }
      })
      .addCase(getArticles.rejected, (state, action) => {
        state.status = 'reject';
        state.error = action.payload;
      });
  },
});

export const { actions: articlesPageActions, reducer: articlesPageReducer } = articlesPageSlice;
