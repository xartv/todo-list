import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { LoginModal } from 'features/AuthByUsername';

import { Button, ButtonTheme } from 'shared/ui/Button';

import s from './AppHeader.module.scss';

export const AppHeader = () => {
  const { t } = useTranslation();

  const [isLoginModalOpen, setIsLoginModalOpen] = React.useState(false);

  const openModal = React.useCallback(() => setIsLoginModalOpen(true), []);
  const closeModal = React.useCallback(() => setIsLoginModalOpen(false), []);

  return (
    <div className={s.root}>
      <div className={s.links}>
        <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={openModal}>
          {t('header.voiti')}
        </Button>
      </div>

      <LoginModal isOpen={isLoginModalOpen} onClose={closeModal} overlayClose lazy />
    </div>
  );
};
