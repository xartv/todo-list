import { memo } from 'react';
import cn from 'classnames';

import { CommentEntity } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';

import s from './CommentsList.module.scss';

interface CommentListProps {
  className?: string;
  comments?: CommentEntity[];
  isLoading?: boolean;
}

export const CommentsList = memo(({ className, isLoading, comments }: CommentListProps) => {
  return (
    <div className={cn(s.CommentList, {}, [className])}>
      {comments?.length
        ? comments.map(comment => (
            <CommentCard key={comment.id} isLoading={isLoading} className={s.comment} comment={comment} />
          ))
        : 'Комментарии отсутствуют'}
    </div>
  );
});
