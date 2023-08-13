import { createAsyncThunk } from '@reduxjs/toolkit';

import { CustomThunkApi } from 'app/providers/StoreProvider';

import { ProfileEntity } from '../../../../../entities/Profile/model/types/profile';

export const getProfile = createAsyncThunk<ProfileEntity, string, CustomThunkApi<string>>(
  'profile/getProfile',
  async (profileId, thunkApi) => {
    const {
      extra: { api },
    } = thunkApi;
    try {
      const response = await api.get<ProfileEntity>(`/profile/${profileId}`);

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
