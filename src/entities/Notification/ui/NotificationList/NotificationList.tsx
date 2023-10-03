import cn from 'classnames';

import { useNotifications } from '../../api/notificationApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';

import s from './NotificationList.module.scss';

interface NotificationListProps {
  className?: string;
}

export const NotificationList = ({ className }: NotificationListProps) => {
  const { data } = useNotifications(null, {
    pollingInterval: 5000,
  });

  return (
    <div className={cn(s.root, className)}>
      {data?.map(item => (
        <NotificationItem key={item.id} item={item} />
      ))}
    </div>
  );
};
