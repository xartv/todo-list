import { Modal } from 'shared/ui/Modal';
import { ModalProps } from 'shared/ui/Modal/Modal';

import { LoginForm } from '../LoginForm/LoginForm';

export const LoginModal = ({ className, ...modalProps }: Omit<ModalProps, 'children'>) => {
  return (
    <div className={className}>
      <Modal {...modalProps}>
        <LoginForm />
      </Modal>
    </div>
  );
};
