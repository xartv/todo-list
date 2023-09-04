import { HTMLAttributeAnchorTarget, memo } from 'react';
import cn from 'classnames';

import { ArticleEntity, ArticleView } from '../../model/types/articleTypes';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

import s from './ArticleList.module.scss';

interface ArticleListProps {
  className?: string;
  articles: ArticleEntity[];
  isLoading?: boolean;
  target?: HTMLAttributeAnchorTarget;
  view?: ArticleView;
}

export const ArticleList = memo(({ className, articles, view = ArticleView.SMALL, target }: ArticleListProps) => {
  const renderArticle = (article: ArticleEntity) => (
    <ArticleListItem key={article.id} article={article} view={view} target={target} />
  );

  return <div className={cn(className, s[view])}>{articles.length > 0 ? articles.map(renderArticle) : null}</div>;
});
