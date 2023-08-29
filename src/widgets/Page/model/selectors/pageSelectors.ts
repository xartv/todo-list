import { createSelector } from '@reduxjs/toolkit';

import { StateSchema } from 'app/providers/StoreProvider';

export const getScroll = (state: StateSchema) => state.page.scroll;
export const getScrollByPath = createSelector(
  getScroll,
  (_: StateSchema, path: string) => path,
  (scroll, path) => scroll[path] ?? 0,
);
