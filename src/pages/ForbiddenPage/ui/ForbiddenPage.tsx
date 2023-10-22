import { memo } from 'react';
import cn from 'classnames';

import s from './ForbiddenPage.module.scss';

interface ForbiddenPageProps {
  className?: string;
}

const ForbiddenPage = ({ className }: ForbiddenPageProps) => {
  return (
    <div data-testid={'ForbiddenPage'} className={cn(s.root, className)}>
      {'ForbiddenPage'}
    </div>
  );
};

export default memo(ForbiddenPage);
