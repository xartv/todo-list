import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { Button, ButtonTheme } from 'shared/ui/Button';
import { Modal } from 'shared/ui/Modal';

import s from './AppHeader.module.scss';

export const AppHeader = () => {
  const { t } = useTranslation();

  const [isAuthModalOpen, setIsAuthModalOpen] = React.useState(false);

  const openModal = () => setIsAuthModalOpen(true);
  const closeModal = React.useCallback(() => setIsAuthModalOpen(false), []);

  return (
    <div className={s.root}>
      <div className={s.links}>
        <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={openModal}>
          {t('voiti')}
        </Button>
      </div>

      <Modal isOpen={isAuthModalOpen} onClose={closeModal} overlayClose>
        {t('lorem')}
      </Modal>
    </div>
  );
};
