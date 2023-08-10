import { memo } from 'react';
import cn from 'classnames';

import { Code } from 'shared/ui/Code/Code';

import { ArticleBlockCode } from '../../model/types/articleTypes';

import s from './ArticleCodeBlock.module.scss';

interface ArticleCodeBlockProps {
  className?: string;
  block: ArticleBlockCode;
}

export const ArticleCodeBlock = memo(({ className, block }: ArticleCodeBlockProps) => {
  return (
    <div className={cn(s.root, className)}>
      <Code text={block.code} />
    </div>
  );
});
