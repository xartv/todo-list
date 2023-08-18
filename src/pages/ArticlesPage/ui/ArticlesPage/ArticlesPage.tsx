import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { ArticleList, ArticleView, ArticleViewSwitcher } from 'entities/Article';

import { useAppDispatch } from 'shared/hooks/useAppHooks';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader';

import { getArticles } from '../../model/actions/getArticles';
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

  useEffect(() => {
    dispatch(getArticles());
    dispatch(dispatch(articlesPageActions.initView()));
  }, [dispatch]);

  return (
    <DynamicReducerLoader asyncReducers={reducers}>
      <div className={s.root}>
        <ArticleViewSwitcher
          onViewClick={handleOnChangeView}
          className={s.viewSwitcher}
          view={view ?? ArticleView.SMALL}
        />
        <ArticleList articles={articles} view={view} />
      </div>
    </DynamicReducerLoader>
  );
};

export default memo(ArticlesPage);
