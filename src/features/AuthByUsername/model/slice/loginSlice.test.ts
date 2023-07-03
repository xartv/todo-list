import { DeepPartial } from '@reduxjs/toolkit';

import { LoginSchema } from '../types/loginSchema';

import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
  test('test set username', () => {
    const state: DeepPartial<LoginSchema> = { username: '' };
    expect(loginReducer(state as LoginSchema, loginActions.setUsername('Batman'))).toEqual({ username: 'Batman' });
  });

  test('test set password', () => {
    const state: DeepPartial<LoginSchema> = { password: '' };
    expect(loginReducer(state as LoginSchema, loginActions.setPassword('Password'))).toEqual({ password: 'Password' });
  });
});
