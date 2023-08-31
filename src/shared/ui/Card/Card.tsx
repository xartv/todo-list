import { HTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';

import s from './Card.module.scss';

export enum CardTheme {
  NORMAL = 'normal',
  OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  theme?: CardTheme;
}

export const Card = ({ className, children, theme = CardTheme.NORMAL, ...otherProps }: CardProps) => {
  return (
    <div className={cn(s.root, className, s[theme])} {...otherProps}>
      {children}
    </div>
  );
};
