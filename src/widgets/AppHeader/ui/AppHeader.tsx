import { AppLink } from 'shared/ui/AppLink';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';

import s from './AppHeader.module.scss';

export const AppHeader = () => {
  return (
    <div className={s.root}>
      <AppLink to="/todos" theme={AppLinkTheme.SECONDARY}>
        Todos
      </AppLink>
      <AppLink to="/test" theme={AppLinkTheme.SECONDARY}>
        Test Page
      </AppLink>
    </div>
  );
};
