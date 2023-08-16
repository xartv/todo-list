import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { ArticleList, ArticleView } from 'entities/Article';

import { useAppDispatch } from 'shared/hooks/useAppHooks';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader';

import { getArticles } from '../../model/actions/getArticles';
import { articlesPageReducer, getArticlesSelector } from '../../model/slices/articlesPageSlice';

import s from './ArticlesPage.module.scss';

const reducers: ReducersList = {
  articles: articlesPageReducer,
};

const ArticlesPage = () => {
  const dispatch = useAppDispatch();

  const articles = useSelector(getArticlesSelector.selectAll);

  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

  return (
    <DynamicReducerLoader asyncReducers={reducers}>
      <div className={s.root}>
        <ArticleList articles={articles} view={ArticleView.BIG} />
      </div>
    </DynamicReducerLoader>
  );
};

export default memo(ArticlesPage);
