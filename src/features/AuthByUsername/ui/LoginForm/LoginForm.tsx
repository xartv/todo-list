import { memo, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { useAppDispatch } from 'shared/hooks/useAppHooks';
import { DynamicReducerLoader } from 'shared/lib/components/DynamicReducerLoader';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';

import { loginByUsername } from '../../model/actions/loginByUsername';
import { getLoginStatusSelector } from '../../model/selector/getLoginStatusSelector/getLoginStatusSelector';
import { getPasswordSelector } from '../../model/selector/getPasswordSelector/getPasswordSelector';
import { getUsernameSelector } from '../../model/selector/getUsernameSelector/getUsernameSelector';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';

import s from './LoginForm.module.scss';

export interface LoginFormProps {
  className?: string;
  autofocus?: boolean;
}

const loginReducerObject = {
  login: loginReducer,
};

const LoginForm = memo(({ className, autofocus }: LoginFormProps) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const username = useSelector(getUsernameSelector);
  const password = useSelector(getPasswordSelector);
  const loginStatus = useSelector(getLoginStatusSelector);

  const isLoading = loginStatus === 'loading';
  const isError = loginStatus === 'reject';
  const buttonTheme = useMemo(() => (isLoading ? ButtonTheme.DISABLED : ButtonTheme.PRIMARY), [isLoading]);

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

  const onLogin = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    <DynamicReducerLoader asyncReducers={loginReducerObject} removeOnUnmount>
      <div className={cn(s.root, className)}>
        <Text title={t('loginModal.forma-avtorizacii')} />
        {isError && <Text theme={TextTheme.ERROR} description={t('loginModal.login-error')} />}
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
    </DynamicReducerLoader>
  );
});

LoginForm.displayName = 'LoginForm';
export default LoginForm;
