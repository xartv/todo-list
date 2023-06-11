import { AppLink } from 'shared/ui/AppLink';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

import s from './AppHeader.module.scss';

export const AppHeader = () => {
  return (
    <div className={s.root}>
      <ThemeSwitcher></ThemeSwitcher>
      <div className={s.links}>
        <AppLink to="/todos" theme={AppLinkTheme.SECONDARY}>
          Todos
        </AppLink>
        <AppLink to="/test" theme={AppLinkTheme.SECONDARY}>
          Test Page
        </AppLink>
      </div>
    </div>
  );
};
