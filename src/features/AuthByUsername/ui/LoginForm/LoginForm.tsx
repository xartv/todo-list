import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { Button } from 'shared/ui/Button';

import s from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();

  return (
    <div className={cn(s.root, className)}>
      <input type="text" />
      <input type="text" />
      <Button>{t('global.voiti-modal')}</Button>
    </div>
  );
};
