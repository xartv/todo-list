import { ErrorButton } from 'app/providers/ErrorBoundary';

import { Page } from 'shared/ui/Page/Page';

const TestPage = () => {
  return (
    <Page>
      <ErrorButton />
    </Page>
  );
};

export default TestPage;
