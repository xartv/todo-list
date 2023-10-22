import { memo } from 'react';
import cn from 'classnames';

import { Page } from 'widgets/Page';

import s from './AdminPanelPage.module.scss';

interface AdminPanelPageProps {
  className?: string;
}

const AdminPanelPage = ({ className }: AdminPanelPageProps) => {
  return (
    <Page dataTestid="AdminPanelPage" className={cn(s.root, className)}>
      {'AdminPanelPage'}
    </Page>
  );
};

export default memo(AdminPanelPage);
