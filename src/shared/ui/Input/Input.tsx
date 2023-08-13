import { ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef } from 'react';
import { DefaultTFuncReturn } from 'i18next';
import cn from 'classnames';

import s from './Input.module.scss';

type InputPropsOmit = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'title' | 'placeholder'>;

interface InputProps extends InputPropsOmit {
  className?: string;
  classNames?: {
    title?: string;
    input?: string;
  };
  value: string | number | undefined;
  title?: string | DefaultTFuncReturn;
  placeholder?: string | DefaultTFuncReturn;
  autofocus?: boolean;
  readonly?: boolean;
  onChange?: (value: string) => void;
}

export const Input = memo(
  ({
    type = 'text',
    className,
    classNames = {},
    title,
    placeholder,
    value,
    autofocus,
    onChange,
    readonly,
    ...otherProps
  }: InputProps) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      onChange?.(event.target.value);
    };

    useEffect(() => {
      if (autofocus) {
        inputRef.current?.focus();
      }
    }, [autofocus]);

    return (
      <label className={cn(s.root, className)}>
        {title && (
          <span data-testid="input-title" className={cn(s.title, classNames.title)}>
            {title}
          </span>
        )}
        <input
          data-testid="input"
          ref={inputRef}
          type={type}
          value={value}
          onChange={onChangeHandler}
          readOnly={readonly}
          className={cn(s.input, classNames.input, { [s.readonly]: readonly })}
          placeholder={placeholder as string | undefined}
          {...otherProps}
        />
      </label>
    );
  },
);

Input.displayName = 'Input';
