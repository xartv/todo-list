import { useTranslation } from 'react-i18next';

import { ROUTE_PATHS } from 'shared/config/routeConfig/routeConfig';
import { AppLink } from 'shared/ui/AppLink';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';

import s from './AppHeader.module.scss';

export const AppHeader = () => {
  const { t } = useTranslation();
  return (
    <div className={s.root}>
      <div className={s.links}>
        <AppLink to={ROUTE_PATHS.todos} theme={AppLinkTheme.INVERTED}>
          {t('header.zadachi')}
        </AppLink>
        <AppLink to={ROUTE_PATHS.test_page} theme={AppLinkTheme.INVERTED}>
          {t('header.test')}
        </AppLink>
      </div>
    </div>
  );
};
