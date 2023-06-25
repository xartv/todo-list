import * as React from 'react';
import { InputHTMLAttributes } from 'react';
import { DefaultTFuncReturn } from 'i18next';
import cn from 'classnames';

import s from './Input.module.scss';

type InputPropsOmit = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'title'>;

interface InputProps extends InputPropsOmit {
  className?: string;
  value: string;
  title?: string | DefaultTFuncReturn;
  autofocus?: boolean;
  onChange: (value: string) => void;
}

export const Input = React.memo(
  ({ type = 'text', className, title, value, autofocus, onChange, ...otherProps }: InputProps) => {
    const inputRef = React.useRef<HTMLInputElement | null>(null);

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value);
    };

    React.useEffect(() => {
      if (autofocus) {
        inputRef.current?.focus();
      }
    }, [autofocus]);

    return (
      <label className={cn(s.root, className)}>
        {title && (
          <span data-testid="input-title" className={s.title}>
            {title}
          </span>
        )}
        <input
          data-testid="input"
          ref={inputRef}
          type={type}
          value={value}
          onChange={onChangeHandler}
          {...otherProps}
        />
      </label>
    );
  },
);

Input.displayName = 'Input';
