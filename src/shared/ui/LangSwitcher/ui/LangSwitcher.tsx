import { useTranslation } from 'react-i18next';

import { Button } from 'shared/ui/Button';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const onChange = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <div className={className}>
      <Button onClick={onChange}>{t('sidebar.language')}</Button>
    </div>
  );
};
