import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { getArticleDataSelector } from 'entities/Article';

import { getRouteArticleEdit, getRouteArticles } from 'shared/const/router';
import { Button } from 'shared/ui/Button';

import { isAuthorSelector } from '../../model/selector/articleSelectors';

import s from './ArticleDetailsHeader.module.scss';

interface ArticleDetailsHeaderProps {
  className?: string;
}

export const ArticleDetailsHeader = ({ className }: ArticleDetailsHeaderProps) => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  const isAuthor = useSelector(isAuthorSelector);
  const article = useSelector(getArticleDataSelector);

  const handleBack = useCallback(() => {
    navigate(getRouteArticles());
  }, [navigate]);

  const handleEdit = useCallback(() => {
    if (article) navigate(getRouteArticleEdit(article.id));
  }, [navigate, article]);

  return (
    <div className={cn(s.root, className)}>
      <Button onClick={handleBack}>{t('articles.back')}</Button>
      {isAuthor && <Button onClick={handleEdit}>{t('global.edit')}</Button>}
    </div>
  );
};
