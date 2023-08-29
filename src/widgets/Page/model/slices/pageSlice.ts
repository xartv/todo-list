import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PageSchema } from '../types/page';

const initialState: PageSchema = {
  scroll: {},
};

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setScrollPosition: (state, action: PayloadAction<{ path: string; position: number }>) => {
      state.scroll[action.payload.path] = action.payload.position;
    },
  },
});

export const { reducer: pageReducer } = pageSlice;
export const { actions: pageActions } = pageSlice;
