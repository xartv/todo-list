import * as React from 'react';
import cn from 'classnames';

import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';

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
  const [isClosing, setIsClosing] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);

  const timerRef = React.useRef() as React.MutableRefObject<ReturnType<typeof setTimeout>>;

  const { theme } = useTheme();

  const animationClosing = React.useCallback(() => {
    if (!onClose) return;

    setIsClosing(true);
    timerRef.current = setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 150);
  }, [onClose]);

  const onKeyDown = React.useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        animationClosing();
      }
    },
    [animationClosing],
  );

  React.useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    } else {
      setIsMounted(false);
    }
  }, [isOpen]);

  React.useEffect(() => {
    window.addEventListener('keydown', onKeyDown);

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onKeyDown]);

  if (!isMounted && lazy) return null;

  return (
    <Portal>
      <div className={cn(s.root, className, theme, 'app_modal', { [s.opened]: isOpen, [s.closing]: isClosing })}>
        <Overlay data-click="overlay" className={s.overlay} onClick={animationClosing} />
        <div className={s.content}>{children}</div>
      </div>
    </Portal>
  );
};
