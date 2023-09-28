import cn from 'classnames';

import s from './NotificationItem.module.scss';

interface NotificationItemProps {
  className?: string;
}

export const NotificationItem = ({ className }: NotificationItemProps) => {
  return <div className={cn(s.root, className)}>{'NotificationItem'}</div>;
};
