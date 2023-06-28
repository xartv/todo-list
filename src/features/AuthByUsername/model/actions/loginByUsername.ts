import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { userActions, UserEntity } from 'entities/User';

import { LOCAL_STORAGE_AUTH_USER } from 'shared/const/globalConsts';

import { loginActions } from '../slice/loginSlice';

export interface loginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<UserEntity, loginByUsernameProps, { rejectValue: string }>(
  'login/loginByUsername',
  async (userData, thunkApi) => {
    try {
      const response = await axios.post<UserEntity>('http://localhost:8000/login', userData);

      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(LOCAL_STORAGE_AUTH_USER, JSON.stringify(response.data));
      thunkApi.dispatch(userActions.setAuthUser(response.data));
      thunkApi.dispatch(loginActions.clearLoginData());

      return response.data;
    } catch (error) {
      console.error(error);
      thunkApi.dispatch(loginActions.clearUsernameAndPassword());
      return thunkApi.rejectWithValue('Неправильное имя пользователя или пароль');
    }
  },
);
