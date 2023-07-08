import { memo, useCallback, useMemo, useState } from 'react';
import cn from 'classnames';

import { Button, ButtonTheme } from 'shared/ui/Button';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

import { sidebarLinks } from '../../model/sidebarLinks';
import { AppSidebarLinkItem } from '../AppSidebarLinkItem/AppSidebarLinkItem';

import s from './AppSidebar.module.scss';

interface AppSidebarProps {
  className?: string;
}

export const AppSidebar = memo(({ className }: AppSidebarProps) => {
  const [collapsed, setCollapsed] = useState(true);

  const linkItemsList = useMemo(
    () =>
      sidebarLinks.map(link => (
        <AppSidebarLinkItem
          key={`SIDEBAR_LINK_ITEM_${link.title}`}
          to={link.link}
          title={link.title}
          Icon={link.icon}
          collapsed={collapsed}
        />
      )),
    [collapsed],
  );

  const toggleCollapsed = useCallback(() => setCollapsed(prev => !prev), []);

  return (
    <div data-testid="sidebar" className={cn(s.root, className, { [s.collapsed]: collapsed })}>
      <Button theme={ButtonTheme.CLEAR_INVERTED} data-testid="toggle-collapse" onClick={toggleCollapsed}>
        {collapsed ? '▶' : '◀'}
      </Button>

      <div className={s.links}>{linkItemsList}</div>

      <div className={cn(s.switchersWrapper, { [s.switchersWrapperCollapsed]: collapsed })}>
        <LangSwitcher />
        <ThemeSwitcher />
      </div>
    </div>
  );
});
