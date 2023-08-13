import { createAsyncThunk } from '@reduxjs/toolkit';

import { CustomThunkApi } from 'app/providers/StoreProvider';

import { getArticleDataSelector } from 'entities/Article';
import { CommentEntity } from 'entities/Comment';
import { getAuthUserSelector } from 'entities/User';

import { getCommentsByArticleId } from './getCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<CommentEntity, string, CustomThunkApi<string>>(
  'articleDetailsPage/addCommentForArticle',
  async (text, thunkApi) => {
    const {
      extra: { api },
    } = thunkApi;
    const userData = getAuthUserSelector(thunkApi.getState());
    const article = getArticleDataSelector(thunkApi.getState());

    if (!userData || !text || !article) {
      return thunkApi.rejectWithValue('no data');
    }

    try {
      const response = await api.post<CommentEntity>(`/comments`, {
        articleId: article?.id,
        userId: userData.id,
        text,
      });

      if (!response.data) {
        throw new Error();
      }

      thunkApi.dispatch(getCommentsByArticleId(article.id));

      return response.data;
    } catch (error) {
      console.error(error);
      return thunkApi.rejectWithValue('oops-error');
    }
  },
);
