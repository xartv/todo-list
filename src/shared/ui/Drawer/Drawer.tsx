import { memo, ReactNode } from 'react';
import cn from 'classnames';

import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';

import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';

import s from './Drawer.module.scss';

interface DrawerProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Drawer = memo((props: DrawerProps) => {
  const { className, children, onClose, isOpen } = props;
  const { theme } = useTheme();

  return (
    <Portal>
      <div className={cn(s.root, className, theme, 'app_drawer', { [s.opened]: isOpen })}>
        <Overlay onClick={onClose} />
        <div className={s.content}>{children}</div>
      </div>
    </Portal>
  );
});
