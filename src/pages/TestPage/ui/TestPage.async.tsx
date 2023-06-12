import * as React from 'react';

export const TestPageAsync = React.lazy(
  () =>
    new Promise(resolve => {
      // @ts-ignore
      setTimeout(() => resolve(import('./TestPage')), 1000);
    }),
);
