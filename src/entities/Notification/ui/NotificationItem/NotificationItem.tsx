import cn from 'classnames';

import { Card, CardTheme } from 'shared/ui/Card/Card';
import { Text } from 'shared/ui/Text/Text';

import { NotificationEntity } from '../../model/types/notificationEntity';

import s from './NotificationItem.module.scss';

interface NotificationItemProps {
  className?: string;
  item: NotificationEntity;
}

export const NotificationItem = ({ className, item }: NotificationItemProps) => {
  const content = (
    <Card theme={CardTheme.OUTLINED} className={cn(s.root, className)}>
      <Text title={item.title} />
    </Card>
  );

  if (item.href) {
    return (
      <a target="_blank" href={item.href} rel="noreferrer">
        {content}
      </a>
    );
  }

  return content;
};
