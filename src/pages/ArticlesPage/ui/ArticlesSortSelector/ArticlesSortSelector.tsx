import { useMemo } from 'react';
import { DefaultTFuncReturn } from 'i18next';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { ArticleSortField } from 'entities/Article/model/types/articleTypes';

import { SortOrder } from 'shared/types/globalTypes';
import { AppSelect, Option } from 'shared/ui/AppSelect/AppSelect';

import s from './ArticlesSortSelector.module.scss';

interface ArticlesSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: Option<SortOrder, string>) => void;
  onChangeSort: (newSort: Option<ArticleSortField, string>) => void;
}

export const ArticlesSortSelector = ({
  className,
  sort,
  order,
  onChangeOrder,
  onChangeSort,
}: ArticlesSortSelectorProps) => {
  const { t } = useTranslation();

  const orderOptions = useMemo<Option<SortOrder, DefaultTFuncReturn>[]>(
    () => [
      {
        value: 'asc',
        label: t('global.asc'),
      },
      {
        value: 'desc',
        label: t('global.desc'),
      },
    ],
    [t],
  );

  const sortFieldOptions = useMemo<Option<ArticleSortField, DefaultTFuncReturn>[]>(
    () => [
      {
        value: ArticleSortField.CREATED,
        label: t('global.createdAt'),
      },
      {
        value: ArticleSortField.TITLE,
        label: t('global.title'),
      },
      {
        value: ArticleSortField.VIEWS,
        label: t('global.views'),
      },
    ],
    [t],
  );

  const sortDefaultValue = useMemo(
    () => sortFieldOptions.find(field => field.value === sort),
    [sort, sortFieldOptions],
  );

  const orderDefaultValue = useMemo(() => orderOptions.find(field => field.value === order), [order, orderOptions]);

  return (
    <div className={cn(s.root, className)}>
      <AppSelect
        title={t('articles.filters.sortBy')}
        className={s.sortSelect}
        options={sortFieldOptions}
        defaultValue={sortDefaultValue}
        onChange={onChangeSort}
      />
      <AppSelect
        title={t('articles.filters.sortDirection')}
        defaultValue={orderDefaultValue}
        className={s.sortSelect}
        options={orderOptions}
        onChange={onChangeOrder}
      />
    </div>
  );
};
