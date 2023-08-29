import { ErrorButton } from 'app/providers/ErrorBoundary';

import { Page } from 'widgets/Page';

const TestPage = () => {
  return (
    <Page>
      <ErrorButton />
    </Page>
  );
};

export default TestPage;
