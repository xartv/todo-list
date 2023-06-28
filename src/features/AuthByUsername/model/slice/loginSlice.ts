import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { loginByUsername } from '../actions/loginByUsername';
import { LoginSchema } from '../types/loginSchema';

const initialState: LoginSchema = {
  status: 'init',
  username: '',
  password: '',
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    clearUsernameAndPassword: state => {
      state.username = '';
      state.password = '';
    },
    clearLoginData: state => {
      state.username = '';
      state.password = '';
      state.error = undefined;
      state.status = 'init';
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginByUsername.pending, state => {
        state.error = undefined;
        state.status = 'loading';
      })
      .addCase(loginByUsername.fulfilled, state => {
        state.status = 'idle';
      })
      .addCase(loginByUsername.rejected, (state, action) => {
        state.status = 'reject';
        state.error = action.payload;
      });
  },
});

export const { reducer: loginReducer } = loginSlice;
export const { actions: loginActions } = loginSlice;
