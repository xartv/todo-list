import { EntityState } from '@reduxjs/toolkit';

import { ArticleEntity, ArticleSortField, ArticleView } from 'entities/Article';

import { RequestStatuses, SortOrder } from 'shared/types/globalTypes';

export interface ArticlesPageSchema extends EntityState<ArticleEntity> {
  status?: RequestStatuses;
  error?: string;

  // pagination
  page: number;
  limit: number;
  hasMore: boolean;

  // filters
  view: ArticleView;
  order: SortOrder;
  sort: ArticleSortField;
  search: string;

  _inited: boolean;
}
