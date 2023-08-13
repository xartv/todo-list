import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { getCommentsByArticleId } from 'pages/ArticleDetailsPage/model/actions/getCommentsByArticleId';
import { getArticleCommentsIsLoading } from 'pages/ArticleDetailsPage/model/selector/commentsSelectors';
import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from 'pages/ArticleDetailsPage/model/slice/articleDetailsCommentsSlice';

import { AddNewComment } from 'features/Comments/AddNewComment';

import { ArticleDetails } from 'entities/Article';
import { CommentsList } from 'entities/Comment';

import { useAppDispatch } from 'shared/hooks/useAppHooks';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader';
import { Text } from 'shared/ui/Text/Text';

import { addCommentForArticle } from '../../model/actions/addCommentForArticle';

const reducers: ReducersList = {
  articleComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

  const handleSubmitNewComment = useCallback(
    (commentText: string) => {
      dispatch(addCommentForArticle(commentText));
    },
    [dispatch],
  );

  useEffect(() => {
    dispatch(getCommentsByArticleId(id));
  }, [dispatch, id]);

  if (!id) return null;

  return (
    <DynamicReducerLoader asyncReducers={reducers} removeOnUnmount>
      <ArticleDetails id={id} />
      <Text title={t('comments.comments')} />
      <AddNewComment onSubmitComment={handleSubmitNewComment} />
      <CommentsList isLoading={commentsIsLoading} comments={comments} />
    </DynamicReducerLoader>
  );
};

export default memo(ArticleDetailsPage);
