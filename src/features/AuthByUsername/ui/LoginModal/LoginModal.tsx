import { Suspense } from 'react';

import { Loader } from 'shared/ui/Loader';
import { Modal } from 'shared/ui/Modal';
import { ModalProps } from 'shared/ui/Modal/Modal';

import { LoginFormAsync } from '../LoginForm/LoginForm.async';

export const LoginModal = ({ className, ...modalProps }: Omit<ModalProps, 'children'>) => {
  return (
    <div className={className}>
      <Modal {...modalProps}>
        <Suspense fallback={<Loader />}>
          <LoginFormAsync autofocus />
        </Suspense>
      </Modal>
    </div>
  );
};
