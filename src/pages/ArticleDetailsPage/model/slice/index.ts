import { combineReducers } from '@reduxjs/toolkit';

import { ArticleDetailsSchema } from '../types';

import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';
import { articleDetailsRecommendationReducer } from './articleDetailsRecommendationSlice';

export const articleDetailsReducer = combineReducers<ArticleDetailsSchema>({
  comments: articleDetailsCommentsReducer,
  recommendations: articleDetailsRecommendationReducer,
});
