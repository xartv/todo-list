import cn from 'classnames';

import { useHover } from 'shared/hooks/useHover';
import { Avatar, AvatarSize } from 'shared/ui/Avatar/Avatar';
import { Card } from 'shared/ui/Card/Card';
import { Text } from 'shared/ui/Text/Text';

import { ArticleEntity, ArticleView } from '../../model/types/articleTypes';

import s from './ArticleListItem.module.scss';

interface ArticleListItemProps {
  className?: string;
  article: ArticleEntity;
  view: ArticleView;
}

export const ArticleListItem = ({ className, article, view }: ArticleListItemProps) => {
  const [isHover, bindHover] = useHover();

  if (view === ArticleView.BIG) {
    return (
      <Card className={cn(className, s[view])}>
        <div className={s.header}>
          <Avatar size={AvatarSize.S} src={article.user.avatar} />
          <Text title={article.user.username} classNames={{ title: s.username }} />
          <Text title={article.createdAt} classNames={{ title: s.date }} />
        </div>
      </Card>
    );
  }

  return (
    <div className={cn(s.root, className, s[view], { [s.hovered]: isHover })} {...bindHover}>
      <Card>
        <div className={s.imageWrapper}>
          <img alt={article.title} src={article.img} className={s.img} />
          <Text title={article.createdAt} classNames={{ title: s.date }} />
        </div>

        <div className={s.infoWrapper}>
          <Text title={article.type.join(', ')} classNames={{ title: s.types }} />
          <Text title={String(article.views)} classNames={{ title: s.views }} />
        </div>

        <Text title={article.title} classNames={{ title: s.title }} />
      </Card>
    </div>
  );
};
