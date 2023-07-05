import { memo } from 'react';
import cn from 'classnames';

import s from './Button.module.scss';

export enum ButtonTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
  OUTLINE = 'outline',
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  DISABLED = 'disabled',
}

export enum ButtonSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  children: React.ReactNode;
  size?: ButtonSize;
}

export const Button = memo(
  ({ theme = ButtonTheme.PRIMARY, children, className, size = ButtonSize.M, ...otherProps }: ButtonProps) => {
    return (
      <button className={cn(s.root, s[theme], s[size], className)} {...otherProps}>
        {children}
      </button>
    );
  },
);
