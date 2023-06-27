import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserEntity } from '../types/UserEntity';
import { UserSchema } from '../types/UserSchema';

const initialState: UserSchema = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthUser: (state, action: PayloadAction<UserEntity>) => {
      state.authData = action.payload;
    },
  },
});

export const { reducer: userReducer } = userSlice;
export const { actions: userActions } = userSlice;
