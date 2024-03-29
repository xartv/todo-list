import { Fragment, memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useMedia } from 'react-use';
import { useTranslation } from 'react-i18next';

import { LoginModal } from 'features/AuthByUsername';

import { NotificationList } from 'entities/Notification';
import { getAuthUserSelector, isUserAdmin, isUserManager, userActions } from 'entities/User';

import { getRouteAdminPanel, getRouteArticleCreate } from 'shared/const/router';
import { useAppDispatch } from 'shared/hooks/useAppHooks';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Drawer } from 'shared/ui/Drawer/Drawer';
import { Popover } from 'shared/ui/Popups';

import s from './AppHeader.module.scss';

export const AppHeader = memo(() => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const authUser = useSelector(getAuthUserSelector);
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);

  const isMobile = useMedia('(max-width: 767px)');

  const openModal = useCallback(() => setIsLoginModalOpen(true), []);
  const closeModal = useCallback(() => setIsLoginModalOpen(false), []);

  const onLogOut = () => {
    dispatch(userActions.removeAuthUser());
    setIsLoginModalOpen(false);
    navigate(0);
  };

  const handleOpenDrawer = useCallback(() => {
    setShowDrawer(true);
  }, []);
  const handleCloseDrawer = useCallback(() => {
    setShowDrawer(false);
  }, []);

  const handleCreateArticle = useCallback(() => {
    navigate(getRouteArticleCreate());
  }, [navigate]);

  const handleAdminPanel = useCallback(() => {
    navigate(getRouteAdminPanel());
  }, [navigate]);

  const shouldShowAdminPanel = isAdmin || isManager;

  if (authUser)
    return (
      <header className={s.root}>
        {isMobile && (
          <>
            <Drawer isOpen={showDrawer} onClose={handleCloseDrawer}>
              <NotificationList />
            </Drawer>
            <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={handleOpenDrawer}>
              {t('header.notification')}
            </Button>
          </>
        )}

        {!isMobile && (
          <Popover trigger={<div>{t('header.notification')}</div>}>
            <NotificationList />
          </Popover>
        )}

        {shouldShowAdminPanel && (
          <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={handleAdminPanel}>
            {t('header.adminPanel')}
          </Button>
        )}
        <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={handleCreateArticle}>
          {t('header.createArticle')}
        </Button>
        <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onLogOut}>
          {t('loginModal.vyiti')}
        </Button>
      </header>
    );

  return (
    <Fragment>
      <header className={s.root}>
        <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={openModal}>
          {t('header.voiti')}
        </Button>
      </header>

      <LoginModal isOpen={isLoginModalOpen} onClose={closeModal} lazy />
    </Fragment>
  );
});
