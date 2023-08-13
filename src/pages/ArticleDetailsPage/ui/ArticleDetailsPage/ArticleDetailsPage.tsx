import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getCommentsById } from 'pages/ArticleDetailsPage/model/actions/getCommentsById';
import { getArticleCommentsIsLoading } from 'pages/ArticleDetailsPage/model/selector/commentsSelectors';
import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from 'pages/ArticleDetailsPage/model/slice/articleDetailsCommentsSlice';

import { ArticleDetails } from 'entities/Article';
import { CommentsList } from 'entities/Comment';

import { useAppDispatch } from 'shared/hooks/useAppHooks';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader';

const reducers: ReducersList = {
  articleComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

  useEffect(() => {
    dispatch(getCommentsById(id));
  }, [dispatch, id]);

  if (!id) return null;

  return (
    <DynamicReducerLoader asyncReducers={reducers} removeOnUnmount>
      <ArticleDetails id={id} />
      <CommentsList isLoading={commentsIsLoading} comments={comments} />
    </DynamicReducerLoader>
  );
};

export default memo(ArticleDetailsPage);
