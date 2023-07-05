import { Fragment, memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { LoginModal } from 'features/AuthByUsername';

import { getAuthUserSelector, userActions } from 'entities/User';

import { useAppDispatch } from 'shared/hooks/useAppHooks';
import { Button, ButtonTheme } from 'shared/ui/Button';

import s from './AppHeader.module.scss';

export const AppHeader = memo(() => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const authUser = useSelector(getAuthUserSelector);

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openModal = useCallback(() => setIsLoginModalOpen(true), []);
  const closeModal = useCallback(() => setIsLoginModalOpen(false), []);

  const onLogOut = () => {
    dispatch(userActions.removeAuthUser());
    setIsLoginModalOpen(false);
  };

  if (authUser)
    return (
      <div className={s.root}>
        <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onLogOut}>
          {t('loginModal.vyiti')}
        </Button>
      </div>
    );

  return (
    <Fragment>
      <div className={s.root}>
        <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={openModal}>
          {t('header.voiti')}
        </Button>
      </div>

      <LoginModal isOpen={isLoginModalOpen} onClose={closeModal} overlayClose lazy />
    </Fragment>
  );
});
