import { DefaultTFuncReturn } from 'i18next';
import StateManagedSelect from 'react-select';

import { ECurrency } from 'entities/Currency';

import { AppSelect, Option } from 'shared/ui/AppSelect/AppSelect';

interface CurrencySelectProps extends Omit<StateManagedSelect, 'isDisabled'> {
  title?: string | DefaultTFuncReturn;
  className?: string;
  classNames?: {
    title?: string;
  };
  isDisabled?: boolean;
  defaultValue?: Option<ECurrency | undefined, ECurrency | undefined>;
  onChange?: (option: Option<ECurrency, ECurrency>) => void;
}

const options = [
  { value: ECurrency.RUB, label: ECurrency.RUB },
  { value: ECurrency.UAH, label: ECurrency.UAH },
  { value: ECurrency.KZT, label: ECurrency.KZT },
  { value: ECurrency.BYN, label: ECurrency.BYN },
];

export const CurrencySelect = ({ ...props }: CurrencySelectProps) => {
  return <AppSelect options={options} {...props} />;
};
