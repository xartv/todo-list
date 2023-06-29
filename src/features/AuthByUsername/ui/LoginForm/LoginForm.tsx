import { memo, useCallback, useEffect } from 'react';
import { useSelector, useStore } from 'react-redux';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { ReduxStoreWithManager } from 'app/providers/StoreProvider';

import { useAppDispatch } from 'shared/hooks/useAppHooks';
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

const LoginForm = memo(({ className, autofocus }: LoginFormProps) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const store = useStore() as ReduxStoreWithManager;

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

  const onLogin = () => {
    dispatch(loginByUsername({ username, password }));
  };

  useEffect(() => {
    store.reducerManager.add('login', loginReducer);
    dispatch({ type: '@INIT loginReducer' });

    return () => {
      store.reducerManager.remove('login');
      dispatch({ type: '@REMOVE loginReducer' });
    };
    // eslint-disable-next-line
  }, []);

  return (
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
  );
});

LoginForm.displayName = 'LoginForm';
export default LoginForm;
