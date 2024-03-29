import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, ButtonTheme } from '../Button';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = memo(({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const onChange = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <div className={className}>
      <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onChange}>
        {t('sidebar.language')}
      </Button>
    </div>
  );
});
