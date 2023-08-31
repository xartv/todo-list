import { useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { ArticleSortField, ArticleView, ArticleViewSwitcher } from 'entities/Article';
import { ArticleType } from 'entities/Article/model/types/articleTypes';

import { useAppDispatch } from 'shared/hooks/useAppHooks';
import { useDebounce } from 'shared/hooks/useDebounce';
import { SortOrder } from 'shared/types/globalTypes';
import { Option } from 'shared/ui/AppSelect/AppSelect';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';

import { getArticles } from '../../model/actions/getArticles';
import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageTab,
  getArticlesPageViewSelector,
} from '../../model/selectors/getArticlesPageViewSelector';
import { articlesPageActions } from '../../model/slices/articlesPageSlice';
import { ArticlesSortSelector } from '../ArticlesSortSelector/ArticlesSortSelector';

import s from './ArticlesPageFilters.module.scss';

interface ArticlesPageFiltersProps {
  className?: string;
}

export const ArticlesPageFilters = ({ className }: ArticlesPageFiltersProps) => {
  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  const view = useSelector(getArticlesPageViewSelector);
  const order = useSelector(getArticlesPageOrder);
  const sort = useSelector(getArticlesPageSort);
  const search = useSelector(getArticlesPageSearch);
  const tab = useSelector(getArticlesPageTab);

  const typeTabs = useMemo<TabItem[]>(
    () => [
      { value: ArticleType.ALL, content: t('articles.filters.all') },
      { value: ArticleType.FINANCE, content: t('articles.filters.finance') },
      { value: ArticleType.IT, content: t('articles.filters.it') },
      { value: ArticleType.POLITICS, content: t('articles.filters.politics') },
    ],
    [t],
  );

  const fetchData = useCallback(() => {
    dispatch(getArticles({ replace: true }));
  }, [dispatch]);

  const debouncedFetchData = useDebounce(fetchData, 500);

  const handleOnChangeView = useCallback(
    (articleView: ArticleView) => {
      dispatch(articlesPageActions.setView(articleView));
    },
    [dispatch],
  );

  const handleOnChangeSort = useCallback(
    (newSort: Option<ArticleSortField, string>) => {
      dispatch(articlesPageActions.setSort(newSort.value));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  const handleOnChangeOrder = useCallback(
    (newOrder: Option<SortOrder, string>) => {
      dispatch(articlesPageActions.setOrder(newOrder.value));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  const handleOnSearch = useCallback(
    (value: string) => {
      dispatch(articlesPageActions.setSearch(value));
      dispatch(articlesPageActions.setPage(1));
      debouncedFetchData();
    },
    [dispatch, debouncedFetchData],
  );

  const handleTabClick = (newTab: TabItem) => {
    dispatch(articlesPageActions.setTab(newTab.value as ArticleType));
  };

  return (
    <div className={cn(s.root, className)}>
      <div className={s.sortWrapper}>
        <ArticlesSortSelector
          sort={sort}
          order={order}
          onChangeOrder={handleOnChangeOrder}
          onChangeSort={handleOnChangeSort}
        />
        <ArticleViewSwitcher onViewClick={handleOnChangeView} view={view ?? ArticleView.SMALL} />
      </div>
      <Card className={s.search}>
        <Input placeholder={t('global.search')} value={search} onChange={handleOnSearch} />
      </Card>

      <Tabs tabs={typeTabs} value={tab} onTabClick={handleTabClick} />
    </div>
  );
};
