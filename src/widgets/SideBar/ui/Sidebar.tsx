import React from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { ReactComponent as TestPageIcon } from 'shared/assets/icons/test-page.svg';
import { ReactComponent as TodoIcon } from 'shared/assets/icons/todo.svg';
import { ROUTE_PATHS } from 'shared/config/routeConfig/routeConfig';
import { AppLink } from 'shared/ui/AppLink';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

import s from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const { t } = useTranslation();

  const [collapsed, setCollapsed] = React.useState(false);

  const toggleCollapsed = () => setCollapsed(prev => !prev);

  return (
    <div data-testid="sidebar" className={cn(s.root, className, { [s.collapsed]: collapsed })}>
      <Button theme={ButtonTheme.CLEAR_INVERTED} data-testid="toggle-collapse" onClick={toggleCollapsed}>
        {collapsed ? '▶' : '◀'}
      </Button>

      <div className={s.links}>
        <AppLink to={ROUTE_PATHS.todos} theme={AppLinkTheme.INVERTED} className={s.link}>
          <TodoIcon />
          {!collapsed && <span>{t('header.zadachi')}</span>}
        </AppLink>
        <AppLink to={ROUTE_PATHS.test_page} theme={AppLinkTheme.INVERTED} className={s.link}>
          <TestPageIcon />
          {!collapsed && <span>{t('header.test')}</span>}
        </AppLink>
      </div>

      <div className={cn(s.switchersWrapper, { [s.switchersWrapperCollapsed]: collapsed })}>
        <LangSwitcher />
        <ThemeSwitcher />
      </div>
    </div>
  );
};
