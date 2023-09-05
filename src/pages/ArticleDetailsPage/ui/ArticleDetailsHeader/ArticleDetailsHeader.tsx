import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { ROUTE_PATHS } from 'shared/config/routeConfig/routeConfig';
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

  const handleBack = useCallback(() => {
    navigate(ROUTE_PATHS.articles);
  }, [navigate]);

  return (
    <div className={cn(s.root, className)}>
      <Button onClick={handleBack}>{t('articles.back')}</Button>
      {isAuthor && <Button onClick={handleBack}>{t('global.edit')}</Button>}
    </div>
  );
};
