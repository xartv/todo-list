import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { useTheme } from 'shared/hooks/useTheme';
import { Button } from 'shared/ui/Button';

import s from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { theme } = useTheme();

  const onBack = () => {
    navigate('/');
    navigate(0);
  };

  return (
    <div className={cn(s.root, className, theme, 'app_page_error')}>
      <span className={s.errorTitle}>{t('global.oops-error')}</span>
      <Button onClick={onBack}>{t('global.na-glavnuyu')}</Button>
    </div>
  );
};
