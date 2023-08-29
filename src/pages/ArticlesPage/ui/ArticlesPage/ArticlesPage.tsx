import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Page } from 'widgets/Page';

import { ArticleList, ArticleView, ArticleViewSwitcher } from 'entities/Article';

import { useAppDispatch } from 'shared/hooks/useAppHooks';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader';

import { getNextArticlesPage } from '../../model/actions/getNextArticlesPage';
import { initArticlesPage } from '../../model/actions/initArticlesPage';
import { getArticlesPageViewSelector } from '../../model/selectors/getArticlesPageViewSelector';
import { articlesPageActions, articlesPageReducer, getArticlesSelector } from '../../model/slices/articlesPageSlice';

import s from './ArticlesPage.module.scss';

const reducers: ReducersList = {
  articles: articlesPageReducer,
};

const ArticlesPage = () => {
  const dispatch = useAppDispatch();

  const articles = useSelector(getArticlesSelector.selectAll);
  const view = useSelector(getArticlesPageViewSelector);

  const handleOnChangeView = useCallback(
    (articleView: ArticleView) => {
      dispatch(articlesPageActions.setView(articleView));
    },
    [dispatch],
  );

  const onLoadNextPage = useCallback(() => {
    dispatch(getNextArticlesPage());
  }, [dispatch]);

  useEffect(() => {
    dispatch(initArticlesPage());
  }, [dispatch]);

  return (
    <DynamicReducerLoader asyncReducers={reducers} removeOnUnmount={false}>
      <Page className={s.root} onScrollEnd={onLoadNextPage}>
        <ArticleViewSwitcher
          onViewClick={handleOnChangeView}
          className={s.viewSwitcher}
          view={view ?? ArticleView.SMALL}
        />
        <ArticleList articles={articles} view={view} />
      </Page>
    </DynamicReducerLoader>
  );
};

export default memo(ArticlesPage);
