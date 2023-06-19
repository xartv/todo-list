import * as React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import cn from 'classnames';

import s from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
  children: React.ReactNode;
}

export const AppLink = ({ className, theme = AppLinkTheme.PRIMARY, to, children, ...otherProps }: AppLinkProps) => {
  return (
    <Link to={to} className={cn(className, s[theme])} {...otherProps}>
      {children}
    </Link>
  );
};
