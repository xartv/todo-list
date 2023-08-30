import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { ArticleSortField, ArticleView, ArticleViewSwitcher } from 'entities/Article';

import { useAppDispatch } from 'shared/hooks/useAppHooks';
import { SortOrder } from 'shared/types/globalTypes';
import { Option } from 'shared/ui/AppSelect/AppSelect';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';

import {
  getArticlesPageOrder,
  getArticlesPageSort,
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
  //const search = useSelector(getArticlesPageSearch);

  const handleOnChangeView = useCallback(
    (articleView: ArticleView) => {
      dispatch(articlesPageActions.setView(articleView));
    },
    [dispatch],
  );

  const handleOnChangeSort = useCallback(
    (newSort: Option<ArticleSortField, string>) => {
      dispatch(articlesPageActions.setSort(newSort.value));
    },
    [dispatch],
  );

  const handleOnChangeOrder = useCallback(
    (newOrder: Option<SortOrder, string>) => {
      dispatch(articlesPageActions.setOrder(newOrder.value));
    },
    [dispatch],
  );

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
        <Input placeholder={t('global.search')} value={undefined} />
      </Card>
    </div>
  );
};
