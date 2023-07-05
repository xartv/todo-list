import { ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef } from 'react';
import { DefaultTFuncReturn } from 'i18next';
import cn from 'classnames';

import s from './Input.module.scss';

type InputPropsOmit = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'title'>;

interface InputProps extends InputPropsOmit {
  className?: string;
  value: string | undefined;
  title?: string | DefaultTFuncReturn;
  autofocus?: boolean;
  onChange: (value: string) => void;
}

export const Input = memo(
  ({ type = 'text', className, title, value, autofocus, onChange, ...otherProps }: InputProps) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value);
    };

    useEffect(() => {
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
