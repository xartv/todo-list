import { memo } from 'react';
import cn from 'classnames';

import { Text } from 'shared/ui/Text/Text';

import { ArticleBlockText } from '../../model/types/articleTypes';

import s from './ArticleTextBlock.module.scss';

interface ArticleTextBlockProps {
  className?: string;
  block: ArticleBlockText;
}

export const ArticleTextBlock = memo(({ className, block }: ArticleTextBlockProps) => {
  return (
    <div className={cn(s.ArticleTextBlockComponent, className)}>
      {block.title && <Text title={block.title} />}
      {block.paragraphs.map(paragraph => (
        <Text key={paragraph} title={paragraph} />
      ))}
    </div>
  );
});
