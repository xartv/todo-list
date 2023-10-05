import { memo, ReactNode } from 'react';
import cn from 'classnames';

import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';

import { useModal } from 'shared/hooks/useModal';

import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';

import s from './Drawer.module.scss';

interface DrawerProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

export const Drawer = memo(({ className, children, isOpen, lazy, onClose }: DrawerProps) => {
  const { close, isClosing, isMounted } = useModal({ isOpen, onClose, animationDelay: 150 });

  const { theme } = useTheme();

  if (!isMounted && lazy) return null;

  return (
    <Portal>
      <div className={cn(s.root, className, theme, 'app_drawer', { [s.opened]: isOpen, [s.closing]: isClosing })}>
        <Overlay onClick={close} />
        <div className={s.content}>{children}</div>
      </div>
    </Portal>
  );
});
