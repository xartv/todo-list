import React from 'react';
import cn from 'classnames';

import { Button, ButtonTheme } from 'shared/ui/Button';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { SidebarLinkItem } from 'shared/ui/SidebarLinkItem/SidebarLinkItem';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

import { sidebarLinks } from '../model/sidebarLinks';

import s from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = React.useState(true);

  const toggleCollapsed = () => setCollapsed(prev => !prev);

  return (
    <div data-testid="sidebar" className={cn(s.root, className, { [s.collapsed]: collapsed })}>
      <Button theme={ButtonTheme.CLEAR_INVERTED} data-testid="toggle-collapse" onClick={toggleCollapsed}>
        {collapsed ? '▶' : '◀'}
      </Button>

      <div className={s.links}>
        {sidebarLinks.map(link => (
          <SidebarLinkItem
            key={`SIDEBAR_LINK_ITEM_${link.title}`}
            to={link.link}
            title={link.title}
            Icon={link.icon}
            collapsed={collapsed}
          />
        ))}
      </div>

      <div className={cn(s.switchersWrapper, { [s.switchersWrapperCollapsed]: collapsed })}>
        <LangSwitcher />
        <ThemeSwitcher />
      </div>
    </div>
  );
};
