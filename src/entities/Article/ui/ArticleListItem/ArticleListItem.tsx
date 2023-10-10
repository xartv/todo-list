import { HTMLAttributeAnchorTarget } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { ROUTE_PATHS } from 'shared/const/router';
import { useHover } from 'shared/hooks/useHover';
import { AppLink } from 'shared/ui/AppLink';
import { Avatar, AvatarSize } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Card } from 'shared/ui/Card/Card';
import { Text } from 'shared/ui/Text/Text';

import { ArticleBlockText, ArticleBlockType, ArticleEntity, ArticleView } from '../../model/types/articleTypes';
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';

import s from './ArticleListItem.module.scss';

interface ArticleListItemProps {
  className?: string;
  article: ArticleEntity;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = ({ className, article, view, target }: ArticleListItemProps) => {
  const { t } = useTranslation();

  const [isHover, bindHover] = useHover();

  const types = <Text title={article.type?.join(', ')} classNames={{ title: s.types }} />;
  const views = <Text title={String(article.views)} classNames={{ title: s.views }} />;
  const articleAvatar = <img alt={article.title} src={article.img} className={s.img} />;

  if (view === ArticleView.BIG) {
    const textBlock = article.blocks?.find(block => block.type === ArticleBlockType.TEXT) as ArticleBlockText;

    return (
      <Card className={cn(className, s[view])}>
        <div className={s.header}>
          <Avatar size={AvatarSize.S} src={article.user.avatar} />
          <Text title={article.user.username} classNames={{ title: s.username }} />
          <Text title={article.createdAt} classNames={{ title: s.date }} />
        </div>
        <Text title={article.title} classNames={{ title: s.title }} />
        {types}
        {articleAvatar}
        {textBlock && <ArticleTextBlock block={textBlock} className={s.textBlock} />}
        <div className={s.footer}>
          <AppLink to={`${ROUTE_PATHS.article_details}${article.id}`}>
            <Button theme={ButtonTheme.OUTLINE}>{t('articles.readMore')}</Button>
          </AppLink>
          {views}
        </div>
      </Card>
    );
  }

  return (
    <AppLink
      target={target}
      to={`${ROUTE_PATHS.article_details}${article.id}`}
      className={cn(s.root, className, s[view], { [s.hovered]: isHover })}
      {...bindHover}
    >
      <Card>
        <div className={s.imageWrapper}>
          {articleAvatar}
          <Text title={article.createdAt} classNames={{ title: s.date }} />
        </div>

        <div className={s.infoWrapper}>
          {types}
          {views}
        </div>

        <Text title={article.title} classNames={{ title: s.title }} />
      </Card>
    </AppLink>
  );
};
