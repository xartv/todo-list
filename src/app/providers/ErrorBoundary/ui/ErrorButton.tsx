import React from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from 'shared/ui/Button';

interface ErrorButtonProps {
  className?: string;
}

export const ErrorButton = ({ className }: ErrorButtonProps) => {
  const [error, setError] = React.useState(false);

  const { t } = useTranslation();

  React.useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  const onError = () => {
    setError(true);
  };

  return (
    <Button onClick={onError} className={className}>
      {t('global.sozdat-oshibku')}
    </Button>
  );
};
