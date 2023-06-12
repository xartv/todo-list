import { useTranslation } from 'react-i18next';

import { AppLink } from 'shared/ui/AppLink';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';

import s from './AppHeader.module.scss';

export const AppHeader = () => {
  const { t } = useTranslation();
  return (
    <div className={s.root}>
      <div className={s.links}>
        <AppLink to="/todos" theme={AppLinkTheme.SECONDARY}>
          {t('header.zadachi')}
        </AppLink>
        <AppLink to="/test" theme={AppLinkTheme.SECONDARY}>
          {t('header.test')}
        </AppLink>
      </div>
    </div>
  );
};
