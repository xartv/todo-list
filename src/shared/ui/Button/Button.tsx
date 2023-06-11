import * as React from 'react';
import cn from 'classnames';

import s from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  children: React.ReactNode;
}

export const Button = ({ theme = ButtonTheme.CLEAR, children, className, ...otherProps }: ButtonProps) => {
  return (
    <button className={cn(s.button, s[theme], className)} {...otherProps}>
      {children}
    </button>
  );
};
