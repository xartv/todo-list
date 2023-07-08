import { FC, Fragment, memo, SVGProps } from 'react';
import { useTranslation } from 'react-i18next';

import { AppLink } from '../../../../shared/ui/AppLink';
import { AppLinkTheme } from '../../../../shared/ui/AppLink/AppLink';

import s from './AppSidebarLinkItem.module.scss';

interface AppSidebarLinkItemProps {
  to: string;
  title: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
  collapsed?: boolean;
}

export const AppSidebarLinkItem = memo(({ to, title, Icon, collapsed }: AppSidebarLinkItemProps) => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <AppLink to={to} theme={AppLinkTheme.INVERTED} className={s.link}>
        <Icon />
        {!collapsed && <span>{t(title)}</span>}
      </AppLink>
    </Fragment>
  );
});
