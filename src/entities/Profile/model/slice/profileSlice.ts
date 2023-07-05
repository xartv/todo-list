import { createSlice } from '@reduxjs/toolkit';

import { ProfileSchema } from '../types/profile';

export const initialState: ProfileSchema = {
  profile: undefined,
  status: 'init',
  error: undefined,
  readonly: true,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: {},
});

export const { reducer: profileReducer } = profileSlice;
