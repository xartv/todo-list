import { DeepPartial } from '@reduxjs/toolkit';

import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

import { LoginSchema } from '../../types/loginSchema';

import { getLoginSelector } from './getLoginSelector';

describe('test getLoginSelector', () => {
  test('return todos', () => {
    const MOCK_LOGIN: LoginSchema = {
      status: 'loading',
      error: 'ERROR',
      username: 'Batman',
      password: 'Password',
    };
    const state: DeepPartial<StateSchema> = {
      login: MOCK_LOGIN,
    };

    expect(getLoginSelector(state as StateSchema)).toEqual(MOCK_LOGIN);
  });
});
