import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Page } from 'widgets/Page';

import { AddNewComment } from 'features/Comments/AddNewComment';

import { ArticleDetails, ArticleList, getArticleDataSelector } from 'entities/Article';
import { CommentsList } from 'entities/Comment';

import { ROUTE_PATHS } from 'shared/config/routeConfig/routeConfig';
import { useAppDispatch } from 'shared/hooks/useAppHooks';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader';
import { Button } from 'shared/ui/Button';
import { Text } from 'shared/ui/Text/Text';

import { addCommentForArticle } from '../../model/actions/addCommentForArticle';
import { getArticleRecommendations } from '../../model/actions/getArticleRecommendations';
import { getCommentsByArticleId } from '../../model/actions/getCommentsByArticleId';
import { getArticleCommentsIsLoading } from '../../model/selector/commentsSelectors';
import { articleDetailsReducer } from '../../model/slice';
import { getArticleComments } from '../../model/slice/articleDetailsCommentsSlice';
import { getArticleRecommendationsSelector } from '../../model/slice/articleDetailsRecommendationSlice';

import s from './ArticleDetailsPage.module.scss';

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

const ArticleDetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  const article = useSelector(getArticleDataSelector);
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const recommendations = useSelector(getArticleRecommendationsSelector.selectAll);

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
    dispatch(getArticleRecommendations());
  }, [dispatch, id]);

  if (!id) return <Page>{'СТРАНИЦА НЕ НАЙДЕНА'}</Page>;

  return (
    <DynamicReducerLoader asyncReducers={reducers} removeOnUnmount>
      <Page className={s.root}>
        <Button onClick={handleBack}>{t('articles.back')}</Button>
        <ArticleDetails id={id} />
        {article && (
          <>
            <Text title={t('articles.recommend')} classNames={{ title: s.recommendsTitle }} />
            <ArticleList articles={recommendations} className={s.recommendationWrapper} target="_blank" />
            <Text title={t('comments.comments')} classNames={{ title: s.commentsTitle }} />
            <AddNewComment onSubmitComment={handleSubmitNewComment} />
            <CommentsList isLoading={commentsIsLoading} comments={comments} />
          </>
        )}
      </Page>
    </DynamicReducerLoader>
  );
};

export default memo(ArticleDetailsPage);
