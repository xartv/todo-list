import { ReactNode } from 'react';
import { Popover as HPopover } from '@headlessui/react';
import cn from 'classnames';

import { DropdownDirection } from 'shared/types/ui';

// TODO: Config eslint
//eslint-disable-next-line
import { mapDirectionClass } from '../../styles/consts';

//eslint-disable-next-line
import popupS from '../../styles/popup.module.scss';
import s from './Popover.module.scss';

interface PopoverProps {
  className?: string;
  direction?: DropdownDirection;
  trigger: ReactNode;
  children: ReactNode;
}

export function Popover(props: PopoverProps) {
  const { className, trigger, direction = 'bottom right', children } = props;

  const menuClasses = [mapDirectionClass[direction]];

  return (
    <HPopover className={cn(s.root, popupS.popup, className)}>
      <HPopover.Button className={popupS.trigger}>{trigger}</HPopover.Button>

      <HPopover.Panel className={cn(s.panel, menuClasses)}>{children}</HPopover.Panel>
    </HPopover>
  );
}
