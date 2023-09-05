import { createSelector } from '@reduxjs/toolkit';

import { getArticleDataSelector } from 'entities/Article';
import { getAuthUserSelector } from 'entities/User';

export const isAuthorSelector = createSelector(getAuthUserSelector, getArticleDataSelector, (userData, article) => {
  return userData?.id === article?.user.id;
});
