import * as React from 'react';
import cn from 'classnames';

import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';

import { Portal } from 'shared/ui/Portal';

import s from './Modal.module.scss';

export interface ModalProps {
  className?: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClose?: () => void;
  overlayClose?: boolean;
}

export const Modal = ({ className, children, isOpen, overlayClose, onClose }: ModalProps) => {
  const [isClosing, setIsClosing] = React.useState(false);

  const { theme } = useTheme();

  const timerRef = React.useRef<ReturnType<typeof setTimeout>>();

  const animationClosing = React.useCallback(() => {
    if (!onClose) return;

    setIsClosing(true);
    timerRef.current = setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 150);
  }, [onClose]);

  const closeHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;

    if (target.dataset.click !== 'overlay') {
      event.stopPropagation();
      return;
    }

    if (overlayClose && onClose) {
      animationClosing();
    }
  };

  const onKeyDown = React.useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        animationClosing();
      }
    },
    [animationClosing],
  );

  React.useEffect(() => {
    window.addEventListener('keydown', onKeyDown);

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onKeyDown]);

  return (
    <Portal>
      <div className={cn(s.root, className, theme, 'app_modal', { [s.opened]: isOpen, [s.closing]: isClosing })}>
        <div data-click="overlay" className={s.overlay} onClick={closeHandler}>
          <div className={s.content}>{children}</div>
        </div>
      </div>
    </Portal>
  );
};
