import { DeepPartial } from '@reduxjs/toolkit';

import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

import { LoginSchema } from '../../types/loginSchema';

import { getLoginStatusSelector } from './getLoginStatusSelector';

describe('test getLoginStatusSelector', () => {
  test('return todos', () => {
    const MOCK_LOGIN: LoginSchema = {
      status: 'idle',
      error: 'ERROR',
      username: 'Batman',
      password: 'Password',
    };
    const state: DeepPartial<StateSchema> = {
      login: MOCK_LOGIN,
    };

    expect(getLoginStatusSelector(state as StateSchema)).toEqual('idle');
  });
});
