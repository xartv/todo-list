import * as React from 'react';

export const ArticleEditPageAsync = React.lazy(
  () =>
    new Promise(resolve => {
      // @ts-ignore
      setTimeout(() => resolve(import('./ArticleEditPage')), 1000);
    }),
);
