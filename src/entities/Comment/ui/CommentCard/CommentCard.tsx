import { memo } from 'react';
import cn from 'classnames';

import { ROUTE_PATHS } from 'shared/const/router';
import { AppLink } from 'shared/ui/AppLink';
import { Avatar, AvatarSize } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';

import { CommentEntity } from '../../model/types/comment';

import s from './CommentCard.module.scss';

interface CommentCardProps {
  className?: string;
  comment: CommentEntity;
  isLoading?: boolean;
}

export const CommentCard = memo(({ className, comment, isLoading }: CommentCardProps) => {
  if (isLoading) {
    return <div className={cn(s.CommentCard, {}, [className])}>{'LOADING'}</div>;
  }

  return (
    <div className={cn(s.CommentCard, {}, [className])}>
      <AppLink to={`${ROUTE_PATHS.profile}${comment.user.id}`} className={s.header}>
        {comment.user.avatar ? <Avatar size={AvatarSize.S} src={comment.user.avatar} /> : null}
        <Text title={comment.user.username} />
      </AppLink>
      <Text title={comment.text} />
    </div>
  );
});
