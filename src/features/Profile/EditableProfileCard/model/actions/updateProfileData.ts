import { createAsyncThunk } from '@reduxjs/toolkit';

import { CustomThunkApi } from 'app/providers/StoreProvider';

import { EProfileValidationError } from 'entities/Profile/model/const/profileConts';
import { ProfileEntity } from 'entities/Profile/model/types/profile';

import { validateProfile } from '../../utils/validateProfile';
import { getProfileDataSelector } from '../selectors/getProfileDataSelector/getProfileDataSelector';

export const updateProfileData = createAsyncThunk<ProfileEntity, void, CustomThunkApi<EProfileValidationError[]>>(
  'profile/updateProfileData',
  async (_, thunkApi) => {
    const {
      extra: { api },
      getState,
    } = thunkApi;
    try {
      const formData = getProfileDataSelector(getState());

      const errors = validateProfile(formData);

      if (errors.length) {
        return thunkApi.rejectWithValue(errors);
      }

      const response = await api.put<ProfileEntity>(`/profile/${formData?.id}`, formData);

      return response.data;
    } catch (error) {
      console.error(error);
      return thunkApi.rejectWithValue([EProfileValidationError.SERVER_ERROR]);
    }
  },
);
