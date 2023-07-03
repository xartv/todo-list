import { DeepPartial } from '@reduxjs/toolkit';

import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

import { LoginSchema } from '../../types/loginSchema';

import { getUsernameSelector } from './getUsernameSelector';

describe('test getUsernameSelector', () => {
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

    expect(getUsernameSelector(state as StateSchema)).toEqual('Batman');
  });
});
