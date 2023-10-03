import { memo } from 'react';
import cn from 'classnames';

import s from './Overlay.module.scss';

interface OverlayProps {
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const Overlay = memo((props: OverlayProps) => {
  const { className, onClick } = props;

  return <div onClick={onClick} className={cn(s.root, className)} />;
});
