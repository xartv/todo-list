import { DefaultTFuncReturn } from 'i18next';
import StateManagedSelect from 'react-select';

import { ECountries } from 'entities/Country';

import { AppSelect, Option } from 'shared/ui/AppSelect/AppSelect';

interface CountrySelectProps extends Omit<StateManagedSelect, 'isDisabled'> {
  title?: string | DefaultTFuncReturn;
  className?: string;
  classNames?: {
    title?: string;
  };
  isDisabled?: boolean;
  defaultValue?: Option<ECountries | undefined, ECountries | undefined>;
  onChange?: (option: Option<ECountries, ECountries>) => void;
}

const options = [
  { value: ECountries.RUSSIA, label: ECountries.RUSSIA },
  { value: ECountries.URKAINE, label: ECountries.URKAINE },
  { value: ECountries.KAZAKHSTAN, label: ECountries.KAZAKHSTAN },
  { value: ECountries.BELARUS, label: ECountries.BELARUS },
];

export const CountrySelect = ({ ...props }: CountrySelectProps) => {
  return <AppSelect options={options} {...props} />;
};
