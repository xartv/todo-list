import { createSlice } from '@reduxjs/toolkit';

import { getProfile } from '../actions/getProfile';
import { ProfileSchema } from '../types/profile';

export const initialState: ProfileSchema = {
  data: undefined,
  status: 'init',
  error: undefined,
  readonly: true,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getProfile.pending, state => {
        state.error = undefined;
        state.status = 'loading';
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.status = 'reject';
        state.error = action.payload;
      });
  },
});

export const { reducer: profileReducer } = profileSlice;
