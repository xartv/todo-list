import * as React from 'react';
import cn from 'classnames';

import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';

import { useModal } from 'shared/hooks/useModal';

import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal';

import s from './Modal.module.scss';

export interface ModalProps {
  className?: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

export const Modal = ({ className, children, isOpen, lazy, onClose }: ModalProps) => {
  const { close, isClosing, isMounted } = useModal({ isOpen, onClose, animationDelay: 150 });

  const { theme } = useTheme();

  if (!isMounted && lazy) return null;

  return (
    <Portal>
      <div className={cn(s.root, className, theme, 'app_modal', { [s.opened]: isOpen, [s.closing]: isClosing })}>
        <Overlay data-click="overlay" className={s.overlay} onClick={close} />
        <div className={s.content}>{children}</div>
      </div>
    </Portal>
  );
};
