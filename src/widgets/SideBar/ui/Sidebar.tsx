import React from 'react';
import cn from 'classnames';

import { Button } from 'shared/ui/Button';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

import s from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = React.useState(false);

  const toggleCollapsed = () => setCollapsed(prev => !prev);

  return (
    <div className={cn(s.root, className, { [s.collapsed]: collapsed })}>
      <Button onClick={toggleCollapsed}>{collapsed ? '▶' : '◀'}</Button>

      <ThemeSwitcher className={s.themeSwitcher}></ThemeSwitcher>
    </div>
  );
};
