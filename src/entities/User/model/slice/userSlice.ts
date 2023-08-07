import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { LOCAL_STORAGE_AUTH_USER } from 'shared/const/globalConsts';

import { UserEntity } from '../types/UserEntity';
import { UserSchema } from '../types/UserSchema';

const initialState: UserSchema = {
  _init: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthUser: (state, action: PayloadAction<UserEntity>) => {
      state.authData = action.payload;
    },
    initAuth: state => {
      const user = localStorage.getItem(LOCAL_STORAGE_AUTH_USER);

      if (user) {
        state.authData = JSON.parse(user);
      }

      state._init = true;
    },
    removeAuthUser: state => {
      localStorage.removeItem(LOCAL_STORAGE_AUTH_USER);
      state.authData = undefined;
    },
  },
});

export const { reducer: userReducer } = userSlice;
export const { actions: userActions } = userSlice;
