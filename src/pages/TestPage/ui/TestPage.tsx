import * as React from 'react';

import { ErrorButton } from 'app/providers/ErrorBoundary';

const TestPage = () => {
  return (
    <React.Fragment>
      <ErrorButton />
    </React.Fragment>
  );
};

export default TestPage;
