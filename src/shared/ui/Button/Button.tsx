import * as React from 'react';
import cn from 'classnames';

import s from './Button.module.scss';

export enum ButtonTheme {
  PRIMARY = 'primary',
  OUTLINE = 'outline',
  CLEAR = 'clear',
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  children: React.ReactNode;
}

export const Button = ({ theme = ButtonTheme.PRIMARY, children, className, ...otherProps }: ButtonProps) => {
  return (
    <button className={cn(s.root, s[theme], className)} {...otherProps}>
      {children}
    </button>
  );
};
