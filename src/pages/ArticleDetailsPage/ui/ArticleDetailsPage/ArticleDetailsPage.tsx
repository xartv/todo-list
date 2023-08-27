import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from 'pages/ArticleDetailsPage/model/slice/articleDetailsCommentsSlice';

import { AddNewComment } from 'features/Comments/AddNewComment';

import { ArticleDetails, getArticleDataSelector } from 'entities/Article';
import { CommentsList } from 'entities/Comment';

import { ROUTE_PATHS } from 'shared/config/routeConfig/routeConfig';
import { useAppDispatch } from 'shared/hooks/useAppHooks';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader';
import { Button } from 'shared/ui/Button';
import { Page } from 'shared/ui/Page/Page';
import { Text } from 'shared/ui/Text/Text';

import { addCommentForArticle } from '../../model/actions/addCommentForArticle';
import { getCommentsByArticleId } from '../../model/actions/getCommentsByArticleId';
import { getArticleCommentsIsLoading } from '../../model/selector/commentsSelectors';

const reducers: ReducersList = {
  articleComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  const article = useSelector(getArticleDataSelector);
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

  const handleBack = useCallback(() => {
    navigate(ROUTE_PATHS.articles);
  }, [navigate]);

  const handleSubmitNewComment = useCallback(
    (commentText: string) => {
      dispatch(addCommentForArticle(commentText));
    },
    [dispatch],
  );

  useEffect(() => {
    dispatch(getCommentsByArticleId(id));
  }, [dispatch, id]);

  if (!id) return <Page>{'СТРАНИЦА НЕ НАЙДЕНА'}</Page>;

  return (
    <DynamicReducerLoader asyncReducers={reducers} removeOnUnmount>
      <Page>
        <Button onClick={handleBack}>{t('articles.back')}</Button>
        <ArticleDetails id={id} />
        {article && (
          <>
            <Text title={t('comments.comments')} />
            <AddNewComment onSubmitComment={handleSubmitNewComment} />
            <CommentsList isLoading={commentsIsLoading} comments={comments} />
          </>
        )}
      </Page>
    </DynamicReducerLoader>
  );
};

export default memo(ArticleDetailsPage);
