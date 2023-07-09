import { createAsyncThunk } from '@reduxjs/toolkit';

import { CustomThunkApi } from 'app/providers/StoreProvider';

import { ProfileEntity } from '../types/profile';

export const getProfile = createAsyncThunk<ProfileEntity, undefined, CustomThunkApi<string>>(
  'profile/getProfile',
  async (_, thunkApi) => {
    const {
      extra: { api },
    } = thunkApi;
    try {
      const response = await api.get<ProfileEntity>('/profile');

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      console.error(error);
      return thunkApi.rejectWithValue('oops-error');
    }
  },
);
