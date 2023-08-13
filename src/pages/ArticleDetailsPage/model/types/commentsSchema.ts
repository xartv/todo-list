import { EntityState } from '@reduxjs/toolkit';

import { CommentEntity } from 'entities/Comment';

export interface CommentsSchema extends EntityState<CommentEntity> {
  isLoading?: boolean;
  error?: string;
}
