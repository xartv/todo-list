import { Fragment } from 'react';
import { DefaultTFuncReturn } from 'i18next';
import cn from 'classnames';

import s from './Text.module.scss';

interface TextProps {
  className?: string;
  theme?: TextTheme;
  title?: string | DefaultTFuncReturn;
  description?: string;
}

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

export const Text = ({ className, title, description, theme = TextTheme.PRIMARY }: TextProps) => {
  return (
    <Fragment>
      {title && <p className={cn(s.title, className, s[theme])}>{title}</p>}
      {description && <p className={cn(s.description, className, s[theme])}>{description}</p>}
    </Fragment>
  );
};
