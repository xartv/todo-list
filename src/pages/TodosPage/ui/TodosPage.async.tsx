import * as React from 'react';

export const TodosPageAsync = React.lazy(
  () =>
    new Promise(resolve => {
      // @ts-ignore
      setTimeout(() => resolve(import('./TodosPage')), 1000);
    }),
);
