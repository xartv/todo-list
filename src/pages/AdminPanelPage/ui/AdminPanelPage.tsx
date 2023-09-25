import { memo } from 'react';
import cn from 'classnames';

import s from './AdminPanelPage.module.scss';

interface AdminPanelPageProps {
  className?: string;
}

const AdminPanelPage = ({ className }: AdminPanelPageProps) => {
  return <div className={cn(s.root, className)}>{'AdminPanelPage'}</div>;
};

export default memo(AdminPanelPage);
