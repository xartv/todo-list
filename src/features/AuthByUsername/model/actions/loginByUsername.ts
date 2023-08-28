import { createAsyncThunk } from '@reduxjs/toolkit';

import { CustomThunkApi } from 'app/providers/StoreProvider';

import { userActions, UserEntity } from 'entities/User';

import { LOCAL_STORAGE_AUTH_USER } from 'shared/const/globalConsts';

import { loginActions } from '../slice/loginSlice';

export interface loginByUsernameProps {
  username?: string;
  password?: string;
}

export const loginByUsername = createAsyncThunk<UserEntity, loginByUsernameProps, CustomThunkApi<string>>(
  'login/loginByUsername',
  async (userData, thunkApi) => {
    const {
      extra: { api },
      dispatch,
    } = thunkApi;
    try {
      const response = await api.post<UserEntity>('/login', userData);

      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(LOCAL_STORAGE_AUTH_USER, JSON.stringify(response.data));
      dispatch(userActions.setAuthUser(response.data));
      dispatch(loginActions.clearLoginData());

      return response.data;
    } catch (error) {
      console.error(error);
      thunkApi.dispatch(loginActions.clearUsernameAndPassword());
      return thunkApi.rejectWithValue('Неправильное имя пользователя или пароль');
    }
  },
);
