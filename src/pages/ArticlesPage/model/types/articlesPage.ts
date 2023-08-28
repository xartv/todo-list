import { EntityState } from '@reduxjs/toolkit';

import { ArticleEntity, ArticleView } from 'entities/Article';

import { RequestStatuses } from 'shared/types/globalTypes';

export interface ArticlesPageSchema extends EntityState<ArticleEntity> {
  status?: RequestStatuses;
  error?: string;
  view: ArticleView;

  // pagination
  page: number;
  limit?: number;
  hasMore: boolean;

  _inited: boolean;
}
