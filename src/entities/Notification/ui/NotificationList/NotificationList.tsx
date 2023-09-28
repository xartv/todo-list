import cn from 'classnames';

import { useNotifications } from '../../api/notificationApi';

import s from './NotificationList.module.scss';

interface NotificationListProps {
  className?: string;
}

export const NotificationList = ({ className }: NotificationListProps) => {
  const { data } = useNotifications(null);

  return (
    <div className={cn(s.root, className)}>
      {data?.map(item => (
        <div key={item.title}>{item.title}</div>
      ))}
    </div>
  );
};
