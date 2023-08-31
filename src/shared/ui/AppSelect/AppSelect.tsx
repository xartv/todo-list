// @ts-nocheck
import { DefaultTFuncReturn } from 'i18next';
import Select, { Props } from 'react-select';
import cn from 'classnames';

import s from './AppSelect.module.scss';

export interface Option<Value, Label> {
  value: Value;
  label: Label;
}

interface AppSelectProps extends Omit<Props, 'isDisabled' | 'classNames' | 'onChange'> {
  title?: string | DefaultTFuncReturn;
  className?: string;
  classNames?: {
    title?: string;
  };
  //eslint-disable-next-line
  options?: Option<any, any>[];

  isDisabled?: boolean;

  //eslint-disable-next-line
  onChange?: (newValue: Option<any, any>) => void;
}

// TODO: Написать свой собственный Select
export const AppSelect = ({
  title,
  className,
  classNames = {},
  options,
  isDisabled,
  ...otherProps
}: AppSelectProps) => (
  <div className={cn(s.root, className)}>
    {title && <span className={cn(s.title, classNames.title)}>{title}</span>}

    <Select
      options={options}
      isDisabled={isDisabled}
      classNames={{
        control: () => cn(s.control, { [s.activeControl]: !isDisabled }),
        dropdownIndicator: () => cn(s.dropdownIndicator, { [s.activeDropdownIndicator]: !isDisabled }),
        option: () => s.option,
        menu: () => s.menu,
        placeholder: () => cn(s.placeholder, { [s.activePlaceholder]: !isDisabled }),
        singleValue: () => cn(s.singleValue, { [s.activeSingleValue]: !isDisabled }),
      }}
      {...otherProps}
    />
  </div>
);
