import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { ErrorButton } from 'app/providers/ErrorBoundary';

const TestPage = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <div>{t('test.privet-mir')}</div>
      <div>{t('test.kak-tvoi-dela')}</div>
      <ErrorButton />
    </React.Fragment>
  );
};

export default TestPage;
