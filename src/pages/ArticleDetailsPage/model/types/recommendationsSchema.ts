import { EntityState } from '@reduxjs/toolkit';

import { ArticleEntity } from 'entities/Article';

export interface RecommendationsSchema extends EntityState<ArticleEntity> {
  isLoading?: boolean;
  error?: string;
}
