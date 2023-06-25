import cn from 'classnames';

import { Modal } from 'shared/ui/Modal';
import { ModalProps } from 'shared/ui/Modal/Modal';

import { LoginForm } from '../LoginForm/LoginForm';

import s from './LoginModal.module.scss';

export const LoginModal = ({ className, ...modalProps }: Omit<ModalProps, 'children'>) => {
  return (
    <div className={cn(s.root, className)}>
      <Modal {...modalProps}>
        <LoginForm />
      </Modal>
    </div>
  );
};
