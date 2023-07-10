import { createAsyncThunk } from '@reduxjs/toolkit';

import { CustomThunkApi } from 'app/providers/StoreProvider';

import { ProfileEntity } from 'entities/Profile/model/types/profile';

import { getProfileDataSelector } from '../selectors/getProfileDataSelector/getProfileDataSelector';

export const updateProfileData = createAsyncThunk<ProfileEntity, undefined, CustomThunkApi<string>>(
  'profile/updateProfileData',
  async (_, thunkApi) => {
    const {
      extra: { api },
      getState,
    } = thunkApi;
    try {
      const formData = getProfileDataSelector(getState());

      const response = await api.put<ProfileEntity>('/profile', formData);

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
