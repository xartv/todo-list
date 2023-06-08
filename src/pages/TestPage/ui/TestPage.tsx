import Select, { OptionProps, components } from 'react-select';

import s from './TestPage.module.scss';

const MOCK_USERS = [
  {
    name: 'Наталья Ивановна Никольская',
    job_position: 'Менеджер',
    isDisabled: false,
  },
  {
    name: 'Николай Иванович Ефимов',
    job_position: 'Project Менеджер',
    isDisabled: false,
  },
  {
    name: 'Кристина Сергеевна Иванова',
    job_position: 'Project Менеджер',
    isDisabled: false,
  },
  {
    name: 'Борис Иванович Иванов',
    job_position: 'Дизайнер',
    isDisabled: true,
  },
];

const usersOptions = MOCK_USERS.map(user => ({
  label: user.name,
  value: user.name,
  isDisabled: user.isDisabled,
}));

const Option = ({ children, ...props }: OptionProps) => {
  const additionalInfo = props.isDisabled ? 'DISABLED' : null;

  return (
    <components.Option {...props}>
      {children} {additionalInfo}
    </components.Option>
  );
};

export const TestPage = () => {
  return <Select options={usersOptions} className={s.dropdown} components={{ Option }} />;
};
