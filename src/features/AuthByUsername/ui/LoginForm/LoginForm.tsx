import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { loginByUsername } from 'features/AuthByUsername/model/actions/loginByUsername';
import { getLoginStatusSelector } from 'features/AuthByUsername/model/selector/getLoginStatusSelector/getLoginStatusSelector';
import { getPasswordSelector } from 'features/AuthByUsername/model/selector/getPasswordSelector/getPasswordSelector';
import { getUsernameSelector } from 'features/AuthByUsername/model/selector/getUsernameSelector/getUsernameSelector';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';

import { useAppDispatch } from 'shared/hooks/useAppHooks';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input/Input';

import s from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
  autofocus?: boolean;
}

export const LoginForm = memo(({ className, autofocus }: LoginFormProps) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const username = useSelector(getUsernameSelector);
  const password = useSelector(getPasswordSelector);
  const loginStatus = useSelector(getLoginStatusSelector);

  const isLoading = loginStatus === 'loading';
  const isError = loginStatus === 'reject';
  const buttonTheme = isLoading ? ButtonTheme.DISABLED : ButtonTheme.PRIMARY;

  const onChangeUserName = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );

  const onChangePasswordName = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const onLogin = () => dispatch(loginByUsername({ username, password }));

  return (
    <div className={cn(s.root, className)}>
      <Input
        value={username}
        onChange={onChangeUserName}
        autofocus={autofocus}
        title={t('loginModal.imya-polzovatelya')}
      />
      <Input value={password} onChange={onChangePasswordName} title={t('loginModal.parol')} />
      <Button theme={buttonTheme} onClick={onLogin}>
        {t('loginModal.voiti')}
      </Button>
    </div>
  );
});

LoginForm.displayName = 'LoginForm';
