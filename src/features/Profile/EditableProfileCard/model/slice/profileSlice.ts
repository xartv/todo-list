import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ProfileEntity, ProfileSchema } from 'entities/Profile';

import { getProfile } from '../actions/getProfile';
import { updateProfileData } from '../actions/updateProfileData';

export const initialState: ProfileSchema = {
  fetchData: undefined,
  formData: undefined,
  status: 'init',
  error: undefined,
  validationErrors: undefined,
  readonly: true,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload;
    },
    updateProfile: (state, action: PayloadAction<ProfileEntity>) => {
      state.formData = {
        ...state.formData,
        ...action.payload,
      };
    },
    cancelUpdate: state => {
      state.formData = state.fetchData;
      state.readonly = true;
      state.validationErrors = undefined;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getProfile.pending, state => {
        state.error = undefined;
        state.status = 'loading';
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.status = 'idle';
        state.fetchData = action.payload;
        state.formData = action.payload;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.status = 'reject';
        state.error = action.payload;
      })
      .addCase(updateProfileData.pending, state => {
        state.validationErrors = undefined;
        state.status = 'loading';
      })
      .addCase(updateProfileData.fulfilled, (state, action) => {
        state.status = 'idle';
        state.fetchData = action.payload;
        state.formData = action.payload;
        state.readonly = true;
      })
      .addCase(updateProfileData.rejected, (state, action) => {
        state.status = 'reject';
        state.validationErrors = action.payload;
      });
  },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
