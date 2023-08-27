import { memo, useCallback, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import cn from 'classnames';

import { getAuthUserSelector } from 'entities/User';

import { Button, ButtonTheme } from 'shared/ui/Button';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

import { getSidebarItemsSelector } from '../../model/selectors/getSidebarItemsSelector';
import { AppSidebarLinkItem } from '../AppSidebarLinkItem/AppSidebarLinkItem';

import s from './AppSidebar.module.scss';

interface AppSidebarProps {
  className?: string;
}

export const AppSidebar = memo(({ className }: AppSidebarProps) => {
  const authUser = useSelector(getAuthUserSelector);
  const sidebarLinks = useSelector(getSidebarItemsSelector);

  const [collapsed, setCollapsed] = useState(true);

  const linkItemsList = useMemo(
    () =>
      sidebarLinks.map(link => {
        if (!authUser && link.isAuth) return;

        return (
          <AppSidebarLinkItem
            key={`SIDEBAR_LINK_ITEM_${link.title}`}
            to={link.link}
            title={link.title}
            Icon={link.icon}
            collapsed={collapsed}
          />
        );
      }),
    [collapsed, authUser, sidebarLinks],
  );

  const toggleCollapsed = useCallback(() => setCollapsed(prev => !prev), []);

  return (
    <menu data-testid="sidebar" className={cn(s.root, className, { [s.collapsed]: collapsed })}>
      <Button theme={ButtonTheme.CLEAR_INVERTED} data-testid="toggle-collapse" onClick={toggleCollapsed}>
        {collapsed ? '▶' : '◀'}
      </Button>

      <div className={s.links}>{linkItemsList}</div>

      <div className={cn(s.switchersWrapper, { [s.switchersWrapperCollapsed]: collapsed })}>
        <LangSwitcher />
        <ThemeSwitcher />
      </div>
    </menu>
  );
});
