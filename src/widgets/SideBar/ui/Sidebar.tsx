import React from 'react';
import cn from 'classnames';

import { Button } from 'shared/ui/Button';
import { LangSwitcher } from 'shared/ui/Button/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

import s from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = React.useState(false);

  const toggleCollapsed = () => setCollapsed(prev => !prev);

  return (
    <div data-testid="sidebar" className={cn(s.root, className, { [s.collapsed]: collapsed })}>
      <Button data-testid="toggle-collapse" onClick={toggleCollapsed}>
        {collapsed ? '▶' : '◀'}
      </Button>

      <div className={cn(s.switchersWrapper, { [s.switchersWrapperCollapsed]: collapsed })}>
        <LangSwitcher />
        <ThemeSwitcher />
      </div>
    </div>
  );
};
