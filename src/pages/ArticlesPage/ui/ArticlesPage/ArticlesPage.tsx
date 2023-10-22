import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { Page } from 'widgets/Page';

import { ArticleList } from 'entities/Article';

import { useAppDispatch } from 'shared/hooks/useAppHooks';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader';

import { getNextArticlesPage } from '../../model/actions/getNextArticlesPage';
import { initArticlesPage } from '../../model/actions/initArticlesPage';
import { getArticlesPageViewSelector } from '../../model/selectors/getArticlesPageViewSelector';
import { articlesPageReducer, getArticlesSelector } from '../../model/slices/articlesPageSlice';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';

import s from './ArticlesPage.module.scss';

const reducers: ReducersList = {
  articles: articlesPageReducer,
};

const ArticlesPage = () => {
  const dispatch = useAppDispatch();

  const articles = useSelector(getArticlesSelector.selectAll);
  const view = useSelector(getArticlesPageViewSelector);

  const [searchParams] = useSearchParams();

  const onLoadNextPage = useCallback(() => {
    dispatch(getNextArticlesPage());
  }, [dispatch]);

  useEffect(() => {
    dispatch(initArticlesPage(searchParams));
  }, [dispatch, searchParams]);

  return (
    <DynamicReducerLoader asyncReducers={reducers} removeOnUnmount={false}>
      <Page dataTestid={'ArticlesPage'} className={s.root} onScrollEnd={onLoadNextPage}>
        <ArticlesPageFilters />
        <ArticleList articles={articles} view={view} />
      </Page>
    </DynamicReducerLoader>
  );
};

export default memo(ArticlesPage);
