import * as React from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input/Input';

import s from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();

  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onChangeUserName = (value: string) => {
    setUserName(value);
  };

  const onChangePasswordName = (value: string) => {
    setPassword(value);
  };

  return (
    <div className={cn(s.root, className)}>
      <Input value={userName} onChange={onChangeUserName} autofocus title={t('loginModal.imya-polzovatelya')} />
      <Input value={password} onChange={onChangePasswordName} title={t('loginModal.parol')} />
      <Button>{t('loginModal.voiti')}</Button>
    </div>
  );
};
