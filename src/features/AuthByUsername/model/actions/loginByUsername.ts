import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { userActions } from 'entities/Todo/User/model/slice/userSlice';
import { UserEntity } from 'entities/Todo/User/model/types/UserEntity';

import { LOCAL_STORAGE_AUTH_USER } from 'shared/const/globalConsts';

export interface loginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<UserEntity, loginByUsernameProps, { rejectValue: string }>(
  'login/loginByUsername',
  async (userData, thunkApi) => {
    try {
      const response = await axios.post<UserEntity>('http://localhost:8000/login', userData, {
        headers: {
          Authorization: '123',
        },
      });

      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(LOCAL_STORAGE_AUTH_USER, JSON.stringify(response.data));
      thunkApi.dispatch(userActions.setAuthUser(response.data));

      return response.data;
    } catch (error) {
      console.error(error);
      return thunkApi.rejectWithValue('Неправильное имя пользователя или пароль');
    }
  },
);
