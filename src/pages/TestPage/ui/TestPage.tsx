import * as React from 'react';
import { useTranslation } from 'react-i18next';

const TestPage = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <div>{t('test.privet-mir')}</div>
      <div>{t('test.kak-tvoi-dela')}</div>
    </React.Fragment>
  );
};

export default TestPage;
