import { Fragment, memo } from 'react';
import { DefaultTFuncReturn } from 'i18next';
import cn from 'classnames';

import s from './Text.module.scss';

interface TextProps {
  classNames?: {
    title?: string;
    description?: string;
  };
  theme?: TextTheme;
  title?: string | DefaultTFuncReturn;
  description?: string | DefaultTFuncReturn;
  dataTestId?: string;
}

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

export const Text = memo(
  ({ classNames, title, description, theme = TextTheme.PRIMARY, dataTestId = 'Text' }: TextProps) => {
    return (
      <Fragment>
        {title && (
          <p data-testid={`${dataTestId}.Title`} className={cn(s.title, classNames?.title, s[theme])}>
            {title}
          </p>
        )}
        {description && (
          <p data-testid={`${dataTestId}.Description`} className={cn(s.description, classNames?.description, s[theme])}>
            {description}
          </p>
        )}
      </Fragment>
    );
  },
);
