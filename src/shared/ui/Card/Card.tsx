import { HTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';

import s from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

export const Card = ({ className, children, ...otherProps }: CardProps) => {
  return (
    <div className={cn(s.root, className)} {...otherProps}>
      {children}
    </div>
  );
};
