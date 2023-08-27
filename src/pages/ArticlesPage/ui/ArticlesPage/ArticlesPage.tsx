import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { ArticleList, ArticleView, ArticleViewSwitcher } from 'entities/Article';

import { useAppDispatch } from 'shared/hooks/useAppHooks';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader';
import { Page } from 'shared/ui/Page/Page';

import { getArticles } from '../../model/actions/getArticles';
import { getNextArticlesPage } from '../../model/actions/getNextArticlesPage';
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
    dispatch(dispatch(articlesPageActions.initView()));

    dispatch(getArticles({ page: 1 }));
  }, [dispatch]);

  return (
    <DynamicReducerLoader asyncReducers={reducers}>
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
