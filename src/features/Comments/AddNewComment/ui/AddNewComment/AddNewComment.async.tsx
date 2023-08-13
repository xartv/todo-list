import * as React from 'react';

export const AddNewCommentAsync = React.lazy(
  () =>
    new Promise(resolve => {
      // @ts-ignore
      setTimeout(() => resolve(import('./AddNewComment')), 1000);
    }),
);
