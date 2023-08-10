import { memo } from 'react';
import cn from 'classnames';

import { Text } from 'shared/ui/Text/Text';

import { ArticleBlockImage } from '../../model/types/articleTypes';

import s from './ArticleImageBlock.module.scss';

interface ArticleImageBlockProps {
  className?: string;
  block: ArticleBlockImage;
}

export const ArticleImageBlock = memo(({ className, block }: ArticleImageBlockProps) => {
  return (
    <div className={cn(s.ArticleImageBlockComponent, className)}>
      <img src={block.src} alt={block.title} className={s.img} />
      {block.title && <Text title={block.title} />}
    </div>
  );
});
