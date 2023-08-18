import { memo } from 'react';
import cn from 'classnames';

import { ReactComponent as CardsIcon } from 'shared/assets/icons/view-cards.svg';
import { ReactComponent as ListIcon } from 'shared/assets/icons/view-list.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

import { ArticleView } from '../../model/types/articleTypes';

import s from './ArticleViewSwitcher.module.scss';

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.SMALL,
    icon: CardsIcon,
  },
  {
    view: ArticleView.BIG,
    icon: ListIcon,
  },
];

export const ArticleViewSwitcher = memo(({ className, view, onViewClick }: ArticleViewSelectorProps) => {
  return (
    <div className={cn(s.root, className)}>
      {viewTypes.map((viewType, index) => (
        <Button key={index} theme={ButtonTheme.CLEAR} onClick={() => onViewClick(viewType.view)}>
          <viewType.icon className={cn(s.icon, { [s.selected]: view === viewType.view })} />
        </Button>
      ))}
    </div>
  );
});
