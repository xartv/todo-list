import { FC, Fragment, SVGProps } from 'react';
import { useTranslation } from 'react-i18next';

import { AppLink } from '../AppLink';
import { AppLinkTheme } from '../AppLink/AppLink';

import s from './SidebarLinkItem.module.scss';

interface SidebarLinkItemProps {
  to: string;
  title: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
  collapsed?: boolean;
}

export const SidebarLinkItem = ({ to, title, Icon, collapsed }: SidebarLinkItemProps) => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <AppLink to={to} theme={AppLinkTheme.INVERTED} className={s.link}>
        <Icon />
        {!collapsed && <span>{t(title)}</span>}
      </AppLink>
    </Fragment>
  );
};
